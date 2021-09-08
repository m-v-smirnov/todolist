import React, { useState } from 'react';
import styles from './Todoslines.module.css';

function Todoslines(props) {
	const [inputState, setState] = useState(false);
	const displayElem = (props.rep === 0)
		|| (props.rep === 1 && !inputState)
		|| (props.rep === 2 && inputState);
	props.elem.isdone = inputState;

	return (
		<div className={styles.list}
			style={{ display: displayElem ? "" : "none" }}>
			<input
				type="checkbox"
				id={props.index}
				name={props.index}
				value={inputState}
				onChange={e => {
					setState(e.target.checked)
				}
				}
			/>
			<label htmlFor={props.index}>
				{props.elem.item}
			</label>
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
export default Todoslines;
