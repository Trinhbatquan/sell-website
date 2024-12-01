import { ProductType } from "../constants";

export interface IProduct {
  id: number;
  imgLink: string;
  title: string;
  price: string;
  variant?: Array<{
    name: string;
    img: string;
  }>;
  maxQuantity: number;
  type: ProductType[];
  color: string;
}
