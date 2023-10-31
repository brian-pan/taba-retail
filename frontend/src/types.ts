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

export interface cartItemType {
  _id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  isInStock?: boolean;
  qty: number;
  updatedAt: string;
  user: string;
  numberInStock?: number;
  description?: string;
  unit?: string;
  rating?: number;
  numberReviews?: number;
}

export interface cartPricesType {
  itemsPrice: string | number;
  deliverPrice: string | number;
  taxPrice: string | number;
  totalPrice: string | number;
}

export interface cartStateType {
  cartItems: cartItemType[];
  cartPrices: cartPricesType;
}
