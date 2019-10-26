import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widgets: [
        'Alice',
        'Bob',
      ],
    };
  }

  render() {
    return (
      <div>
        {
          this.state.widgets.map(
            function (widget, i) {
              return <div key={i}>{widget}</div>;
            }
          )
        }
      </div>
    );
  }
}

export default App;
