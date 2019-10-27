import React from 'react';
import createStore from './create-store';
import reducer from './reducer';

const AppContext = React.createContext(undefined);

function WithAppContext(getPropsFromContext, Component) {
  return function (props) {
    return (
      <AppContext.Consumer>
        {
          function (context) {
            const propsFromContext = getPropsFromContext(context);
            return <Component dispatch={context.dispatch} {...propsFromContext} {...props} />;
          }
        }
      </AppContext.Consumer>
    );
  };
}

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.store = createStore(reducer);

    this.store.setCallback(state => this.setState({ ...state }));

    this.state = { ...this.store.getState() };
  }

  render() {
    return (
      <AppContext.Provider value={{ ...this.state, dispatch: this.store.dispatch }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;

export {
  AppContextProvider,
  WithAppContext,
};
