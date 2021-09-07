import React from 'react';
import Todoslines from './Todoslines';
import Todosleft from './Todosleft';
import styles from './Todos.module.css';


class Todos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewRepres : 0,
			value: '',
			todosArr: new Array()
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		const newArr = this.state.todosArr.slice();
		event.preventDefault();
		if (this.state.value) {
			newArr.push(this.state.value);
			this.setState({
			value: '',
			todosArr: [...this.state.todosArr, this.state.value]
			})
		}

	}
	render() {
		return (<div className={styles.common}>
			<div className={styles.header}>
				<h1>todo list:</h1>
			</div>
				<form className={styles.form} 
				onSubmit={this.handleSubmit}>
					<input className={styles.input} 
					type='text' value={this.state.value} 
					placeholder='Something To Do' 
					onChange={this.handleChange} />
				</form>
			<div>
			{this.state.todosArr.map((elem,index) => 
			<Todoslines elem={elem} index={index} rep={this.state.viewRepres}  key={index}/>)}
			</div>
			<div className={styles.controls}>
			<div>TodosLeftFunction soon</div>
				<div>
					<a className={styles.button} href="#all" onClick = {() => this.setState({viewRepres: 0})} > All </a>
					<a className={styles.button} href="#active" onClick = {() => this.setState({viewRepres: 1})} > Active </a>
					<a className={styles.button} href="#complete" onClick = {() => this.setState({viewRepres: 2})} > Completed </a>
				</div>
				<div>refs for clearing completed</div>
			</div>
		</div>)
	}
}

export default Todos;
//<div>TodosLeftFunction soon</div>		<=>		<Todosleft Arr={this.state.todosArr} />