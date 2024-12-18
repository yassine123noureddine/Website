import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import DifinitionBlog from './DifinitionBlogs';

function AppNavbar() {
  return (
<>
<Navbar bg="light" expand="lg">
      <Container>
        <Link class="nav-link text-blue-600 " to="/" style={{  color:" #9c27b0"}}>
          NOUREDDINE
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link class="nav-link" to="/">
              Home
            </Link>
            <Link class="nav-link" to="/about">
              About
            </Link>
            <Link class="nav-link" to="/contact">
              Contact
            </Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>

</>
  );
}
export default AppNavbar