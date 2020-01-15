import React, { Component } from 'react'
import classes from '../containers/App.css'
import PERSONS from '../components/Persons/PERSONS'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      {id: 'dfg567', name: 'Raqif', age: 28, hobby: 'Coding'},
      {id: 'kjl879', name: 'Faizan', age: 19, hobby: 'Gaming'},
      {id: 'bvn654', name: 'Mehnaz', age: 45, hobby: 'Cooking'}
    ],
    otherState: 'Ravish and Siraj',
    showPersons: true
  }

  switchNamesHandler = () =>{
    console.log(this.state)
    this.setState({
      persons: [
        {name: 'Mohd.Raqif', age: 28, hobby: 'Coding'},
        {name: 'Mohd.Faizan', age: 19, hobby: 'Gaming'},
        {name: 'Mehnaz Khan', age: 45, hobby: 'Cooking'}
      ],
    })    
  }

  changeNamesHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(each => {
      return each.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons: persons })

    // this.setState({
    //   persons: [
    //     {name: 'Mohd.Raqif', age: 28, hobby: 'Coding'},
    //     {name: event.target.value, age: 19, hobby: 'Gaming'},
    //     {name: 'Mehnaz Khan', age: 45, hobby: 'Cooking'}
    //   ],
    // })
  }

  togglePersonsNames = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()    //slice:copies the oringinal array(==original array) 
    const persons = [...this.state.persons]          //[...]:makes a new array with original array(!=original array)
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }
  

  render() {
    let persons = null
    if(this.state.showPersons) {
      persons = <PERSONS 
        persons={this.state.persons} change={this.changeNamesHandler} delete={this.deletePersonHandler}/>
    }

    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons} switch={this.switchNamesHandler} toggle={this.togglePersonsNames}/>
        {persons}
      </div>
    );
  }
}


export default App