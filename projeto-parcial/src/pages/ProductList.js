import Logo from '../images/Captura de tela 2023-09-30 111023.png'
import RightArrow from '../images/216151_right_chevron_icon.png'
import './ProductList.css'
import { NavLink } from 'react-router-dom'
import { useGetData } from '../hooks/useGetData'
import { useRef } from 'react'
import Navbar from '../components/Navbar'

function ProductList () {
  const url = 'http://localhost:3000/products'

  const { data: items, loading, error } = useGetData(url)

  const carousel = useRef(null)

  return (
    <div>
      <Navbar />
      <div className='logo'>
        <img src={Logo} alt='Hardware Heaven Logo' />
      </div>
      <h1 className='title'>Lista de produtos</h1>
      <p className='disclaimer'>
        !!! Devido a problemas com a barra de pesquisa, recomendamos o uso do
        comando CTRL + F para a pesquisa de produtos. Pedimos perdão pelo
        incoveniente e prometemos resolver o problema o quanto antes!!
      </p>
      <div className='container'>
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        <div className='carousel' ref={carousel}>
          <div className='item'>
            {items &&
              items.map(item => (
                <div className='item' key={item.id}>
                  <div className='image'>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className='info'>
                    <p className='name'>{item.name}</p>
                    <p className='oldPrice'>R$ {item.oldPrice}</p>
                    <p className='price'>R$ {item.price}</p>
                  </div>
                  <p className='detalhes'>
                    <NavLink to={`products/${item.id}`}>Detalhes</NavLink>
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
