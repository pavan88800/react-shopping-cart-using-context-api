import React, { useContext } from 'react'
import {
  Container,
  Navbar,
  Nav,
  Form,
  Dropdown,
  Badge,
  Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { Cart } from '../context/Context'
import { AiFillDelete } from 'react-icons/ai'
const NavList = () => {
  const {
    state: { cart },
    dispatch
  } = useContext(Cart)

  return (
    <>
      <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to='/'> Shopping Cart </Link>
          </Navbar.Brand>
          <Navbar.Text className='search'>
            <Form.Control
              style={{ width: 500 }}
              type='text'
              className='m-auto'
              placeholder='Search Products'
            />
          </Navbar.Text>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant='success'>
                <FaShoppingCart color='white' fontSize='25px' />

                <Badge style={{ marginLeft: '5px' }}>{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 270 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map(prod => (
                      <span className='cartitem' key={prod.id}>
                        <img
                          src={prod.image}
                          className='cartItemImg'
                          alt={prod.name}
                        />
                        <div className='cartItemDetail'>
                          <span>{prod.name}</span>
                          <span>₹ {prod.price.split('.')[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize='20px'
                          style={{ cursor: 'pointer' }}
                          onClick={() =>
                            dispatch({
                              type: 'REMOVE_FROM_CART',
                              payload: prod
                            })
                          }
                        />
                      </span>
                    ))}
                    <Link to='/cart'>
                      <Button style={{ width: '95%', margin: '0 10px' }}>
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavList
