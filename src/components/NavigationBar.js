import React, {useState, useEffect} from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

import TypistLoop from 'react-typist-loop'
import Typist from 'react-typist'


const Styles = styled.div`
.navbar {
    background: transparent;
}

.navbar.active {
    background: white;
}
   .navbar-brand, .navbar-nav .nav-link {
       color: orange;
       &:hover {
           color: white;
       }
   }
`;
export function NavigationBar () {
    const [navbar,setNavbar] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener("scroll", changeBackground);
    return(
    <Styles>
        <Navbar className={navbar ? "navbar active" : "navbar" }fixed="top" expand="lg"  >
            <Container>

            <Navbar.Brand >  
            <TypistLoop interval={3000}>
                      {[
                        'ئىزدىنىش ژۇرنىلى',
                         'Az sözle, köp angla,az ye, köp chayna.',
                         'Atangdin dunya qalghiche hüner qalsun.',
                         'Ana wetiningge muhebbet baghla.',
                       ].map(text => <Typist key={text} startDelay={1000}>{text}</Typist>)} 
                    </TypistLoop>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ">
                  <Nav.Item> <Nav.Link href="/"> Bashbet </Nav.Link> </Nav.Item>
                  <Nav.Item> <Nav.Link href="/about"> Heqqimizde </Nav.Link> </Nav.Item>
                  <Nav.Item> <Nav.Link href="/contact"> Alaqe </Nav.Link> </Nav.Item>
                 
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </Styles>
)
}

export default NavigationBar;
