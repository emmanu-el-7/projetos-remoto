import React from 'react'

const ConditionalRendering = () => {
  const diretores = [
    { id: 1, name: 'Martin Scorsese' },
    { id: 2, name: 'Stanley Kubrick' },
    { id: 3, name: 'Christopher Nolan' },
    { id: 4, name: 'Sam Raimi' },
    { id: 5, name: 'John Krasinski' }
  ]

  const atores = [
    { id: 1, name: 'John Krasinski' },
    { id: 2, name: 'Noah Centineo' },
    { id: 3, name: 'Will Smith' },
    { id: 4, name: 'Ryan Gosling' },
    { id: 5, name: 'Bruce Campbell' }
  ]

  return (
    <>
      <div className='Diretores'></div>
      <div>
        <h1>Grandes nomes da direção!</h1>
        <h2>
          Segue uma lista com alguns dos maiores nomes do cinema no que diz
          respeito à direção
        </h2>
        {diretores.length > 0 ? (
          <ul>
            {diretores.map(diretor => (
              <li key={diretor.id}>{diretor.name}</li>
            ))}
          </ul>
        ) : (
          <ul>
            {atores.map(ator => (
              <li key={ator.id}>{ator.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default ConditionalRendering
