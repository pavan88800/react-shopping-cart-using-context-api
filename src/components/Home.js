import { React, useContext } from 'react'
import { Cart } from '../context/Context'
const Home = () => {
  const {
    state: { prodcuts }
  } = useContext(Cart)

  return (
    <div>
      <h4>Home</h4>
    </div>
  )
}

export default Home
