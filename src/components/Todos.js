import React from 'react';
let testArr = ["сделать","хорошо подумать","не делать"];

function Todoslines(props) {
    
        const intArr = props.Arr;
        return (
            intArr.map((elem,index) => 
            <div key={index} className='todos__list'>
                <input className='todos__check' type="checkbox" id={index} name={index} value="something_to_do" />
                <label for={index}> {elem}</label>
            </div>)
        );
    
} 

class Inputform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''      }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    testArr.push(this.state.value);
    event.preventDefault();
    console.log(this.state.value);
    console.log(testArr);
    this.state.value = '';
  }
    render() {
        return (
            <form className='todos__form' onSubmit={this.handleSubmit}>
                <input className='todos__input' type='text' value={this.state.value} placeholder='Something To Do' onChange={this.handleChange} />
            </form>);
    }
}

class Todos extends React.Component {

    render() {
      return (<div className='todos'>
        <div className='todos__header'>
            <h1>todo list:</h1>
        </div>  
        <Inputform />
        <div>
        <Todoslines Arr={testArr}/>
        </div>
        <div className='todos__controls'>
        todos control here soon
        </div>
      </div>);
    }
}

export default Todos;
