import React from 'react';
import AppContext, { WithAppContext }  from './AppContext';

function getPropsFromContext(context) {
  return {
    widgets: context.widgets,
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
