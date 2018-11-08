import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import reducers from './reducers'
const rootReducer = combineReducers({
  reducers,
  form:formReducer,
  routing,

});

export default rootReducer;
