import { Component } from '@angular/core';
import { ProductsList } from '../products/list/list';
import { CreateProduct } from '../products/create/create';
import { Modal } from '../../shared/components/modal/modal';

@Component({
  selector: 'app-home',
  imports: [ProductsList, CreateProduct, Modal],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
