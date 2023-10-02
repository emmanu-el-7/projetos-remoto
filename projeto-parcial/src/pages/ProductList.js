import React from 'react'

import data from '../data/db.json'
function ProductList () {
  return (
    <div className='product-list'>
      <h1>Lista de Produtos</h1>
      <ul>
        {data.products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Preço: R$ {product.price.toFixed(2)}</p>
            {product.oldPrice && (
              <p>Preço Antigo: R$ {product.oldPrice.toFixed(2)}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
