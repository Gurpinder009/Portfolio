import React from "react";
import Drawer from "../Drawer/Drawer";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import styled from "styled-components";



export default function Layout(props) {
  const [isOpen,setIsOpen] = React.useState(false);
  const handleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <Drawer isOpen={isOpen} />
      <NavBar handleDrawer={handleDrawer} />
        <Box>
        {props.children}
        <Footer />

        </Box>
    </>
  );
}


const Box = styled.div`
  min-height: 90vh;
  /* border:2px solid red; */
  overflow-y: scroll;
  `
