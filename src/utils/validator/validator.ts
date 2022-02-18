// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function requiredField<T>(value: T) {
  if (value) return undefined;
  return 'Field is Required';
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
};
