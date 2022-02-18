import { ActionsAppType } from 'store/actions';


type initialStateType = {
  initialized: boolean
}

const initialState = {
  initialized: false
}

export const AppReducer = (state: initialStateType = initialState, action: ActionsAppType): initialStateType => {
  switch (action.type) {
    case 'INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true
      }

    default:
      return state
  }
}
