import { Component, EventEmitter, Output, OnInit, signal, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Category } from '../../../interface/category';
import { CategoryService } from '../../../services/category';
import { Product } from '../../../interface/product';

@Component({
  selector: 'app-update-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class EditProduct {
  @Input({ required: true }) productData!: Product;
  @Output() formSubmit = new EventEmitter<any>();

  categories = signal<Category[]>([]);
  productForm = new FormGroup({
    name: new FormControl(this.productData?.name, {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    categoryId: new FormControl<number | null>(null, Validators.required),
    price: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0.01)],
    }),
    stock: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0)],
    }),
    description: new FormControl(''),
    img: new FormControl('', Validators.pattern(/^https?:\/\/.+/)),
  });

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  ngOnChanges() {
    if (this.productData) {
      this.productForm.patchValue(this.productData);
    } else {
      this.productForm.reset({
        name: '',
        categoryId: null,
        price: 0,
        stock: 0,
        description: '',
        img: '',
      });
    }
  }

  private loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (categories) => this.categories.set(categories),
      error: (err) => console.error('Error fetching categories:', err),
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.formSubmit.emit(this.productForm.getRawValue());
    } else {
      this.productForm.markAllAsTouched();
    }
  }

  reset(): void {
    this.productForm.reset({
      name: '',
      categoryId: null,
      price: 0,
      stock: 0,
      description: '',
      img: '',
    });
  }

  getControl(name: string) {
    return this.productForm.get(name);
  }

  getErrorMessage(controlName: string): string {
    const control = this.getControl(controlName);

    if (!control || !control.touched || !control.errors) return '';

    if (control.errors['required']) {
      return `${this.getFieldLabel(controlName)} is required`;
    }

    if (control.errors['minlength']) {
      return `${this.getFieldLabel(controlName)} must be at least ${
        control.errors['minlength'].requiredLength
      } characters`;
    }

    if (control.errors['min']) {
      return `${this.getFieldLabel(controlName)} must be at least ${control.errors['min'].min}`;
    }

    if (control.errors['pattern']) {
      return `${this.getFieldLabel(controlName)} must be a valid URL`;
    }

    return '';
  }

  private getFieldLabel(controlName: string): string {
    const labels: Record<string, string> = {
      name: 'Product name',
      categoryId: 'Category',
      price: 'Price',
      stock: 'Stock quantity',
      description: 'Description',
      img: 'Image URL',
    };
    return labels[controlName] || controlName;
  }
}
