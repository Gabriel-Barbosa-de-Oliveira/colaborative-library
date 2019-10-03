export interface IBook {
  id: number;
  name: string;
  image: string;
  userId: number;
  loan: {
    userId: number;
    date: string;
  };
}
