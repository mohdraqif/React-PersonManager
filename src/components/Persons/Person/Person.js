import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/WithClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
      {this.context.authenticated ? 
      (<p>User Authenticated!</p>) : (<p>Please log in</p>)}

        <p onClick={this.props.delete}>I am {this.props.name}. My age is {this.props.age}.</p>
        <p>{this.props.children}</p>
        <input type="text" value={this.props.name} onChange={this.props.change}/>
      </Aux>
    )
  }
}

Person.propTypes = {
  delete: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default withClass(Person, classes.Person);