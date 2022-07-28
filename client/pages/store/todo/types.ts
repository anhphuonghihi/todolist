import { FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS,ADD_TODO } from "./constants";

export interface ITodo {
  _id: number;
  name: string;
  completed: boolean;
}

export interface TodoState {
  pending: boolean;
  todos: ITodo[];
  error: string | null;
}

export interface FetchTodoSuccessPayload {
  todos: ITodo[];
}

export interface FetchTodoRequest {
  type: typeof FETCH_TODO_REQUEST;
}

export type FetchTodoSuccess = {
  type: typeof FETCH_TODO_SUCCESS;
  payload: FetchTodoSuccessPayload;
};
export interface AddTodoSuccessPayload {
  name: string;
}
export type AddTodoSuccess = {
  type: typeof ADD_TODO;
  payload: AddTodoSuccessPayload;
};

export type TodoActions = FetchTodoRequest | FetchTodoSuccess|AddTodoSuccess|AddTodoSuccessPayload;
