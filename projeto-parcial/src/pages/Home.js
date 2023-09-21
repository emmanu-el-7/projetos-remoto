import './Home.css'

import Logo from '../images/hardware-heaven-logo.png'
import RightArrow from '../images/216151_right_chevron_icon.png'

import { NavLink } from 'react-router-dom'
import { useGetData } from '../hooks/useGetData'
import { useRef } from 'react'

const Home = () => {
  const url = 'https://localhost:3000/products'

  const { data: items, loading, error } = useGetData(url)

  //console.log(items)

  const carousel = useRef(null)

  const handleLeftClick = e => {
    e.prevent.default()

    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = e => {
    e.prevent.default()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }
  return (
    <div>
      <h1>Hardware Heaven</h1>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt='Hardware Heaven Logo' />
        </div>
        <div className='carousel' ref={carousel}>
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
                  <NavLink to={`/products/$item.id`}>Detalhes</NavLink>
                </p>
              </div>
            ))}
          <div className='item'>
            <div className='image'>
              <img
                src='https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000926wof.jpg'
                alt='Processador'
              />
            </div>
            <div className='info'>
              <span className='name'>PROCESSADOR AMD RYZEN 7 5700X</span>
              <span className='oldPrice'>R$ 1469.41</span>
              <span className='price'>R$ 1249.99</span>
            </div>
            <p className='detalhes'>
              <NavLink to='/products/94313731'>Detalhes</NavLink>
            </p>
          </div>
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
    </div>
  )
}

export default Home
