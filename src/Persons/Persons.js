import React from 'react'
import styled from 'styled-components'


const StyledDiv = styled.div`
  width: 40%;
  margin: 16px auto;
  border: 1px solid rgb(204, 204, 204);
  box-shadow: 0 2px 3px rgb(161, 159, 159);
  padding: 20px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`

const Person = props => {
  
  // const random = Math.random()
  // if(random > 0.7) {
  //   throw new Error('Something Went Wrong!!!')
  // }

  return (
    <StyledDiv>
      <p onClick={props.delete}>I am {props.name}. My age is {props.age}.</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.change}/>
    </StyledDiv>
  )
}

export default Person