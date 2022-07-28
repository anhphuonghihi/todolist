import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchTodoSuccess } from "./actions";
import { FETCH_TODO_REQUEST } from "./constants";

import { ADD_TODO,DELETE_TODO } from "./constants";
import { ITodo } from "./types";
const BASE_URL = "http://localhost:5000";

const getTodos = () => axios.get<ITodo[]>(`${BASE_URL}/todo`);
const postTodo = (name) => axios.post(`${BASE_URL}/todo`,{name});
const deleteTodo = (id) => axios.delete(`${BASE_URL}/todo/${id}`);
const getTodo = (id) => axios.get<ITodo[]>(`${BASE_URL}/todo/${id}`);
const updateTodo = (id,name) => axios.put(`${BASE_URL}/todo/${id}`,{name});
/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/

function* fetchTodoSaga(): any {
  try {
    const response = yield call(getTodos);
    yield put(
      fetchTodoSuccess({
        todos: response.data,
      })
    );
  } catch (e) {
    console.log("🚀 ~ file: todo.ts ~ line 22 ~ function*fetchTodoSaga ~ e", e);
  }
}
function* addList({ payload }) {
  const {name}=payload
  const response = yield call(postTodo, name);
  yield call(fetchTodoSaga);
}

function* deleteList({ payload }) {
  const {id}=payload
  const response = yield call(deleteTodo, id);
  yield call(fetchTodoSaga);
}
function* updateList({ payload }) {
  const {id}=payload
  const {name}=payload
  const response = yield call(updateTodo, id,name);
  yield call(fetchTodoSaga);
}

function* getList(): any {
  try {
    const {id}=payload
    const response = yield call(getTodo,id);
    yield put(
      fetchTodoSuccess({
        todos: response.data,
      })
    );
  } catch (e) {
    console.log("🚀 ~ file: todo.ts ~ line 22 ~ function*fetchTodoSaga ~ e", e);
  }
}
/*d
    Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
    Allows concurrent increments.
  */

function* todoSaga() {
  yield all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga),takeLatest(ADD_TODO, addList),takeLatest(DELETE_TODO, deleteList)]);
}
export default todoSaga
 