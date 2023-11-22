import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import HookUseState from './components/HookUseState'
import HookUseReducer from './components/HookUseReducer'

function App () {
  return (
    <>
      <div>
        <h1>Hooks</h1>
        <BrowserRouter>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
          </ul>
          <HookUseReducer />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
