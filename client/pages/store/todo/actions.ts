import { FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS } from "./constants";
import {
  FetchTodoRequest,
  FetchTodoSuccess,
  FetchTodoSuccessPayload,
} from "./types";
import {
  AddTodoSuccessPayload,
  AddTodoSuccess,
} from "./types";
export const fetchTodoRequest = (): FetchTodoRequest => ({
  type: FETCH_TODO_REQUEST,
});


export const fetchTodoSuccess = (payload: FetchTodoSuccessPayload): FetchTodoSuccess => ({
  type: FETCH_TODO_SUCCESS,
  payload,
});
