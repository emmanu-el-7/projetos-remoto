import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Calculator from './pages/Calculator'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
