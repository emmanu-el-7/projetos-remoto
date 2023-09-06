import React from 'react'

const ShowUserData2 = ({ name, age, course, college }) => {
  return (
    <div>
      <h2>Informações do Usuário:</h2>
      <ul>
        <li>Nome: {name}</li>
        <li>Idade: {age}</li>
        <li>Curso: {course}</li>
        <li>Universidade: {college}</li>
      </ul>
    </div>
  )
}

export default ShowUserData2
