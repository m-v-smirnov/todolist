import React, { useState} from 'react';
import styles from './Todoslines.module.css';
import { toggleTodo as toggleTodoAction } from '../store/actions';
import {deleteTodo as deleteTodoAction} from '../store/actions';
import { connect } from "react-redux";

function Todoslines(props) {
	const [inputEditing, setEditing] = useState(false);

	const onInputBlur = () => {
		setEditing(false);
	}

	const onChangeEditHandler = (e) => {
		props.setItem(e.target.value, props.elem.id)
	}
	const onClickLabel = () => {
		setEditing(true);
	}
	const onChangeInputHandler = () => {
		props.toggleTodo(props.elem.id);
	}
	const onClickDelete = () => {
		props.deleteTodo(props.elem.id);
	}
	return (
		<div className={styles.list}>
			<input
				type="checkbox"
				id={props.elem.id}
				name={props.elem.id}
				value={props.elem.isdone}
				checked={props.elem.isdone}
				onChange={onChangeInputHandler}
			/>
			{!inputEditing
				? <label htmlFor={props.elem.id}
					onClick={onClickLabel}
				>
					{props.elem.item}
				</label>
				: <input
					autoFocus
					value={props.elem.item}
					onBlur={onInputBlur}
					onChange={onChangeEditHandler}
				>
				</input>
			}
			<button
				className={styles.del_button}
				onClick={onClickDelete}
			>
				X
			</button>

		</div>)

}

const dispatchToProps = (dispatch) => {
	return {
		toggleTodo: (id) => dispatch(toggleTodoAction(id)),
		deleteTodo: (id) => dispatch(deleteTodoAction(id)),
	}
}

const stateToProps = (state) => {
	return {
		isDone: state.todoStore.todos.isdone,
	}
}
export default connect(stateToProps, dispatchToProps)(Todoslines);



