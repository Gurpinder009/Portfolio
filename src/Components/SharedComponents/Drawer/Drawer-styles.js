import styled from "styled-components";


export const StyledDrawer = styled.div`
    display:block;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:4;
    background-color:white;
    width:${props=> (props.isOpen)?"15em":"0" };
    background-color:white;
    overflow-x:hidden;
    overflow-y: auto;
    transition:width 1s linear;
    box-shadow: 5px 0px 20px 0 rgb(0 0 0 / 18%);
    @media(min-width: 780px){
        display:none;
    }
` 

export const StyledHeading = styled.div`
    color:#404040;
    display:flex;
    align-items:center;
    min-height:4em;
    padding:0 10%;
    color:#404040;
  box-shadow: 0px 0px 25px 0 rgb(0 0 0 / 8%);
`

export const StyledLink = styled.li`
  color:#404040;
  position:relative;
  display:block;
  /* text-align:center; */
  margin:0.6em 0.6em;
  padding:1em 10%;
  text-decoration: none;
  font-size: small;
  font-weight: 700;
  transition: background-color 0.9s ease-out;
  cursor: pointer;
  
  &:hover {
      background-color: #ececec;
  color:#404040;

  }

`

export const StyledBox= styled.div`
    width:100%;
    min-width:10em;
`