export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
  categoryId: number;
  stock: number;
}

export interface CreateProductDto {
  name: string;
  price: number;
  img: string;
  description: string;
  categoryId: number;
  stock: number;
}

export interface UpdateProductDto extends Partial<CreateProductDto> {
  id: number;
}
