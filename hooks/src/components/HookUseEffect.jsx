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

  return (
    <div>
      <h2>useEffect</h2>
      <p>Número: {number}</p>
      <button onClick={changeNumber}>Mudar número</button>
      <hr />
    </div>
  )
}

export default HookUseEffect
