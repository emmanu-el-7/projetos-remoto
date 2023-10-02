import { NavLink } from 'react-router-dom'
import Logo from '../images/Captura de tela 2023-09-30 111023.png'

const About = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#b2ebf9' }}>
        <div className='logo'>
          <img src={Logo} alt='Hardware Heaven Logo' />
        </div>
      </div>
      <NavLink to='/'>Home</NavLink>
    </div>
  )
}

export default About
