import React from 'react';
import Todoslines from './Todoslines';
import Todosleft from './Todosleft';
import Todosisdone from './Todosisdone';
import styles from './Todos.module.css';

import { addTodo as addTodoAction } from '../store/actions';
import { editTodo as editTodoAction } from '../store/actions';
import { deleteAllDone as deleteAllDoneAction } from '../store/actions';
import { setVisibilityFilter as setVisibilityFilterAction } from '../store/actions';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';


class Todos extends React.Component {
	state = {
		value: '',
	}

	handleChange = (event) => {
		this.setState({ value: event.target.value });
	}


	handleSubmit = (event) => {

		event.preventDefault();

		this.props.addTodo(this.state.value);
		this.setState({
			value: '',
		})

	}


	setItem = (str, index) => {
		this.props.editTodo(str, index);
	}

	deleteAllIsDone = () => {
		this.props.deleteAllDone();
	}

	notAllActive = () => {
		for (let i = 0; i < this.props.todos.length; i++) {
			if (this.props.todos[i].isdone) {
				return true;
			}
		}
		return false;
	}


	render() {
		console.log("rerender");
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
					{this.props.todosFitlered.map((elem) =>
						<Todoslines
							elem={elem}
							index={elem.id}
							setItem={this.setItem}
							key={elem.id}
						/>
					)}
				</div>
				<div className={styles.controls}>
					<div>
						<Todosleft arr={this.props.todos} />
					</div>
					<div>
						<button
							className={(this.props.filter === 0)
								? styles.buttonActive
								: styles.button
							}
							onClick={(e) => {
								this.props.setVisibilityFilter(0);
							}}
						>
							All
						</button>
						<button
							className={(this.props.filter === 1)
								? styles.buttonActive
								: styles.button
							}
							onClick={(e) => {
								this.props.setVisibilityFilter(1);
							}}
						>
							Active
						</button>
						<button
							className={(this.props.filter === 2)
								? styles.buttonActive
								: styles.button
							}
							onClick={(e) => {
								this.props.setVisibilityFilter(2);
							}}
						>
							Completed
						</button>
					</div>
					<div className={this.notAllActive() ? styles.hideDelButton : styles.delButton}>
						<button
							className={styles.button}
							onClick={this.deleteAllIsDone}
						>
							delete all completed
						</button>
						<Todosisdone arr={this.props.todos} />
					</div>
				</div>
			</div>)
	}
}


const dispatchToProps = {
	addTodo: addTodoAction,
	deleteAllDone: deleteAllDoneAction,
	setVisibilityFilter: setVisibilityFilterAction,
	editTodo: editTodoAction,

}
const getFilter = (state) => state.todoStore.filterType;

const getFilterSelector = createSelector(
	getFilter,
	(state) => state.todoStore.todos,
	(filter, todos) => todos.filter(i => {
		if (filter === 0) return true;
		if (filter === 1) {
			return !i.isdone;
		}
		if (filter === 2) {
			return i.isdone;
		}
	}),
);


const stateToProps = (state) => {
	return {
		todos: state.todoStore.todos,
		todosFitlered: getFilterSelector(state),
		filter: state.todoStore.filterType,
	}
}
export default connect(stateToProps, dispatchToProps)(Todos);

