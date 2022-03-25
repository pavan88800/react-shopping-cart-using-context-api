import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CartList from './components/CartList'

function App () {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<CartList />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
