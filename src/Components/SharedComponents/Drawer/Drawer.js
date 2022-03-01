import React, { useState } from 'react'
import { StyledDrawer } from './Drawer-styles'


export default function Drawer() {
  const [isOpen,setIsOpen] = useState(true);
  const handleDrawer = () => setIsOpen(!isOpen);
  return (
    <StyledDrawer isOpen={isOpen}>Drawer
      <button type='button' onClick={handleDrawer}>Toggle</button>
    </StyledDrawer>
  )
}
