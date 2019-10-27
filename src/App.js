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
  };

  function dispatch(action) {
    if (action.type === 'ADD_WIDGET') {
      state = {
        ...state,
        widgets: [ ...state.widgets, action.payload ],
      };
      callback(state);
    }
  }

  return {
    getState: () => state,
    setCallback: cb => callback = cb,
    dispatch,
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.store = createStore();

    this.store.setCallback(state => this.setState({ ...state }));

    this.state = { ...this.store.getState() };
  }

  render() {
    return (
      <AppContext.Provider value={this.store}>
        <WidgetForm />
        <WidgetList />
      </AppContext.Provider>
    );
  }

}

export default App;
