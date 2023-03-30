import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home"> EPI-BOOK <img alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMaV-RLcQ_vfco-1pw9FL9zt2R16obBdm3HRV_IHK70a1rJq17-kqKWh5X4_sMIhE-AE&usqp=CAU" width="80"/>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> Home </Nav.Link>
            <Nav.Link href="#link"> About </Nav.Link>
            <Nav.Link href="#Browse"> Browser</Nav.Link>
            <NavDropdown title="Generi" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Novità</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Letterature</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Audiolibro</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Podcast</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Libri per ragazzi</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Outlet del libro
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;