import React from 'react'
import { StyledDrawer,StyledHeading,StyledBox,StyledLink } from './Drawer-styles'
import {links} from "../RoutingList"
import { useNavigate } from 'react-router-dom'




export default function Drawer({isOpen}) {
  const Navigation = useNavigate();

  const handleRouting = (path)=>{
    Navigation(path);
  }


  return (
    <StyledDrawer isOpen={isOpen}>
            <StyledHeading>Navigation</StyledHeading>
            <StyledBox>
            {
                links.map(values=>(
                    <StyledLink key={values.path} onClick={()=>handleRouting(values.path)}>{values.name}</StyledLink>
                ))
            }
            </StyledBox>
    </StyledDrawer>
  )
}
