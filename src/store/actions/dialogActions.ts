export type ActionsDialogsType = ReturnType<typeof AddMessage>;

export const AddMessage = (newText: string) =>
  ({
    type: 'ADD-MESSAGE',
    newText,
  } as const);
