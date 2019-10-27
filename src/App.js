import React from 'react';
import AppContext from './AppContext';
import WidgetForm from './WidgetForm';
import WidgetList from './WidgetList';

function createStore() {
  let callback;
  let state = {
    widgets: [
      'Alice',
      'Bob',
    ],
    addWidget: (widget) => {
      state = {
        ...state,
        widgets: [ ...state.widgets, widget ],
      };
      callback(state);
    },
  };

  return {
    getState: () => state,
    setCallback: cb => callback = cb,
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    const store = createStore();

    store.setCallback(state => this.setState({ ...state }));

    this.state = { ...store.getState() };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <WidgetForm />
        <WidgetList />
      </AppContext.Provider>
    );
  }

}

export default App;
