import { useEffect, useState } from 'react'

const HookUseEffect = () => {
  useEffect(() => {
    console.log('sem array de dependências')
  })

  const [number, setNumber] = useState(1)

  const changeNumber = () => {
    setNumber(Math.random())
  }

  useEffect(() => {
    console.log('com array de dependências vazio')
  }, [])

  //com variável monitorada no array de dependências vazio
  const [anotherNumber, setAnotherNumber] = useState(0)
  useEffect(() => {
    if (anotherNumber > 0) {
      console.log('useEffect executado sempre que o setAnotherNumber muda')
    }
  }, [anotherNumber])

  useEffect(() => {
    const timer = setTimeout
  })

  return (
    <div>
      <h2>useEffect</h2>
      <p>Número: {number}</p>
      <button onClick={changeNumber}>Mudar número</button>
      <p>Outro número: {anotherNumber}</p>
      <button onClick={setAnotherNumber}>Mudar outro número</button>
      <hr />
    </div>
  )
}

export default HookUseEffect
