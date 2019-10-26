import React from 'react';

const AppContext = React.createContext(undefined);

function WithAppContext(getPropsFromContext, Component) {
  return function (props) {
    return (
      <AppContext.Consumer>
        {
          function (context) {
            const propsFromContext = getPropsFromContext(context);
            return <Component {...propsFromContext} {...props} />;
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
