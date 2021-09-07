import React, { useState } from 'react';
import styles from './Todoslines.module.css';

function Todoslines(props) {
	const [state, setState] = useState(false);
	const displayElem = (props.rep == 0) || (props.rep == 1 && !state) || (props.rep == 2 && state);

	/*	return (
				<div key={props.index} className='todos__list'>
							<label 
							className={state ? styles.checked : styles.default}
							>
					<input
						className='todos__check'
						type="checkbox"
						id={props.index}
						name={props.index}
											style={{display: 'none'}}
						value={state}
											onChange={e => {
													setState(e.target.checked)
											}
											}
					/>
									</label>
					<label for={props.index}> {props.elem}</label>
				</div>)
	*/

	return (
		<div key={props.index} className={styles.list}
		style={{display: displayElem ? "":"none" }}>
			<input
				type="checkbox"
				id={props.index}
				name={props.index}
				value={state}
				onChange={e => {
					setState(e.target.checked)
				}
				}
			/>
			<label for={props.index}> {props.elem}</label>
		</div>)

}
export default Todoslines;
