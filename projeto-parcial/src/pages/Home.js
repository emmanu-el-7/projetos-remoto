import './Home.css'

import Logo from '../images/Captura de tela 2023-09-30 111023.png'
import RightArrow from '../images/216151_right_chevron_icon.png'

import { NavLink } from 'react-router-dom'

const Home = () => {
  const handleLeftClick = e => {
    e.prevent.Default()
  }

  const handleRightCLick = e => {
    e.prevent.Default()
  }

  return (
    <div>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt='Hardware Heaven Logo' />
        </div>
        <div className='carousel'>
          <div className='item'>
            <div className='image'>
              <img
                src='https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/1/0/100-100000457box1.jpg'
                alt='PROCESSADOR AMD RYZEN 5 5500'
              />
            </div>
            <div className='info'>
              <span className='name'>PROCESSADOR AMD RYZEN 5 5500</span>
              <span className='oldPrice'>R$ 598.99</span>
              <span className='price'>R$ 704.69</span>
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
          <button className='right_button' onClick={handleRightCLick}>
            <img src={RightArrow} alt='Scroll Right' />
          </button>
        </div>
      </div>
      <NavLink to='/products'>Detalhes</NavLink>
      <NavLink to='/calculator'>Calculadora</NavLink>
    </div>
  )
}

export default Home
