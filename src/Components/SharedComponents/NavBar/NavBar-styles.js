import styled from 'styled-components'
import { Link } from 'react-router-dom';


let text_color = "#737373"

export const Nav = styled.nav`
  display:flex;
  z-index: 3;
  position: sticky;
  overflow-x: hidden;
  top: 0;
height:4.5em;
  background-color: #eeeeee;
  justify-content: space-between;
  padding:0 2em;
  align-items:center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
 
`

export const Brand = styled.span`
  text-transform: uppercase;
  color: ${text_color};
  font-weight:400;
  font-size: 28px;

`

export const StyledList = styled.ul`
    @media (max-width:800px){
      display:none;
    }
`
export const StyledListItem = styled(Link)`
  margin:0 1em;
  display:inline-block;
  color: ${text_color};
  position:relative;
  text-decoration: none;
  font-size: medium;
  font-weight: 500;

  &:hover {
    color: #313131;
  }

  &::after{
    content:"";
    position:absolute;
    left:0;
    width:100%;
    transform:scaleX(0);
    bottom: 0;
    min-height:2px;
    background-color:#34b7a7;
    transition:all  0.4s ease-out ;
  }

  &:hover::after{
   transform: scaleX(1);
  }
`



export const StyledIcon = styled.a`
 margin:0 0.3em;
 font-size: large;
 color: ${text_color};
 &:hover{
  color:#2fa697;
 }

`



export const StyledMenu = styled.button`
  display:none;
  border:none;
  background-color:inherit;
  color: ${text_color};

  font-size: large;
  cursor: pointer;
  @media (max-width:780px){
    display:inline-block;
  }
 
`
