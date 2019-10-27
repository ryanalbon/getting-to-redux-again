import React from 'react';
import { AppContextProvider } from './AppContext';
import WidgetForm from './WidgetForm';
import WidgetList from './WidgetList';

function App(props) {
  return (
    <AppContextProvider>
      <WidgetForm />
      <WidgetList />
    </AppContextProvider>
  );
}

export default App;
