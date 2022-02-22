import '../styles/globals.css'

import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../store/reducers';

let composeEnhancers = compose
let store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

function MyApp({ Component, pageProps }) {
  return (
    <Provider store = {store} >
      <div>

      <Component {...pageProps} />
      </div>
    </Provider>
  )
}
  
export default MyApp
