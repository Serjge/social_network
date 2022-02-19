export type ActionsDialogsType = ReturnType<typeof addMessage>;

export const addMessage = (newText: string) =>
  ({
    type: 'ADD-MESSAGE',
    newText,
  } as const);
