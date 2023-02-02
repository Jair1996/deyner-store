import { ProductInOrder } from './product.model';

export interface Order {
  id?: string;
  userId: string;
  orderDate: number;
  products: ProductInOrder[];
  totalPrice: number;
}
