import React from 'react';

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

    this.props.store.setCallback(state => this.setState({ ...state }));

    this.state = { ...this.props.store.getState() };
  }

  render() {
    return (
      <AppContext.Provider value={{ ...this.state, dispatch: this.props.store.dispatch }}>
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
