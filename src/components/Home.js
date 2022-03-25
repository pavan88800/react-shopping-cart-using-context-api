import { React, useContext } from 'react'
import { Cart } from '../context/Context'
import Filters from './Filters'
import SingleProducts from './SingleProducts'
import './style.css'
const Home = () => {
  const {
    state: { products }
  } = useContext(Cart)

  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {products.map(product => (
          <SingleProducts product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
