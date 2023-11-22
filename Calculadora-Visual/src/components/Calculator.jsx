import { useState } from 'react'
import styles from './Calculator.module.css'

const Calculator = () => {
  const handleChangeValor1 = e => {
    const input = e.target.value

    const regex = /^({0-9}{1,})?{\.}?({0-9}{1,})?$/

    if (input.match(regex)) {
      setValor1(parseFloat(input))
    }
  }

  const handleBlurValor1 = e => {
    setValor1(parseFloat(input))
  }

  const handleChangeValor2 = e => {
    const input = e.target.value

    const regex = /^({0-9}{1,})?{\.}?({0-9}{1,})?$/

    if (input.match(regex)) {
      setValor2(parseFloat(input))
    }
  }

  const handleBlurValor2 = e => {
    setValor2(parseFloat(input))
  }
  return (
    <div>
      <h2>Minha Calculadora</h2>
    </div>
  )
}

export default Calculator
