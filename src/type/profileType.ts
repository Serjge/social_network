export type ProfileType = {
  aboutMe: string;
  contacts: ContactsType;
  lookingForAJob: string;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: PhotosType;
};

export type PostsType = {
  id: string;
  message: string;
  likeCount: number;
  isLike: boolean;
};

export type PhotosType = {
  small: string | null;
  large: string | null;
};

export type ContactsType = {
  facebook: string;
  website: string;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: string;
  github: string;
  mainLink: string;
};
