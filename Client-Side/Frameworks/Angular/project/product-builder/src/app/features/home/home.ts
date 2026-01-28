import { Component, Input, OnInit, Output, signal, ViewChild } from '@angular/core';
import { ProductsList } from '../products/list/list';
import { Modal } from '../../shared/components/modal/modal';
import { CreateProduct } from '../products/create/create';
import { ProductService } from '../../services/product';
import { CreateProductDto, Product } from '../../interface/product';
import { Button } from '../../shared/components/button/button';

@Component({
  selector: 'app-home',
  imports: [ProductsList, Modal, CreateProduct, Button],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  @ViewChild(CreateProduct) createProductComponent!: CreateProduct;
  disabled: boolean = this.createProductComponent?.productForm.invalid;

  constructor(private productService: ProductService) {}

  isCreating = signal(false);
  isCreatingError = signal(false);
  isLoadingProductsError = signal(false);
  products = signal([] as Product[]);

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (err) => {
        this.isLoadingProductsError.set(true);
        console.error('Error loading products:', err);
      },
    });
  }

  onCreateProduct(formData: CreateProductDto): void {
    this.isCreating.set(true);
    this.isCreatingError.set(false);

    this.productService.createProduct(formData).subscribe({
      next: (product) => {
        console.log('Product created:', product);
        this.isCreating.set(false);
        this.loadProducts();
        this.resetForm();
        this.closeModal('create-product-modal');
      },
      error: (err) => {
        console.error('Error creating product:', err);
        this.isCreating.set(false);
        this.isCreatingError.set(true);
      },
    });
  }

  onCancelCreate(): void {
    this.resetForm();
  }

  resetForm(): void {
    if (this.createProductComponent) {
      this.createProductComponent.reset();
    }
  }

  private closeModal(modalId: string): void {
    const dialog = document.getElementById(modalId) as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  }
}
