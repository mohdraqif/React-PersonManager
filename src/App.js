import React, { Component } from 'react'
import Person from './Persons/Persons'
import styled from 'styled-components'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'


const StyledButton = styled.button`
  margin: 10px;
  background-color: ${props => props.hoverColor ? 'green' : 'red'};
  color: white;
  font: inherit;
  border: 1px solid gray;
  padding: 8px;
  cursor: pointer;
  box-shadow: 0 2px 3px rgb(161, 159, 159);

  &:hover {
    background-color: ${props => props.hoverColor ? 'lightgreen' : 'salmon'};
    color: black;
    transition: background-color .15s ease-in;
  }
`

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
    }

    return (
      <div style = {{textAlign: "center"}}>
        <header>
          <h1>This is a Class Based Component</h1>
          <StyledButton key={'qwe213'} hoverColor={this.state.showPersons} onClick={this.switchNamesHandler}>Switch Names</StyledButton>
          <StyledButton key={'asd456'} hoverColor={this.state.showPersons} onClick={this.togglePersonsNames}>Toggle Persons</StyledButton>
          {persons}
        </header>
      </div>
    );
  }
}


export default App