export interface Product {
  id?: string;
  sku: string;
  name: string;
  brand: string;
  price: number;
  ofert: number;
  gender: string;
  category: string;
  color: string;
  material: string;
  images: string[];
  description: string;
  best: boolean;
}

export interface ProductInCart extends Product {
  quantity: number;
}

export interface ProductInOrder
  extends Omit<
    ProductInCart,
    'gender' | 'category' | 'color' | 'material' | 'images' | 'description' | 'best'
  > {
  image: string;
}
