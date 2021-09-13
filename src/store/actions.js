import {actionTypes} from './actionTypes';

export const addTodo = (todo) => ({
  type: actionTypes.addTodo,
  payload: {
    todo
  }
});

export const editTodo = (str,id) => ({
  type: actionTypes.editTodo,
  payload: {
    str,
    id
  }
});

export const toggleTodo = (id) => ({
  type: actionTypes.toggleTodo,
  payload: {
    id
  }
});

export const deleteTodo = (id) => ({
  type: actionTypes.deleteTodo,
  payload: {
    id
  } 
});

export const deleteAllDone = () => ({
  type: actionTypes.deleteAllDone
});

export const setVisibilityFilter = (filter) => ({
  type: actionTypes.setVisibilityFilter,
  payload: {
    filter
  }
});
