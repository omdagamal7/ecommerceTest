export interface Product {
  id: string;
  imageCover: string;
  title: string;
  price: number;
  ratingsAverage: number;
  brand: Brand;
  category: Category;
  description: string;
  images: string[];
}

interface Subcategory {
  name: string;
}
interface Brand {
  name: string;
  image: string;
}
interface Category {
  name: string;
}