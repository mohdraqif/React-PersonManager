import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';


const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect.')

    setTimeout(() => {
      alert('Welcome to Person Manager App!')
    }, 1000);
    
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect')
    }
  }, [])

    let btnClass = ''
    if(!props.showPersons) {
      btnClass = classes.Green
    }
    return (
        <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <button key={'qwe213'} className={btnClass} onClick={props.switch}>Switch Names</button>
          <button key={'asd456'} ref={toggleBtnRef} className={btnClass} onClick={props.toggle}>Toggle Persons</button>
          <button key={'ghj369'} className={btnClass} onClick={authContext.login}>Log in</button>
        </div>
    );
};

export default React.memo(Cockpit);