import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

function NavbarBesitary() {
  return (
    <Navbar className="bg-body-tertiary" sticky='top'>
      <Container>
        <Navbar.Brand href="home">Bestiary Universal</Navbar.Brand>
        <Navbar.Toggle />
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="favorite">Favoris</Nav.Link>
          </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="login">Tifanny Van Campe</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBesitary