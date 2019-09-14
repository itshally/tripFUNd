import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import logo from '../images/Logo.png';

var logoStyle = {
    width: "150px",
}

class Header extends Component {
    render() {
    return (
        <Navbar scrolling dark expand="md" fixed="top" bg="light">
  <Navbar.Brand href="#home"><img src={logo} alt="Logo" style={logoStyle} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Add Trip</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">User</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Logout
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>);
}
}

export default Header;