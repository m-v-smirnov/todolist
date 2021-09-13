let ids = 0;
const initialState = {
  todos: [],
  filterType: 0
}


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            item: action.payload.todo,
            isdone: false,
            id: ids++
          }]
      }
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.id) return todo;

          return {
            ...todo,
            item: action.payload.str,
          }

        })
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
          return !item.isdone;
        })
      }
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        filterType: action.payload.filter
      }
    default:
      return state;
  }
}




