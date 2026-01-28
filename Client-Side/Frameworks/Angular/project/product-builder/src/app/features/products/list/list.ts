import { Component, EventEmitter, Input, Output, signal, ViewChild } from '@angular/core';
import { ProductService } from '../../../services/product';
import { Product, UpdateProductDto } from '../../../interface/product';
import { Button } from '../../../shared/components/button/button';
import { Modal } from '../../../shared/components/modal/modal';
import { MatIconModule } from '@angular/material/icon';
import { EditProduct } from '../update/update';

@Component({
  selector: 'app-products-list',
  imports: [Button, Modal, MatIconModule, EditProduct],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class ProductsList {
  @ViewChild(EditProduct) updateProductComponent!: EditProduct;

  @Input({ required: true }) products = signal([] as Product[]);
  @Output() loadProducts = new EventEmitter<void>();

  selectedProduct: Product | null = null;
  isUpdating = signal(false);
  isDeleting = signal(false);

  constructor(private productService: ProductService) {}

  selectProduct(product: Product): void {
    this.selectedProduct = { ...product };
  }

  onUpdateProduct(formData: UpdateProductDto) {
    if (!this.selectedProduct) return;

    this.isUpdating.set(true);

    this.productService.updateProduct(this.selectedProduct.id, formData).subscribe({
      next: (updatedProduct) => {
        console.log('Product updated:', updatedProduct);
        this.isUpdating.set(false);
        this.onLoadProducts();
        this.closeModal('update-product-modal');
        this.resetForm();
        this.selectedProduct = null;
      },
      error: (err) => {
        console.error('Error updating product:', err);
        this.isUpdating.set(false);
      },
    });
  }

  onDeleteProduct(): void {
    if (!this.selectedProduct) return;

    this.isDeleting.set(true);

    this.productService.deleteProduct(this.selectedProduct.id).subscribe({
      next: () => {
        console.log('Product deleted');
        this.isDeleting.set(false);
        this.onLoadProducts();
        this.closeModal('delete-product-modal');
        this.selectedProduct = null;
      },
      error: (err) => {
        console.error('Error deleting product:', err);
        this.isDeleting.set(false);
      },
    });
  }

  resetForm(): void {
    if (this.updateProductComponent) {
      this.updateProductComponent.reset();
    }
  }

  onCancelUpdate(): void {
    this.selectedProduct = null;
  }

  onCancelDelete(): void {
    this.selectedProduct = null;
  }

  onLoadProducts() {
    this.loadProducts.emit();
  }

  private closeModal(modalId: string): void {
    const dialog = document.getElementById(modalId) as HTMLDialogElement;
    if (dialog) {
      dialog.close();
    }
  }
}
