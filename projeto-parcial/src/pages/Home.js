import './Home.css'

import Logo from '../images/Captura de tela 2023-09-30 111023.png'
import RightArrow from '../images/216151_right_chevron_icon.png'

import { NavLink } from 'react-router-dom'
import { useGetData } from '../hooks/useGetData'
import { useRef } from 'react'

const Home = () => {
  const url = 'http://localhost:3000/products'

  const { data: items, loading, error } = useGetData(url)

  const carousel = useRef(null)

  const handleLeftClick = e => {
    e.preventDefault()

    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = e => {
    e.preventDefault()

    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (
    <div>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt='Hardware Heaven Logo' />
        </div>
        <div className='carousel' ref={carousel}>
          <div className='item'>
            {items &&
              items.map(item => (
                <div className='item' key={item.id}>
                  <div className='image'>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className='info'>
                    <span className='name'>{item.name}</span>
                    <span className='oldPrice'>R$ {item.oldPrice}</span>
                    <span className='price'>R$ {item.price}</span>
                  </div>
                  <p className='detalhes'>
                    <NavLink to={`products/${item.id}`}>Detalhes</NavLink>
                  </p>
                </div>
              ))}
          </div>
          <div className='buttons'>
            <button className='left_button' onClick={handleLeftClick}>
              <img src={RightArrow} alt='Scroll Left' />
            </button>
            <button className='right_button' onClick={handleRightClick}>
              <img src={RightArrow} alt='Scroll Right' />
            </button>
          </div>
        </div>
        <NavLink to='/products'>Detalhes</NavLink>
        <NavLink to='/calculator'>Calculadora</NavLink>
      </div>
    </div>
  )
}

export default Home
