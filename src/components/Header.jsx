import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import "../App.css"

const Header = () => {
  return (
    <div>
     <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand><Link to={'/'}>Детский мир</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={'/'}>
                Главная
                </Link></Nav.Link>
            <Nav.Link >Избранное</Nav.Link>
            <Nav.Link >Корзина</Nav.Link>
            <Nav.Link >Описание</Nav.Link>
          </Nav>
          
          <Nav>
            <Button variant='dark'>
              Войти
            </Button>
          </Nav>
        </Container>
      </Navbar>
     
      
    </div>
  )
}

export default Header