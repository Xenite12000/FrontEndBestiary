import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Nav } from 'react-bootstrap';
import { useVariable } from '../VariableUser/VariableContext';


function NavbarBesitary() {
  const { maVariable, setVariable } = useVariable();
  console.log(maVariable)



  const Deco = () => {
    setVariable(0)
    window.location.href = "/Login";
  }
  

  if(maVariable === 0) {
    return (
      <Navbar className="bg-body-tertiary" sticky='top'>
        <Container>
          <Navbar.Brand href="home">Bestiary Universal</Navbar.Brand>
          <Navbar.Toggle />
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="univers">Univers</Nav.Link>
              <Nav.Link href="favorite">Favoris</Nav.Link>
            </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Button href="Login">Se connecter</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  else {
    return (
      <Navbar className="bg-body-tertiary" sticky='top'>
        <Container>
          <Navbar.Brand href="home">Bestiary Universal</Navbar.Brand>
          <Navbar.Toggle />
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="univers">Univers</Nav.Link>
              <Nav.Link href="favorite">Favoris</Nav.Link>
            </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Button onClick={Deco}>Se déconnecter</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }

}

export default NavbarBesitary