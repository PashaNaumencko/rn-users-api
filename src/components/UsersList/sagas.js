import { takeEvery, put, call, all } from 'redux-saga/effects';
import * as userService from '../../services/userService';

import { getUsers } from '../../routines';

function* usersListRequest({ payload }) {
  try {
    yield put(getUsers.request());
    const response = yield call(userService.getUsersList, payload);
    yield put(getUsers.success(response.results));
  } catch (error) {
    yield put(getUsers.failure(error.message));
  } finally {
    yield put(getUsers.fulfill());
  }
}

function* watchUsersListRequest() {
  yield takeEvery(getUsers.TRIGGER, usersListRequest);
}

export default function* usersSagas() {
  yield all([ watchUsersListRequest() ]);
}
