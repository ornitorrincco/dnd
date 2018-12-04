import { all, take } from 'redux-saga/effects';
import { WatchLoginAction } from './LoginSaga';


export default function* rootSaga() {
  yield all([
    WatchLoginAction(),
  ]);
}
