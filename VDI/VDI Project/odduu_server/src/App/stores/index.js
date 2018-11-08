import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import reducer from './client';

export default combineReducers({
  form: formReducer,
  routing,
  reducer: reducer
})
