export interface ProductType {
  _id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  isInStock?: boolean;
  numberInStock?: number;
  description?: string;
  unit?: string;
  rating?: number;
  numberReviews?: number;
}

export interface CartItemType {
  name: string;
  qty: number;
  image: string;
  price: number;
  product: ProductType;
}

export interface OrderItemsType {
  orderItems: CartItemType[];
}
