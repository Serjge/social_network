export type UserType = {
  id: string;
  name: string;
  age: number;
  photos: { small: string; large: string };
  followed: boolean;
  status: string;
  location: { city: string; country: string };
};
