export type ActionsAppType = ReturnType<typeof initializedSuccess>;

export const initializedSuccess = () =>
  ({
    type: 'INITIALIZED_SUCCESS',
  } as const);
