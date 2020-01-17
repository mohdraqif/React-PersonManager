import React, { Component } from 'react'
import classes from '../containers/App.css'
import PERSONS from '../components/Persons/PERSONS'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/WithClass.js'
import Aux from '../hoc/Auxiliary'
import AuthContext from '../context/auth-context' 

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: 'dfg567', name: 'Raqif', age: 28, hobby: 'Coding'},
      {id: 'kjl879', name: 'Faizan', age: 19, hobby: 'Gaming'},
      {id: 'bvn654', name: 'Mehnaz', age: 45, hobby: 'Cooking'}
    ],
    otherState: 'Ravish and Siraj',
    showPersons: true,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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
  
  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log('[App.js] render');
    let persons = null

    if(this.state.showPersons) {
      persons = (
      <PERSONS 
        persons={this.state.persons} change={this.changeNamesHandler} 
        delete={this.deletePersonHandler} isAuthenticated={this.state.authenticated}/>
      )
    }

    return (
      <Aux>
        <button className={classes.Green} onClick={() => {this.setState({ showCockpit: false })}}>Remove Cockpit</button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }} >

          {this.state.showCockpit ? 
            <Cockpit title={this.props.appTitle} showPersons={this.state.showPersons} 
              switch={this.switchNamesHandler} toggle={this.togglePersonsNames} /> : null 
          }
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);