import { Navbar, Container, Nav, NavItem, Dropdown, NavLink, Form, Row, Col, Button } from 'react-bootstrap'
import search from '../search.svg'
import bell from '../bell.svg'
import { Component } from 'react'

class Navbarflix extends Component {
    state = {
        isHovered: false,
        research: ''
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.childToParent(this.state.research)
        
    }
    render() {
        return (
            <Navbar expand="md" >
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
                        <Nav className=' flex-row align-items-center'>
                            <Dropdown as={NavItem} className='me-2 me-md-0'>
                                <Dropdown.Toggle as={NavLink}><img alt='' src='kids_icon.png' width={30}></img></Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Profile</Dropdown.Item>
                                    <Dropdown.Item>Settings</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Form className='d-flex align-items-center' onMouseEnter={() => this.setState({ isHovered: true })} onMouseLeave={() => this.setState({ isHovered: false })}
                                onSubmit={(e) => this.handleSubmit(e)}>
                                <Row className='g-0'>
                                    {
                                        this.state.isHovered && (
                                            <Col xs="auto">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Search"
                                                    value={this.state.research}
                                                    onChange={(e) => {
                                                        this.setState({ research: e.target.value })
                                                        this.props.childToParent('')
                                                    }
                                                    }
                                                />
                                            </Col>
                                        )
                                    }

                                    <Col xs="auto">
                                        <Button type='submit' variant='outlined' className='me-2 me-md-0'><img alt='' src={search}></img></Button>
                                    </Col>
                                </Row>
                            </Form>

                            <Nav.Link href="#home" className='me-2 me-md-0'>KIDS</Nav.Link>
                            <Nav.Link href="#home" className='me-2 me-md-0'><img alt='' src={bell}></img></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )

    }
}

export default Navbarflix