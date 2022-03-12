import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function Menu() {
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand href="#home">ProActivity</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#client">Clientes</Nav.Link>
                        <Nav.Link href="#activity">Atividades</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown align='end' title="Pedro Lustosa" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Configurações</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
