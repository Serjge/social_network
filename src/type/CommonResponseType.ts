export type CommonResponseType<T = {}> = {
  data: T;
  fieldsErrors: [];
  messages: string[];
  resultCode: number;
};
