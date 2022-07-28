import { FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS,DELETE_TODO,GET_TODO,UPDATE_TODO } from "./constants";
import { ADD_TODO } from "./constants";
import { TodoActions, TodoState } from "./types";

const initialState: TodoState = {
  pending: false,
  todos: [],
  error: null,
  getId: null
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
      case ADD_TODO:
        console.log("🚀 ~ file: reducer.ts ~ line 30 ~ payload", action.payload)
        return {
          ...state,
          todos: [...state.todos, action.payload.name]
        };
      case DELETE_TODO:
          console.log("reducer DELETE_TODO_SUCCESS", action.payload.id);
          const newTodo = state.todos.filter(todo => todo._id !== action.payload.id);
          return {
              ...state,
              todos: [...newTodo]    
        };
        case GET_TODO:
          return {
            ...state,
            getOne:action.payload
          };
    default:
      return {
        ...state,
      };
  }
};
