import { purgeStoredState } from 'redux-persist';
import {
  LoginSucceded,
  LoginFailed,
  Logout,
} from '../constants/loginTypes';

const initialState = {
  userData: '',
  loading: false,
};

export const getAPI = state => state.loginReducer.employeeData.language;

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
      case LoginSucceded:
        console.log('Success');
        return {
          ...state,
          userData: action.response,
        };
      // case REHYDRATE:
      //   {
      //     console.log('ACTION PAYLOAD', action.payload.loginReducer);
      //     const savedData = action.payload.loginReducer || initialState;
      //     return {
      //         ...state, ...savedData, loading: false
      //     };
      //   }
      case LoginFailed:
        return {
          ...state,
          loading: false,
        };
      case Logout:
         console.log('Logging Out');
         purgeStoredState(persistConfig);
         return {
           userData: '',
          };
      default:
        return state;
  }
};

export default loginReducer;
