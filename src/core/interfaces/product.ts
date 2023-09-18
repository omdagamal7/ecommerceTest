export interface Product {
  sold: string;
  imageCover: string;
  title: string;
  price: number;
  category: category;
  ratingsAverage: number;
}

interface category {
  name: string;
}