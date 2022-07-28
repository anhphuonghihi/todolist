import { FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS } from "./constants";
import { ADD_TODO,ADD_TODO_SUCCESS } from "./constants";
import { TodoActions, TodoState } from "./types";

const initialState: TodoState = {
  pending: false,
  todos: [],
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        pending: false,
        todos: action.payload.todos,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};
