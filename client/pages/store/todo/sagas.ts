import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchTodoSuccess } from "./actions";
import { FETCH_TODO_REQUEST } from "./constants";

import { ADD_TODO } from "./constants";
import { ITodo } from "./types";
const BASE_URL = "http://localhost:5000";

const getTodos = () => axios.get<ITodo[]>(`${BASE_URL}/todo`);

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/

function* fetchTodoSaga(): any {
  try {
    const response = yield call(getTodos);
    console.log(
      "🚀 ~ file: sagas.ts ~ line 21 ~ function*fetchTodoSaga ~ response",
      response
    );
    yield put(
      fetchTodoSuccess({
        todos: response.data,
      })
    );
  } catch (e) {
    console.log("🚀 ~ file: todo.ts ~ line 22 ~ function*fetchTodoSaga ~ e", e);
  }
}

/*
    Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
    Allows concurrent increments.
  */
function* todoSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;
