import {
  ActionsAppType,
  ActionsAuthType,
  ActionsDialogsType,
  ActionsProfileType,
  ActionsUsersType,
} from 'store/actions/';

export type ActionAllType =
  | ActionsUsersType
  | ActionsAppType
  | ActionsAuthType
  | ActionsDialogsType
  | ActionsProfileType;
