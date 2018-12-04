import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  LoginSucceded,
  LoginFailed,
  LoginAction,
  DoLogin,
  NoNetwork,
} from '../constants/loginTypes';

//1. Worker saga
export function* Login(action) {
  const API = Server.Config.Spanish.ServerApi;
  try {
    console.log('Attempting to call API Login');
    const response = yield call(axios.post, `${API}/login`, { employeeNumber: action.userCode });
  } catch (e) {
    console.log('Request failed! Could not Login.');
  }
  //yield put({ type: clearCameraData });
}

//2. Watcher sagas
// Our Watcher Saga! Spawn a new task on each ACTION
export function* WatchLoginAction() {
  console.log('redux-saga is running the', LoginAction, 'action listener...');
  yield takeEvery(LoginAction, Login);
}
