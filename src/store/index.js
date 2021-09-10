import { combineReducers } from "redux";

const initialState = {
  todos: [],
  filterType: 'all'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload.todo]
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload.id) {
            return Object.assign({}, item, {
              isdone: !item.isdone
            });
          };
          return item;
        })
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((item) => {
          return item.id !== action.payload.id;
        })
      }
    case 'DELETE_ALL_DONE':
      return {
        ...state,
        todos: state.todos.filter((item) => {
          return item.isdone !== true;
        })
      }
    default:
      return state;
  }
}


/*export const actionHi = (todo) => ({
  type: 'ADD_TODO',
  payload: {
    todo
  }
})*/




export const allReducer = combineReducers({
  todoStore: reducer,
});
