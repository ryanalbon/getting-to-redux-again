import React from 'react';
import AppContext from './AppContext';
import WidgetForm from './WidgetForm';
import WidgetList from './WidgetList';

function reducer(state, action) {
  if (action.type === 'ADD_WIDGET') {
    return {
      ...state,
      widgets: [ ...state.widgets, action.payload ],
    };
  }

  return state;
}

function createStore(reducer) {
  let callback;
  let state = {
    widgets: [
      'Alice',
      'Bob',
    ],
  };

  function dispatch(action) {
    state = reducer(state, action);
    callback(state);
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

    this.store = createStore(reducer);

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
