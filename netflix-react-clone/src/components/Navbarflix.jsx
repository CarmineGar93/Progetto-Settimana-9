import { Navbar, Container, Nav, NavItem, Dropdown, NavLink } from 'react-bootstrap'
import search from '../search.svg'
import bell from '../bell.svg'

function Navbarflix() {
    return (
        <Navbar expand="md" className="bg-dark-subtle">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img width={100} src='netflix_logo.png' alt=''>
                    </img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Tv Shows</Nav.Link>
                        <Nav.Link href="#link">Movies</Nav.Link>
                        <Nav.Link href="#link">Recently Added</Nav.Link>
                        <Nav.Link href="#link">My List</Nav.Link>
                    </Nav>
                    <Nav className=' flex-row'>
                        <Dropdown as={NavItem} className='me-2 me-md-0'>
                            <Dropdown.Toggle as={NavLink}><img alt='' src='kids_icon.png' width={30}></img></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Profile</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href="#home" className='me-2 me-md-0'><img alt='' src={search}></img></Nav.Link>
                        <Nav.Link href="#home" className='me-2 me-md-0'>KIDS</Nav.Link>
                        <Nav.Link href="#home" className='me-2 me-md-0'><img alt='' src={bell}></img></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarflix