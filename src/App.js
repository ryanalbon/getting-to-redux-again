import React from 'react';
import AppContext from './AppContext';
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
      <AppContext.Provider value={this.state}>
        <WidgetForm onSubmit={(widget) => this.addWidget(widget)}/>
        <WidgetList widgets={this.state.widgets} />
      </AppContext.Provider>
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
