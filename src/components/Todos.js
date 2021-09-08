import React from 'react';
import Todoslines from './Todoslines';
import Todosleft from './Todosleft';
import styles from './Todos.module.css';


class Todos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewRepres: 0,
			value: '',
			todosArr: [],
			itemId: 0,
		}
		// this.handleChange = this.handleChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (event) => {
		this.setState({ value: event.target.value });
	}

	handleSubmit = (event) => {
		const newArr = this.state.todosArr.slice();
		event.preventDefault();
		if (this.state.value) {
			const obj = {
				item: this.state.value,
				isdone: false,
				id: this.state.itemId,
			};
			this.setState({ itemId: this.state.itemId + 1 });

			newArr.push(obj);
			this.setState({
				value: '',
				todosArr: [...newArr]
			})
		}
	}

	deleteElemById = (id) => {
		this.setState({
			todosArr: this.state.todosArr.filter((item) => {
				return item.id !== id;
			})
		});
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
					{this.state.todosArr.map((elem, index) =>
						<Todoslines
							elem={elem}
							index={index}
							del={this.deleteElemById}
							rep={this.state.viewRepres}
							key={index}
						/>
					)}
				</div>
				<div className={styles.controls}>
					<div>
						<Todosleft Arr={this.state.todosArr} />
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
					<div>del function soon...</div>
				</div>
			</div>)
	}
}

export default Todos;