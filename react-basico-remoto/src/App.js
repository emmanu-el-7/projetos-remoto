import './App.css'
import ContainerComponent from './Components/ContainerComponent'
import Lista_Filmes from './Components/Lista_Filmes'
import ShowUserData2 from './Components/ShowUserData2'
import ShowUserData3 from './Components/ShowUserData3'

const Students = [
  { id: 0, registration: 2021123456, name: 'Marco', age: 21 },
  { id: 1, registration: 2023098764, name: 'Emmanuel', age: 18 },
  { id: 2, registration: 2018735620, name: 'Cris', age: 23 },
  { id: 3, registration: 2021539820, name: 'Jorge', age: 30 },
  { id: 4, registration: 2020826831, name: 'Natalia', age: 22 }
]

function App () {
  return (
    <>
      <ShowUserData2
        name='Fulano de Tal'
        age='19'
        course='Ciência da Informação'
        college='UFSC'
      />
      {Students.map(student => (
        <>
          <ShowUserData3
            name={student.name}
            age={student.age}
            registration={student.registration}
          />
          <ContainerComponent>
            <p>Texto qualquer</p>
          </ContainerComponent>
        </>
      ))}
    </>
  )
}

export default App
