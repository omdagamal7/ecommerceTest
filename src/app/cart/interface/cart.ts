export interface Cart {
  numOfCartItems: number,
  data:Data
}
interface Data {
  totalCartPrice: number,
  products:Product[]
}
interface Product  {
  count: number,
  price: number,
  product: InnerProduct
}
interface InnerProduct {
  title: string,
  id: string,
  imageCover: string,
  category: Category
  ratingsAverage: string
}
interface Category {
  name: string

}