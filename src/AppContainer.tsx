import { connect } from 'react-redux';

import { App } from 'App';
import { AppStateType } from 'store';
import { getInitialized } from 'store/selectors';
import { initializedApp } from 'store/thunks';

type mapDispatchToPropsType = {
  initializedApp: () => void;
};

type mapStateToPropsType = {
  initialized: boolean;
};

export type AppContainerType = mapDispatchToPropsType & mapStateToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  initialized: getInitialized(state),
});

export const AppContainer = connect(mapStateToProps, {
  initializedApp,
})(App);
