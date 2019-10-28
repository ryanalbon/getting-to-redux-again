import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContextProvider } from './AppContext';
import createStore from './create-store';
import reducer from './reducer';

const store = createStore(reducer);

ReactDOM.render(<AppContextProvider store={store}><App /></AppContextProvider>, document.getElementById('root'));
