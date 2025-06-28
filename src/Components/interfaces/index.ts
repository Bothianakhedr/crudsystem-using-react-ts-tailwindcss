export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  color: string[];
  imageURL: string;
  price: number;
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IFormInput {
  label: string;
  type: string;
  id: string;
  name: string;
}
