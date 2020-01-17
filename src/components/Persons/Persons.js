import React, { PureComponent } from 'react';
import Person from './Person/Person'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'


class PERSONS extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  render() {
    console.log('[Persons.js] rendering...');

    return this.props.persons.map((each, index) => {
      return <ErrorBoundary key={each.id}>
        <h3><Person 
          name={each.name} age={each.age} 
          change={(event) => this.props.change(event, each.id)} 
          delete={() => this.props.delete(index)}>My Hobby is {each.hobby}.
        </Person></h3>
      </ErrorBoundary>
    })
  }
}

export default PERSONS