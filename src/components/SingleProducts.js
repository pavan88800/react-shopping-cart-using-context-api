import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Cart } from '../context/Context'
const SingleProducts = ({ product }) => {
  const {
    state: { cart },
    dispatch
  } = useContext(Cart)

  console.log(cart, 'cart')
  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 15 }}>
            <span>₹ {product.price.split('.')[0]}</span>
            {product.fastDelivery ? (
              <div> Fast Delivery </div>
            ) : (
              <div> 4 days Delivery </div>
            )}
          </Card.Subtitle>
          {cart.some(c => c.id === product.id) ? (
            <Button
              variant='danger'
              onClick={() =>
                dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: product
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              disabled={!product.inStock}
              onClick={() =>
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: product
                })
              }
            >
              {!product.inStock ? 'Out of Stock' : 'Add to Cart'}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProducts
