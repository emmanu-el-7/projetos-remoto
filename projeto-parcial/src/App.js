import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Calculator from './pages/Calculator'
import Navbar from './components/Navbar'
import { SearchForm } from './components/SearchForm'
import Info from './pages/Info'
import Search from './pages/Search'
import NotFound from './pages/NotFound'
import ProductList from './pages/ProductList'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/calculator' element={<Calculator />} />
          <Route path='/products/:id/info' element={<Info />} />
          <Route path='/search' element={<Search />} />
          <Route path='/company' element={<Navigate to='/about' />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/products' element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
