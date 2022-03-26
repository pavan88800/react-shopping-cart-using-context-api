import { React, useContext } from 'react'
import { Cart } from '../context/Context'
import Filters from './Filters'
import SingleProducts from './SingleProducts'
import './style.css'
const Home = () => {
  const {
    state: { products },
    productState: { byStock, byFastDelivery, byRating, searchQuery, sort }
  } = useContext(Cart)

  const transformProducts = () => {
    let storedProducts = products
    if (sort) {
      storedProducts = storedProducts.sort((a, b) =>
        sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
      )
    }

    if (!byStock) {
      storedProducts = storedProducts.filter(prod => prod.inStock)
    }

    if (byFastDelivery) {
      storedProducts = storedProducts.filter(prod => prod.fastDelivery)
    }

    if (byRating) {
      storedProducts = storedProducts.filter(prod => prod.ratings >= byRating)
    }

    if (searchQuery) {
      storedProducts = storedProducts.filter(prod =>
        prod.name.toLowerCase().includes(searchQuery)
      )
    }
    return storedProducts
  }

  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {transformProducts().map(product => (
          <SingleProducts product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
