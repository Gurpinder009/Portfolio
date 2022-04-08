import React from 'react'
import {Brand, Nav,StyledIcon,StyledMenu,StyledListItem, StyledList} from './NavBar-styles';



import { links } from '../RoutingList.js';

export default function Navbar({handleDrawer}) {

    return (
        <Nav>
            <Brand>
                Michael
            </Brand>
            <StyledList>
                {
                    links.map((link)=>(
                        <StyledListItem key={link.path} to={link.path}>{link.name}</StyledListItem>
                    ))
                }
            </StyledList>
            <StyledList>
                <StyledIcon href='https://github.com/Singh-gsh009/projectWork' target="_blank" ><i className="fab fa-github"></i></StyledIcon>
                <StyledIcon href='https://www.facebook.com/michael.dosanjh.7' target="_blank" ><i className="fab fa-facebook"></i></StyledIcon>
                <StyledIcon href='https://www.google.com' target="_blank" ><i className="fab fa-linkedin"></i></StyledIcon>
            </StyledList>

            <StyledMenu onClick={handleDrawer} >
            <i className="fas fa-bars"></i>
            </StyledMenu>

        </Nav>
    )
}

