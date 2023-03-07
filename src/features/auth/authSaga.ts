import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { history } from 'utils/HistoryRouter';
import { LoginPayload, authAction } from './authSlice';
function* handleLogin(payload: LoginPayload) {
  try {
    localStorage.setItem('access_token', 'accessToken');
    yield put(
      authAction.loginSuccess({
        // thong tin lay tu api
        id: 1,
        name: 'khiem le',
      })
    );
    yield call(history.push, '/admin/dashboard');
  } catch (error) {
    yield put(authAction.loginFailed((error as Error).message));
  }
}
function* handleLogout() {
  localStorage.removeItem('access_token');
  // redirect to login
  yield call(history.push, '/login');
}

function* watchLoginFlow() {
  // vong lap vo tan
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      //   console.log('authAction.login.type', authAction.login.type); => auth/login
      const action: PayloadAction<LoginPayload> = yield take(authAction.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authAction.logout.type);
    yield call(handleLogout); // blocking
  }
}
export function* authSaga() {
  yield fork(watchLoginFlow);
}
