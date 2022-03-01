import React from "react";
import Drawer from "../Drawer/Drawer";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { Wrapper } from "./Layout-styles";

export default function Layout(props) {
  return (
    <>
      <Drawer />
      <NavBar />
      <Wrapper>
        {props.children}
        <Footer />
      </Wrapper>
    </>
  );
}
