import styles from './Product.module.css'

import { useGetData } from '../hooks/useGetData'

import { useParams } from 'react-router-dom'
const Product = () => {
  const { id } = useParams()

  console.log('id :' + id)

  const url = 'https://localhost:3000/products' + id

  const { data: product, loading, error } = useGetData(url)
  return (
    <div>
      <p className={styles.id}>ID do produto: {id}</p>

      {product && (
        <div>
          <h1>{product.name}</h1>
          <div className={styles.image}>
            <img src={product.image} alt={product.name} />
          </div>
          <p className={styles.price}>R$ {product.price}</p>
        </div>
      )}
    </div>
  )
}

export default Product
