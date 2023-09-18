export interface Product {
  sold: string;
  images: string[];
  title: string;
  price: number;
  category: category;
  ratingsAverage: number;
}

interface category {
  name: string;
}