import styled from "styled-components";

export const StyledDrawer = styled.div`
  position:fixed;
  width:${props=> (props.isOpen)?"15em":"0" };
  background-color:white;
  height:100%;
  z-index: 4;
  overflow-x:hidden;
  overflow-y: auto;
  transition:width 1s linear;
`
