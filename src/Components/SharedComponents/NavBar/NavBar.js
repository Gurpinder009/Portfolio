import React from 'react'
import {Brand, Nav,StyledIcon,StyledMenu,StyledListItem, StyledList} from './NavBar-styles';



import { links } from '../RoutingList.js';

export default function Navbar() {

    return (
        <Nav>
            <Brand>
                gsg009
            </Brand>
            <StyledList>
                {
                    links.map((link)=>(
                        <StyledListItem key={link.path} to={link.path}>{link.name}</StyledListItem>
                    ))
                }
            </StyledList>
            <StyledList>
                <StyledIcon href='https://www.google.com' ><i className="fab fa-github"></i></StyledIcon>
                <StyledIcon href='https://www.google.com' ><i className="fab fa-twitter"></i></StyledIcon>
                <StyledIcon href='https://www.google.com' ><i className="fab fa-linkedin"></i></StyledIcon>
            </StyledList>

            <StyledMenu >
            <i className="fas fa-bars"></i>
            </StyledMenu>

        </Nav>
    )
}

