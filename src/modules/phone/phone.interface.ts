export interface IPhone extends Document {
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  countInStock: number;
  rating: number;
  numReviews: number;
  isDeleted?: boolean;
}