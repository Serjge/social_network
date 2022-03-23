export type ProfileType = {
  aboutMe: string;
  contacts: {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string;
  };
  lookingForAJob: string;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: Photos;
};

export type PostsType = {
  id: string;
  message: string;
  likeCount: number;
  isLike: boolean;
};

export type Photos = {
  small: string | null;
  large: string | null;
};
