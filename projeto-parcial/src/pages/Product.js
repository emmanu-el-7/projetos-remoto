import styles from './Product.module.css'

import Logo from '../images/Captura de tela 2023-09-30 111023.png'

import { useGetData } from '../hooks/useGetData'

import { useParams, NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
const Product = () => {
  const { id } = useParams()

  console.log('id :' + id)

  const url = 'https://localhost:3000/products' + id

  const { data: product, loading, error } = useGetData(url)
  return (
    <>
      <div>
        <Navbar />
        <div className='logo'>
          <img src={Logo} alt='Hardware Heaven Logo' />
        </div>
        <div>
          <p className={styles.id}>ID do produto: {id}</p>

          {error && <p>Ocorreu um erro...</p>}
          {loading && <p>Carregando um produto...</p>}
          {product && (
            <div>
              <h1>{product.name}</h1>
              <div className={styles.image}>
                <img src={product.image} alt={product.name} />
              </div>
              <p className={styles.price}>R$ {product.price}</p>
              <NavLink to={`/products/${product.id}/info`}>
                Mais informações
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Product
