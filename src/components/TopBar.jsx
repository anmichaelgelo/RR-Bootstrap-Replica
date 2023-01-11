import { Navbar, Button, Nav } from 'react-bootstrap'

export default function TopBar() {
    return (
        <Navbar bg="light" expand="lg" className="px-5 h-80">
            <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
                <img src="imgs/instacart-logo.svg" alt='Logo Brand' /> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav className="mr-auto"> 
                </Nav>
                <Nav>
                    <Nav.Link href="#LogIn">Log In</Nav.Link>
                    <Button variant="primary">Sign Up</Button>{' '}
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}