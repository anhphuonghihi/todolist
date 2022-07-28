import { FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS ,ADD_TODO,DELETE_TODO} from "./constants";
import {
  FetchTodoRequest,
  FetchTodoSuccess,
  FetchTodoSuccessPayload,
} from "./types";

export const fetchTodoRequest = (): FetchTodoRequest => ({
  type: FETCH_TODO_REQUEST,
});


export const fetchTodoSuccess = (payload: FetchTodoSuccessPayload): FetchTodoSuccess => ({
  type: FETCH_TODO_SUCCESS,
  payload,
});
export const addList = name => ({
  type: ADD_TODO,
  payload: { name }
});

export const deleteList = id => ({
  type: DELETE_TODO,
  payload: { id }
});

export const updateList = id => ({
  type: UPDATE_TODO,
  payload: { id ,name}
});

export const getList = id => ({
  type: GET_TODO,
  payload: { id }
});