
import Carrito from './carrito/carrito.jsx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
    <Container>
      <NavLink to="/home" className={({isActive})=> isActive? "btn btn-success":"btn btn-success"}>Mo Boutique</NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">

          <NavDropdown title="Productos" id="collasible-nav-dropdown">
            <NavLink  to= "/categoria/platos"  className={({isActive})=> isActive? "btn btn-success btn-block ":"btn btn-light btn-block"} href="#action/3.1">
              Platos
              </NavLink>
            <NavLink to= "/categoria/tazas"  className={({isActive})=> isActive? "btn btn-success btn-block":"btn btn-light btn-block"}>
              Tazas
            </NavLink>
            <NavLink  to= {`/categoria/cubiertos`}  className={({isActive})=> isActive? "btn btn-success ":"btn btn-light "} href="#action/3.3">
              Cubiertos
              </NavLink>
            <NavDropdown.Divider />
            <NavLink  to= "/cart"  className={({isActive})=> isActive? "btn btn-success ":"btn btn-light "} href="#action/3.4">
              Catálogo Completo
            </NavLink>
          </NavDropdown>
        </Nav>
        <Nav>
          <NavLink to= "/cart"  className={({isActive})=> isActive? "btn btn-light text-success":"btn btn-success "}>
          <Carrito/>

          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar;
