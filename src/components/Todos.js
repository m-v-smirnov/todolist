import React from 'react';
import Todoslines from './Todoslines';
import Todosleft from './Todosleft';
import Todosisdone from './Todosisdone';
import styles from './Todos.module.css';


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
		const newArr = this.state.todosArr.slice();
		event.preventDefault();
		if (this.state.value) {
			const obj = {
				item: this.state.value,
				isdone: false,
				id: this.state.itemId,
			};

			newArr.push(obj);
			this.setState({
				value: '',
				todosArr: newArr,
				itemId: this.state.itemId + 1
			})
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
		this.setState({
			todosArr: this.state.todosArr.filter((item) => {
				return item.id !== id;
			})
		});
	}

	deleteAllIsDone = () => {
		this.setState({
			todosArr: this.state.todosArr.filter((item) => {
				return item.isdone === false;
			})
		});
		this.setState({allActive : true});
	}

	notAllActive = () => {
		for (let i=0;i<this.state.todosArr.length; i++) {
			if (this.state.todosArr[i].isdone) {
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
					{this.state.todosArr.map((elem, index) =>
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
						<Todosleft arr={this.state.todosArr} />
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
						<Todosisdone arr={this.state.todosArr}/>
					</div>
				</div>
			</div>)
	}
}

export default Todos;