import React from 'react'

const ContainerComponent = props => {
  return (
    <div>
      <p>Texto: {props.children}</p>
    </div>
  )
}

export default ContainerComponent
