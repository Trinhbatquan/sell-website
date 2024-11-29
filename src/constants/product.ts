import product1 from "../assets/products/product1.png";
import product2 from "../assets/products/product2.png";
import product3 from "../assets/products/product3.png";
import product4 from "../assets/products/product4.png";
import product5 from "../assets/products/product5.png";
import product6 from "../assets/products/product6.png";
import product7 from "../assets/products/product7.png";
import { IProduct } from "../interfaces";

export const productList: Array<IProduct> = [
  {
    id: 1,
    imgLink: product1,
    title: "Đèn người ôm bóng đèn",
    price: "1.900.000 đ",
    maxQuantity: 20,
  },
  {
    id: 2,
    imgLink: product2,
    title: "Đèn trang trí Left Heat",
    price: "5.000.000 đ",
    maxQuantity: 30,
  },
  {
    id: 3,
    imgLink: product3,
    title: "Ghế da Aimchar Royal",
    price: "1.200.000 đ",
    maxQuantity: 10,
  },
  {
    id: 4,
    imgLink: product4,
    title: "Bàn nước Fence",
    price: "3.200.000 đ",
    maxQuantity: 20,
  },
  {
    id: 5,
    imgLink: product5,
    title: "Ghế da Aimchar Oakway",
    price: "1.200.000 đ",
    maxQuantity: 25,
  },
  {
    id: 6,
    imgLink: product6,
    title: "Đèn chùm Rosemas pha lê",
    price: "5.000.000 đ",
    maxQuantity: 5,
  },
  {
    id: 7,
    imgLink: product7,
    title: "Ghế Sofa Chicago 3 chỗ",
    price: "8.000.000 đ",
    maxQuantity: 7,
  },
];

export const getProductList = (idsList: Array<number>) => {
  return idsList.map(
    (id) =>
      productList.find((product) => product.id === Number(id)) || productList[0]
  );
};
