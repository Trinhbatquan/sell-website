import product1 from "../assets/products/product1.png";
import product2 from "../assets/products/product2.png";
import product3 from "../assets/products/product3.png";
import product4 from "../assets/products/product4.png";
import product5 from "../assets/products/product5.png";
import product6 from "../assets/products/product6.png";
import product7 from "../assets/products/product7.png";
import product8 from "../assets/products/product8.png";
import product9 from "../assets/products/product9.png";
import product10 from "../assets/products/product10.png";
import product11 from "../assets/products/product11.png";
import product12 from "../assets/products/product12.png";
import product13 from "../assets/products/product13.png";
import product14 from "../assets/products/product14.png";
import product15 from "../assets/products/product15.png";
import product16 from "../assets/products/product16.png";
import product17 from "../assets/products/product17.png";
import product18 from "../assets/products/product18.png";
import product19 from "../assets/products/product19.png";
import product20 from "../assets/products/product20.png";
import product21 from "../assets/products/product21.png";
import product22 from "../assets/products/product22.png";
import product23 from "../assets/products/product23.png";
import product24 from "../assets/products/product24.png";
import product25 from "../assets/products/product25.png";
import product26 from "../assets/products/product26.png";
import product27 from "../assets/products/product27.png";
import product28 from "../assets/products/product28.png";
import product29 from "../assets/products/product29.png";
import { IProduct } from "../interfaces";

export enum ProductType {
  COLLECTION = "collection",
  HOME1 = "home1",
  HOME2 = "home2",
  HIEN_DAI = "hien_dai",
  CO_DIEN = "co_dien",
  DON_GIAN = "don_gian",
  SANG_TRONG = "sang_trong",
  GIUONG = "giuong",
  TU = "tu",
  DEN = "den",
  TRANG_TRI = "trang_tri",
  GHE = "ghe",
  ALL = "all",
  BAN = "ban",
}

