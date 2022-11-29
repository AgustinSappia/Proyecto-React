
import Carrito from './carrito/carrito.jsx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Mo Boutique</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Inicio</Nav.Link>
          <NavDropdown title="Productos" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Platos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Tazas
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cubiertos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Ayuda
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link><Carrito/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar;
