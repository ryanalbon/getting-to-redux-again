import React from 'react';

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

export default WidgetList;
