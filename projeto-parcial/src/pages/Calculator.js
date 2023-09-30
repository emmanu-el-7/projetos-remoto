import React, { useState } from 'react'
import './Calculator.css'
import { NavLink } from 'react-router-dom'

function Calculator () {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('')

  const handleInput = value => {
    setExpression(prevExpression => prevExpression + value)
  }

  const clear = () => {
    setExpression('')
    setResult('')
  }

  const calculate = () => {
    try {
      const calculatedResult = eval(expression)
      setResult(calculatedResult.toString())
    } catch (error) {
      setResult('Erro')
    }
  }

  return (
    <>
      <div>
        <h1>Calculadora</h1>
        <form>
          <input type='text' value={expression} readOnly />
          <div>
            <button type='button' onClick={() => handleInput('7')}>
              7
            </button>
            <button type='button' onClick={() => handleInput('8')}>
              8
            </button>
            <button type='button' onClick={() => handleInput('9')}>
              9
            </button>
            <button type='button' onClick={() => handleInput('+')}>
              +
            </button>
          </div>
          <div>
            <button type='button' onClick={() => handleInput('4')}>
              4
            </button>
            <button type='button' onClick={() => handleInput('5')}>
              5
            </button>
            <button type='button' onClick={() => handleInput('6')}>
              6
            </button>
            <button type='button' onClick={() => handleInput('-')}>
              -
            </button>
          </div>
          <div>
            <button type='button' onClick={() => handleInput('1')}>
              1
            </button>
            <button type='button' onClick={() => handleInput('2')}>
              2
            </button>
            <button type='button' onClick={() => handleInput('3')}>
              3
            </button>
            <button type='button' onClick={() => handleInput('*')}>
              *
            </button>
          </div>
          <div>
            <button type='button' onClick={clear}>
              C
            </button>
            <button type='button' onClick={() => handleInput('0')}>
              0
            </button>
            <button type='button' onClick={calculate}>
              =
            </button>
            <button type='button' onClick={() => handleInput('/')}>
              /
            </button>
          </div>
        </form>
        <div>
          <h2>Resultado: {result}</h2>
        </div>
      </div>
      <NavLink to='/'>Home</NavLink>
    </>
  )
}

export default Calculator
