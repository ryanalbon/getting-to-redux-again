import React from 'react';
import WidgetList from './WidgetList';

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
        <WidgetList widgets={this.state.widgets} />
      </div>
    );
  }
}

export default App;
