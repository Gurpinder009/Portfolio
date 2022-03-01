import React from 'react'
import { StyledDrawer,StyledHeading,StyledBox,StyledLink } from './Drawer-styles'
import {links} from "../RoutingList"




export default function Drawer({isOpen}) {
  

  const handleRouting = ()=>{
    console.log("hello")
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
