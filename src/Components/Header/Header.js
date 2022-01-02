import React from "react";
import '../../Components/Header/Header.css'
import { useNavigate } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown, Offcanvas } from "react-bootstrap"


function Header(props) {
    console.log(props);
    let { Admin, islogin } = props
    console.log(Admin, "Admin");
    console.log(islogin, "login");
    const naviagate = useNavigate()
    let userDatas = JSON.parse(localStorage.getItem("userData"))
    let adminDatas = JSON.parse(localStorage.getItem("AdminData"))


    return (

            <Navbar bg="light" expand={false}>
           { Admin ? <Container fluid>
                <Navbar.Brand >ADMIN PANNAL</Navbar.Brand>
                {adminDatas && <Navbar.Toggle aria-controls="offcanvasNavbar" />}
                {adminDatas && <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link >Hello Admin</Nav.Link>
                            <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item onClick={() => {
                                    localStorage.removeItem('userData')
                                    naviagate('/admin/login')

                                }} >Logout</NavDropdown.Item>
                                 <NavDropdown.Item ></NavDropdown.Item>
                                 <NavDropdown.Item  onClick={() => {
                                    // localStorage.removeItem('userData')
                                    naviagate('/admin/home')

                                }} >home</NavDropdown.Item>
                                 <NavDropdown.Item  ></NavDropdown.Item>
                                 <NavDropdown.Item  >Logout</NavDropdown.Item>

                                 <NavDropdown.Item  ></NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>}
            </Container>

           : <Container fluid>
                <Navbar.Brand >INCUBATION MANAGER</Navbar.Brand>
                {islogin && <Navbar.Toggle aria-controls="offcanvasNavbar" />}
                {islogin && <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link >{userDatas.firstName}</Nav.Link>
                            <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item onClick={() => {
                                    localStorage.removeItem('userData')
                                    naviagate('/')

                                }} >Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>}
            </Container>}
            </Navbar>

      


    )
}
export default Header