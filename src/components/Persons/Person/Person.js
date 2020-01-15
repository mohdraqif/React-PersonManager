import React from 'react'
import classes from './Person.css'



const Person = props => {

  // const random = Math.random()
  // if(random > 0.7) {
  //   throw new Error('Something Went Wrong!!!')
  // }
  return (
    <div className={classes.Person}>
      <p onClick={props.delete}>I am {props.name}. My age is {props.age}.</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.change}/>
    </div>
  )
}

export default Person