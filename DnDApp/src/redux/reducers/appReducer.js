import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import navigationReducer from './navigationReducer';

const rootReducer = combineReducers({
  loginReducer,
  navigationReducer,
});

export default rootReducer;
