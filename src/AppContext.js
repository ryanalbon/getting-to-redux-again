import React from 'react';

const AppContext = React.createContext(undefined);

function WithAppContext(getPropsFromContext, Component) {
  return function (props) {
    return (
      <AppContext.Consumer>
        {
          function (context) {
            const propsFromContext = getPropsFromContext(context.getState());
            return <Component dispatch={context.dispatch} {...propsFromContext} {...props} />;
          }
        }
      </AppContext.Consumer>
    );
  };
}

export default AppContext;

export {
  WithAppContext,
};
