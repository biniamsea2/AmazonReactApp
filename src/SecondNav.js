import React from "react";
import "./SecondNav.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const SecondNav = () => {
  return (
    <Navbar className="navBar" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="All" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">Best Sellers</Nav.Link>
          <Nav.Link href="#link">Today's Deals</Nav.Link>

          <NavDropdown title="Prime" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://www.amazon.com/amazonprime?ref=acq_slash_prime&ms3_c=f8050ccde7dc8667cd42d4d30c082601">Prime</NavDropdown.Item>
            <NavDropdown.Item href="https://www.amazon.com/b?node=15247183011&ref=acq_slash_prime&ms3_c=de1a873798b2a3dedb5d0ecce8baeed6">
              Delivery
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.amazon.com/b?ie=UTF8&node=16205654011&ref=acq_slash_prime&ms3_c=757416cd91e351157d5945c4e962d153">Exclusive Deals</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://www.amazon.com/primeinsider?ref=acq_slash_prime&ms3_c=757416cd91e351157d5945c4e962d153">
              Prime Indsider
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.amazon.com/gp/help/customer/display.html?ref=acq_slash_prime&ms3_c=757416cd91e351157d5945c4e962d153">
              Get Help
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#link">Customer Service</Nav.Link>
          <Nav.Link href="#link">New Releases</Nav.Link>
          <Nav.Link href="#link">Books</Nav.Link>
          <Nav.Link href="#link">Fashion</Nav.Link>
          <Nav.Link href="#link">Kindle Books</Nav.Link>
          <Nav.Link href="#link">Organize your backyard</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SecondNav;