export const productList: Array<IProduct> = [
  {
    id: 1,
    imgLink: product1,
    title: "Đèn người ôm bóng đèn",
    price: "1.900.000 đ",
    maxQuantity: 20,
    type: [
      ProductType.COLLECTION,
      ProductType.HIEN_DAI,
      ProductType.DEN,
      ProductType.ALL,
    ],
    color: "Xanh lá",
  },
  {
    id: 2,
    imgLink: product2,
    title: "Đèn trang trí Left Heat",
    price: "5.000.000 đ",
    maxQuantity: 30,
    type: [ProductType.COLLECTION, ProductType.HIEN_DAI, ProductType.DEN],
    color: "Đen",
  },
  {
    id: 3,
    imgLink: product3,
    title: "Ghế da Aimchar Royal",
    price: "1.200.000 đ",
    maxQuantity: 10,
    type: [ProductType.COLLECTION, ProductType.HIEN_DAI, ProductType.GHE],
    color: "Trắng",
  },
  {
    id: 4,
    imgLink: product4,
    title: "Bàn nước Fence",
    price: "3.200.000 đ",
    maxQuantity: 20,
    type: [
      ProductType.COLLECTION,
      ProductType.HOME2,
      ProductType.HIEN_DAI,
      ProductType.BAN,
    ],
    color: "Nâu",
  },
  {
    id: 5,
    imgLink: product5,
    title: "Ghế da Aimchar Oakway",
    price: "1.200.000 đ",
    maxQuantity: 25,
    type: [ProductType.HOME1, ProductType.HIEN_DAI, ProductType.GHE],
    color: "Xanh lá",
  },
  {
    id: 6,
    imgLink: product6,
    title: "Đèn chùm Rosemas pha lê",
    price: "5.000.000 đ",
    maxQuantity: 5,
    type: [
      ProductType.HOME1,
      ProductType.HIEN_DAI,
      ProductType.SANG_TRONG,
      ProductType.DEN,
      ProductType.ALL,
    ],
    color: "Đen",
  },
  {
    id: 7,
    imgLink: product7,
    title: "Ghế Sofa Chicago 3 chỗ",
    price: "8.000.000 đ",
    maxQuantity: 7,
    type: [ProductType.HOME2, ProductType.SANG_TRONG, ProductType.GHE],
    color: "Tím",
  },
  {
    id: 8,
    imgLink: product8,
    title: "Đèn chùm thả Royal Crystal",
    price: "2.500.000 đ",
    maxQuantity: 7,
    type: [ProductType.CO_DIEN, ProductType.SANG_TRONG, ProductType.DEN],
    color: "Nâu",
  },
  {
    id: 9,
    imgLink: product9,
    title: "Đèn ngủ để bàn hiện đại",
    price: "1.500.000 đ",
    maxQuantity: 7,
    type: [ProductType.CO_DIEN, ProductType.DEN],
    color: "Đen",
  },
  {
    id: 10,
    imgLink: product10,
    title: "Ghế tựa mây tre đan",
    price: "800.000 đ",
    maxQuantity: 7,
    type: [ProductType.CO_DIEN, ProductType.GHE, ProductType.ALL],
    color: "Trắng",
  },
  {
    id: 11,
    imgLink: product11,
    title: "Ghế Sofa văng bọc da bò nhập khẩu",
    price: "15.000.000 đ",
    maxQuantity: 7,
    type: [ProductType.CO_DIEN, ProductType.GHE],
    color: "Xanh lá",
  },
  {
    id: 12,
    imgLink: product12,
    title: "Ghế Sofa văng văn phòng",
    price: "6.900.000 đ",
    maxQuantity: 7,
    type: [ProductType.CO_DIEN, ProductType.GHE],
    color: "Nâu",
  },
  {
    id: 13,
    imgLink: product13,
    title: "Giường ngủ gỗ MDF Melanine",
    price: "6.700.000 đ",
    maxQuantity: 7,
    type: [
      ProductType.CO_DIEN,
      ProductType.DON_GIAN,
      ProductType.SANG_TRONG,
      ProductType.GIUONG,
    ],
    color: "Nâu",
  },
  {
    id: 14,
    imgLink: product14,
    title: "Giường ngủ Flatform",
    price: "18.500.000 đ",
    maxQuantity: 7,
    type: [ProductType.DON_GIAN, ProductType.GIUONG, ProductType.ALL],
    color: "Trắng",
  },
  {
    id: 15,
    imgLink: product15,
    title: "Giường ngủ CO - SPENCER",
    price: "6.500.000 đ",
    maxQuantity: 7,
    type: [ProductType.DON_GIAN, ProductType.GIUONG],
    color: "Xanh lá",
  },
  {
    id: 16,
    imgLink: product16,
    title: "Giường Cinderella",
    price: "500.000 đ",
    maxQuantity: 7,
    type: [ProductType.DON_GIAN, ProductType.GIUONG],
    color: "Trắng",
  },
  {
    id: 17,
    imgLink: product17,
    title: "Tủ ngăn kéo gỗ",
    price: "500.000 đ",
    maxQuantity: 7,
    type: [ProductType.DON_GIAN, ProductType.TU],
    color: "Trắng",
  },
  {
    id: 18,
    imgLink: product18,
    title: "Tủ quần áo gỗ Joey",
    price: "5.000.000 đ",
    maxQuantity: 7,
    color: "Nâu",
    type: [ProductType.DON_GIAN, ProductType.TU],
  },
  {
    id: 19,
    imgLink: product19,
    title: "Giường Cinderella",
    price: "12.000.000 đ",
    maxQuantity: 7,
    type: [ProductType.SANG_TRONG, ProductType.GIUONG],
    color: "Trắng",
  },
  {
    id: 20,
    imgLink: product20,
    title: "Giường ngủ Jasmine",
    price: "9.900.000 đ",
    maxQuantity: 7,
    type: [ProductType.SANG_TRONG, ProductType.GIUONG],
    color: "Trắng",
  },
  {
    id: 21,
    imgLink: product21,
    title: "Tủ quần áo 5 cánh hiện đại",
    price: "8.900.000 đ",
    maxQuantity: 7,
    type: [ProductType.TU],
    color: "Xanh lá",
  },
  {
    id: 22,
    imgLink: product22,
    title: "Tủ quần áo đa năng",
    price: "9.500.000 đ",
    maxQuantity: 7,
    type: [ProductType.TU, ProductType.ALL],
    color: "Nâu",
  },
  {
    id: 23,
    imgLink: product23,
    title: "Tủ quần áo cánh lùa hiện đại",
    price: "7.800.000 đ",
    maxQuantity: 7,
    type: [ProductType.TU],
    color: "Đen",
  },
  {
    id: 24,
    imgLink: product24,
    title: "Cây trang trí Kalle nhựa",
    price: "130.000 đ",
    maxQuantity: 7,
    type: [ProductType.TRANG_TRI],
    color: "Trắng",
  },
  {
    id: 25,
    imgLink: product25,
    title: "Cây trang trí Xander xi măng",
    price: "700.000 đ",
    maxQuantity: 7,
    type: [ProductType.TRANG_TRI],
    color: "Nâu",
  },
  {
    id: 26,
    imgLink: product26,
    title: "Cây trang trí Matinus nhựa",
    price: "600.000 đ",
    maxQuantity: 7,
    type: [ProductType.TRANG_TRI],
    color: "Xanh lá",
  },
  {
    id: 27,
    imgLink: product27,
    title: "Cây trang trí Godske nhựa",
    price: "600.000 đ",
    maxQuantity: 7,
    type: [ProductType.TRANG_TRI],
    color: "Nâu",
  },
  {
    id: 28,
    imgLink: product28,
    title: "Cây trang trí Hakkon nhựa",
    price: "80.000 đ",
    maxQuantity: 7,
    type: [ProductType.TRANG_TRI],
    color: "Đen",
  },
  {
    id: 29,
    imgLink: product29,
    title: "Cây trang trí Steinar nhựa",
    price: "500.000 đ",
    maxQuantity: 7,
    type: [ProductType.TRANG_TRI, ProductType.ALL],
    color: "Nâu",
  },
];

export const getProductList = (type: ProductType[], price?: string[]) => {
  const result = productList.filter((product) =>
    type.every((item) => product.type.includes(item))
  );
  if (price && price.length > 0) {
    const mappingPrice = price.map((item) => {
      switch (item) {
        case "Dưới 1 triệu":
          return {
            min: 0,
            max: 999999,
          };
        case "Từ 1 triệu đến 2 triệu":
          return {
            min: 1000000,
            max: 2000000,
          };
        case "Từ 2 triệu đến 3 triệu":
          return {
            min: 2000000,
            max: 3000000,
          };
        case "Từ 3 triệu đến 5 triệu":
          return {
            min: 3000000,
            max: 5000000,
          };
        default:
          return {
            min: 5000000,
            max: 100000000,
          };
      }
    });
    return result.filter((item) => {
      const priceConvert = parseInt(
        item.price.replace(/\./g, "").replace(" đ", ""),
        10
      );
      return mappingPrice.some(
        (o) => priceConvert >= o.min && priceConvert <= o.max
      );
    });
  }
  return result;
};

export enum OrderStatus {
  ConfirmWaiting = "confirm-waiting",
  GetItemWaiting = "get-item-waiting",
  Shipping = "shipping",
  Delivered = "delivered",
  Feedback = "feedback",
}

export const getProductListById = (idList: Array<number>) => {
  return productList.filter((item) => idList.includes(item.id));
};
