import React from 'react'
import classes from './Person/Person.css'
import Person from './Person/Person'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'



const PERSONS = props => props.persons.map((each, index) => {
    return <ErrorBoundary key={each.id} className={classes.Person}>
      <h3><Person 
        name={each.name} age={each.age} 
        change={(event) => props.change(event, each.id)} 
        delete={() => props.delete(index)}>My Hobby is {each.hobby}.
      </Person></h3>
    </ErrorBoundary>
  })

export default PERSONS