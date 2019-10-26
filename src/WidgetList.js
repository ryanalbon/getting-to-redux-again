import React from 'react';
import AppContext from './AppContext';

function WidgetListWithAppContext(props) {
  return (
    <AppContext.Consumer>
      {
        function (context) {
          return <WidgetList widgets={context.widgets} {...props} />;
        }
      }
    </AppContext.Consumer>
  );
}

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
