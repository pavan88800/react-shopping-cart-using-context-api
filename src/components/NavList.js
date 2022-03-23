import React from 'react'
import { Container, Navbar, Nav, Form, Dropdown, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
const NavList = () => {
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

                <Badge style={{ marginLeft: '5px' }}>{10}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 270 }}>
                <span style={{ padding: 5 }}>Cart is Empty !</span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavList
