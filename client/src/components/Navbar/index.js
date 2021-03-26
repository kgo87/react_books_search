import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
// import "../../index.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Link className="navbar__brand" to="/">
        Google Books Search
      </Link>
      <div className="navbar__nav">
        <Link to="/saved" className="navbar__nav--item">
          Saved
        </Link>
        <Link to="/search" className="navbar__nav--item">
          Search
        </Link>
      </div>
    </Nav>
    </Navbar>
  );
}

export default Nav;

// {/* <Navbar bg="primary" variant="dark">
// <Navbar.Brand href="#home">Navbar</Navbar.Brand>
// <Nav className="mr-auto">
//   <Nav.Link href="#home">Home</Nav.Link>
//   <Nav.Link href="#features">Features</Nav.Link>
//   <Nav.Link href="#pricing">Pricing</Nav.Link>
// </Nav>
// <Form inline>
//   <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//   <Button variant="outline-light">Search</Button>
// </Form>
// </Navbar> */}
