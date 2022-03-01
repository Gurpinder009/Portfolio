import React from "react";
import Drawer from "../Drawer/Drawer";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


export default function Layout(props) {
  const [isOpen,setIsOpen] = React.useState(true);
  const handleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <Drawer isOpen={isOpen} />
      <NavBar handleDrawer={handleDrawer} />
        {props.children}
        <Footer />
    </>
  );
}
