import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import indexReducer from './reducers/indexReducer';
import {createStore} from 'redux';

const store = createStore(indexReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
)


if (module.hot) {
	module.hot.accept();
}