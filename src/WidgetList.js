import React from 'react';
import AppContext from './AppContext';

function getPropsFromContext(context) {
  return {
    widgets: context.widgets,
  };
}

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

const WidgetListWithAppContext = WithAppContext(getPropsFromContext, WidgetList);

function WidgetList(props) {
  return (
    <div>
      {
        props.widgets.map(
          function (widget, i) {
            return <div key={i}>{widget}</div>
          }
        )
      }
    </div>
  );
}

export default WidgetListWithAppContext;
