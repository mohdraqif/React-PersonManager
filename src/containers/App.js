import React, { Component } from 'react'
import Person from '../components/Persons/Persons'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import classes from '../containers/App.css'

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
    let btnClass = ''

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((each, index) => {
            return <ErrorBoundary key={each.id}>
              <h3><Person 
                name={each.name} age={each.age} 
                change={(event) => this.changeNamesHandler(event, each.id)} 
                delete={() => this.deletePersonHandler(index)}>My Hobby is {each.hobby}.
              </Person></h3>
            </ErrorBoundary>
          })}  
          </div>
      )
      btnClass = classes.Green
    }

    return (
      <div className={classes.App}>
        <header>
          <h1>This is a Class Based Component</h1>
          <button key={'qwe213'} className={btnClass} onClick={this.switchNamesHandler}>Switch Names</button>
          <button key={'asd456'} className={btnClass} onClick={this.togglePersonsNames}>Toggle Persons</button>
          {persons}
        </header>
      </div>
    );
  }
}


export default App