import { AppStateType } from 'store/store';

export const getInitialized = (state: AppStateType): boolean => state.app.initialized;
