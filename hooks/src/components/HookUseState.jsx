import { useState } from 'react'

const HookUseState = () => {
  let userName = 'Roberto'

  const [name, setName] = useState('Josué')

  const changeNames = () => {
    userName = 'Roberto dos Santos'

    setName('Josué Amaral')

    console.log(userName)
  }

  return (
    <div>
      <h2>useState</h2>
      <p>Váriavel: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar o nome da variável</button>
      <p>Digite a sua idade:</p>
      <form>
        <input type='text' value={age} onChange={e => setAge(e.target.value)} />
      </form>
      <p>Você tem {age} anos</p>
    </div>
  )
}

export default HookUseState
