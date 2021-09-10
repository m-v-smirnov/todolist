import React from 'react';
import Todoslines from './Todoslines';
import Todosleft from './Todosleft';
import Todosisdone from './Todosisdone';
import styles from './Todos.module.css';

import {addTodo as addTodoAction,deleteTodo as deleteTodoAction, deleteAllDone as deleteAllDoneAction} from '../store/actions';
import { connect } from "react-redux";


class Todos extends React.Component {
	state = {
				viewRepres: 0,
				value: '',
				todosArr: [],
				itemId: 0,
			}

	handleChange = (event) => {
		this.setState({ value: event.target.value });
	}


	handleSubmit = (event) => {
		//const newArr = this.state.todosArr.slice();
		//const newArr = store.getState().todos;

		event.preventDefault();
		if (this.state.value) {
			const obj = {
				item: this.state.value,
				isdone: false,
				id: this.state.itemId,
			};

			this.props.addTodo(obj);
			//newArr.push(obj);
			this.setState({
				value: '',
				//todosArr: newArr,
				itemId: this.state.itemId + 1
			})
			console.log(this.props.todos);
		}
	}

	setItem = (str, index) => {
		const newArr = this.state.todosArr.slice();
		newArr[index].item = str;
		this.setState({ todosArr: [...newArr] });
	}
	setItemStatus = (state, index) => {
		const newArr = this.state.todosArr.slice();
		newArr[index].isdone = state;
		this.setState({ todosArr: [...newArr] });
	}

	deleteElemById = (id) => {
		this.props.deleteTodo(id);
	}

	deleteAllIsDone = () => {
		this.props.deleteAllDone();
		this.setState({allActive : true});
	}

	notAllActive = () => {
		for (let i=0;i<this.props.todos.length; i++) {
			if (this.props.todos[i].isdone) {
				return true;	
			}
		}
		return false;
	}
	

	render() {
		return (
			<div className={styles.common}>
				<div className={styles.header}>
					<h1>todo list:</h1>
				</div>
				<form className={styles.form}
					onSubmit={this.handleSubmit}>
					<input
						className={styles.input}
						type='text'
						value={this.state.value}
						placeholder='Something To Do'
						onChange={this.handleChange}
					/>
				</form>
				<div>
					{this.props.todos.map((elem, index) =>
						<Todoslines
							elem={elem}
							index={index}
							del={this.deleteElemById}
							setItem={this.setItem}
							setItemStatus={this.setItemStatus}
							rep={this.state.viewRepres}
							key={elem.id}
						/>
					)}
				</div>
				<div className={styles.controls}>
					<div>
						<Todosleft arr={this.props.todos} />
					</div>
					<div>
						<a
							className={(this.state.viewRepres === 0)
								? styles.buttonActive
								: styles.button
							}
							href="#all"
							onClick={(e) => {
								this.setState({ viewRepres: 0 });
								e.preventDefault();
							}}
						>
							All
						</a>
						<a
							className={(this.state.viewRepres === 1)
								? styles.buttonActive
								: styles.button
							}
							href="#active"
							onClick={(e) => {
								this.setState({ viewRepres: 1 });
								e.preventDefault();
							}}
						>
							Active
						</a>
						<a
							className={(this.state.viewRepres === 2)
								? styles.buttonActive
								: styles.button
							}
							href="#complete"
							onClick={(e) => {
								this.setState({ viewRepres: 2 });
								e.preventDefault();
							}}
						>
							Completed
						</a>
					</div>
					<div className={this.notAllActive() ? styles.hideDelButton : styles.delButton}>
						<a
							className={styles.button}
							href="#deleteAllcomleted"
							onClick={(e) => {
								this.deleteAllIsDone();
								e.preventDefault();
							}}
						> 
							delete all completed 
						</a>
						<Todosisdone arr={this.props.todos}/>
					</div>
				</div>
			</div>)
	}
}



const dispatchToProps = (dispatch) => {
	return {
		addTodo : (obj) => dispatch(addTodoAction(obj)),
		deleteTodo: (id) => dispatch(deleteTodoAction(id)),
		deleteAllDone: (id) => dispatch(deleteAllDoneAction(id))
	}
}

const stateToProps = (state) => {
	return {
		todos: state.todoStore.todos
	}
}
export default connect(stateToProps, dispatchToProps)(Todos);

