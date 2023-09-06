import React from 'react'

const ShowUserData3 = props => {
  return (
    <div>
      <h3>Informações do Usuário</h3>
      <ul>
        <li>Nome: {props.name}</li>
        <li>Idade: {props.age}</li>
        <li>Matrícula: {props.registration}</li>
      </ul>
    </div>
  )
}

export default ShowUserData3
