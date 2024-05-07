import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import {  ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";
function NavScroll() {
  const cart = useSelector((state) => state.storeCart);

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-fixed-top">
      <Container fluid>
        <Navbar.Brand href="#">E-Commerce V</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Articles
            </Nav.Link>
            {/* <Nav.Link href = "/articles">Articles</Nav.Link> */}
            <Nav.Link as={Link} to="/categories">
              Categories
            </Nav.Link>
            <Nav.Link as={Link} to="/scategories">
              Scategories
            </Nav.Link>
            <Nav.Link as={Link} className="badge badge bg-success" to="/cart">
              <ShoppingCart />
              {cart.cartItems.length}
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
