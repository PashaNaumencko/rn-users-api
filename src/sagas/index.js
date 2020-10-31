import { all } from 'redux-saga/effects';

import usersSagas from '../components/UsersList/sagas'

export default function* rootSaga() {
  yield all([ usersSagas() ]);
}
