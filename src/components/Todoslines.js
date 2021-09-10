import React, { useState } from 'react';
import styles from './Todoslines.module.css';
import {toggleTodo as toggleTodoAction} from '../store/actions';
import { connect } from "react-redux";

function Todoslines(props) {
	const [inputState, setState] = useState(false);
	const [inputEditing, setEditing] = useState(false);
	const displayElem = (props.rep === 0)
		|| (props.rep === 1 && !inputState)
		|| (props.rep === 2 && inputState);


	return (
		<div className={styles.list}
			style={{ display: displayElem ? "" : "none" }}>
			<input
				type="checkbox"
				id={props.elem.id}
				name={props.elem.id}
				value={props.isDone}
				onChange={(e) => {
					setState(e.target.checked);
					props.toggleTodo(props.elem.id);
				}
				}
			/>
			{!inputEditing
				? <label htmlFor={props.elem.id}
					onClick={(e) => {
						setEditing(true);
						e.preventDefault();
					}}
				>
					{props.elem.item}
				</label>
				: <input 
					autoFocus
					value={props.elem.item}
					onBlur={(e) => {
						setEditing(false);
					}}
					onChange={(e) => props.setItem(e.target.value,props.index)}
					>
				</input>
			}
			<button
				className={styles.del_button}
				onClick={(e) => {
					props.del(props.elem.id);
					e.preventDefault();
				}}>
				X
			</button>

		</div>)

}

const dispatchToProps = (dispatch) => {
	return {
		toggleTodo : (id) => dispatch(toggleTodoAction(id))
	}
}

const stateToProps = (state) => {
	return {
		isDone: state.todoStore.todos.isdone
	}
}
export default connect(stateToProps, dispatchToProps)(Todoslines);



