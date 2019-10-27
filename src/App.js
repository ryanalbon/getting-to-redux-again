import React from 'react';
import AppContext from './AppContext';
import WidgetForm from './WidgetForm';
import WidgetList from './WidgetList';
import createStore from './create-store';
import reducer from './reducer';

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
