export interface User {
  id: number;
  name: string;
  email: string;
  cellphone?: string;
  created_at: string;
}
export interface Category {
  id: number;
  name: string;
}

export interface ProductType {
  id: number;
  name: string;
  slug: string;
  description: string;
  quantity: number;
  qty: number;
  price: number;
  sale_price: number | null;
  primary_image: string;
}
