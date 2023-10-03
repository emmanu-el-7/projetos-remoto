import React, { ReactDOM, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../images/Captura de tela 2023-09-30 111023.png'
import './Home.css'

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <header id='header'>
        <div className='logo'>
          <img src={Logo} alt='Hardware Heaven Logo' />
        </div>
        <nav class='nav'>
          <button
            className={`toggle-menu ${menuOpen ? 'active' : ''}`}
            onClick={handleToggleMenu}
          >
            {' '}
            <span></span>
          </button>
        </nav>
      </header>
      <div id='menu' className={menuOpen ? 'open' : ''}>
        <nav class='main-nav'>
          <ul>
            <li>
              <NavLink to='/products'>Lista de Produtos</NavLink>
            </li>
            <li>
              <NavLink to='/calculator'>Calculadora</NavLink>
            </li>
            <li>
              <NavLink to='/about'>Sobre</NavLink>
            </li>
          </ul>
        </nav>

        <footer className='menu-footer'>
          <nav className='footer-nav'>
            <ul>
              <li>
                <a href='#'>
                  <i className='fa fa-twitter fa-fw'></i>
                  Twitter
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa fa-envelope fa-fw'></i>
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  )
}

export default Home
