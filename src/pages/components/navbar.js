import {Container, Nav, Navbar, NavLink} from 'react-bootstrap';
import style from "@/styles/Navbar.module.css"

export default function Menu() {
  return (
    <Container>
      <Navbar expand="sm" bg="dark" data-bs-theme="dark" className={`${style.degrademenu} ps-5  rounded-3 border border-4 boder-warning`}>
        <Navbar.Brand href="/">6V</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/lista">Lista</Nav.Link>
            <Nav.Link href='/produto'>Produto</Nav.Link>
            <Nav.Link href='/promessa'>Promessas</Nav.Link>
            <Nav.Link href='/pages'>Pages</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}