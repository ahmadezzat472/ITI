import { Component, Input, signal } from '@angular/core';
import { ProductService } from '../../../services/product';
import { Product } from '../../../interface/product';
import { Button } from '../../../shared/components/button/button';
import { Modal } from '../../../shared/components/modal/modal';

@Component({
  selector: 'app-products-list',
  imports: [Button, Modal],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class ProductsList {
  constructor(private productService: ProductService) {}
  @Input({ required: true }) products = signal([] as Product[]);
}
