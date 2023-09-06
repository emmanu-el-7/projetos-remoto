import React from 'react'

const ShowUserData = props => {
  return (
    <div>
      <h1>Nome: {props.name}</h1>
      <h2>Idade: {props.age}</h2>
      <h3>Curso: {props.course}</h3>
    </div>
  )
}

export default ShowUserData
