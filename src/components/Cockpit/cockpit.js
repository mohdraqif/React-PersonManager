import React from 'react';
import classes from './Cockpit.css';


const Cockpit = props  => {
    let btnClass = ''
    if(props.showPersons) {
      btnClass = classes.Green
    }
    return (
        <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <button key={'qwe213'} className={btnClass} onClick={props.switch}>Switch Names</button>
          <button key={'asd456'} className={btnClass} onClick={props.toggle}>Toggle Persons</button>
        </div>
    );
};

export default Cockpit;