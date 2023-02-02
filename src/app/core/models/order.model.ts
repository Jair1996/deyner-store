import { ProductInOrder } from './product.model';

export interface Order {
  id?: string;
  userId: string;
  orderDate: string;
  products: ProductInOrder[];
  totalPrice: number;
}
