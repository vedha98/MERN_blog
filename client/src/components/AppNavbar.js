import React from 'react';
import {Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
Container} from 'reactstrap'

class AppNavbar extends React.Component {
state = {
  isOpen:false
}
toggle = ()=>{
  this.setState({
    isOpen:!this.state.isOpen
  });
}

  render () {
  return (

    <div>
  <Navbar color ="dark" dark expand = "sm" className="mb-5">
  <Container>
  <NavbarBrand href="/" >MERN blog</NavbarBrand>
  <NavbarToggler onClick={this.toggle} />
  <Collapse isOpen={this.state.isOpen} navbar>
  <Nav className="ml-auto" navbar>
  <NavLink href="/register" >Register
  </NavLink>
  <NavLink href="https://github.com/vedha98" >Login
  </NavLink>
  </Nav>
  </Collapse>
  </Container>

  </Navbar>

    </div>

  );

  }
}

export default AppNavbar;
