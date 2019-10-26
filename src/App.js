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
      addWidget: (widget) => {
        this.setState(
          function (currentState) {
            return {
              widgets: [ ...currentState.widgets, widget ],
            };
          }
        );
      },
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <WidgetForm onSubmit={(widget) => this.state.addWidget(widget)}/>
        <WidgetList />
      </AppContext.Provider>
    );
  }

}

export default App;
