import React from 'react';
import WidgetForm from './WidgetForm';
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
        <WidgetForm onSubmit={(widget) => this.addWidget(widget)}/>
        <WidgetList widgets={this.state.widgets} />
      </div>
    );
  }

  addWidget(widget) {
    this.setState(
      function (currentState) {
        return {
          widgets: [ ...currentState.widgets, widget ],
        };
      }
    );
  }
}

export default App;
