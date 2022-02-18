import { ActionsAuthType } from 'store/actions';

type initialStateType = {
  data: dataType;
  isFetching: boolean;
  isAuth: boolean;
};
type dataType = {
  userId: string;
  email: string;
  login: string;
};

const initialState = {
  data: {} as dataType,
  isFetching: true,
  isAuth: false,
};

export const AuthReducer = (
  state: initialStateType = initialState,
  action: ActionsAuthType,
): initialStateType => {
  switch (action.type) {
    case 'SET-USERS-DATA':
      return {
        ...state,
        data: {
          ...state.data,
          email: action.data.email,
          login: action.data.login,
          userId: action.data.usersId,
        },
      };
    case 'TOGGLE-IS-FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case 'TOGGLE-IS-AUTH':
      return {
        ...state,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};
