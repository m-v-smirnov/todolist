
export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: {
    todo
  }
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: {
    id
  }
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: {
    id
  } 
});

export const deleteAllDone = () => ({
  type: 'DELETE_ALL_DONE'
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  payload: {
    filter
  }
});
