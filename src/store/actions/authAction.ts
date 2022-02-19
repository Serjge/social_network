export type ActionsAuthType =
  | ReturnType<typeof setUserAuth>
  | ReturnType<typeof setToggleIsFetching>
  | ReturnType<typeof setToggleIsAuth>;

export const setToggleIsAuth = (isAuth: boolean) =>
  ({
    type: 'TOGGLE-IS-AUTH',
    isAuth,
  } as const);

export const setUserAuth = (usersId: string, email: string, login: string) =>
  ({
    type: 'SET-USERS-DATA',
    data: { usersId, email, login },
  } as const);

export const setToggleIsFetching = (isFetching: boolean) =>
  ({
    type: 'TOGGLE-IS-FETCHING',
    isFetching,
  } as const);
