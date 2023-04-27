import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { legacy_createStore as createStore } from 'redux'
import quoteReducer from './redux//reducers/quoteReducer'
import { Provider } from 'react-redux'

// skapa store
const store = createStore(quoteReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
