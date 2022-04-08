import styled from "styled-components";

export const ContactMeWrapper = styled.div`
  padding: 1.6em;
  overflow: hidden;
  width: 100%;
 @media screen and (max-width:850px) {
   padding:1.6em 0.5em;
 }
`;
export const Iframe = styled.iframe`
  min-height: 18em;
  height: 100%;
  width: 100%;
  border: 0;
  margin-bottom: 1em;
`;

export const Heading = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: #404040;
  margin-top: ${props=>props.marginTop?props.marginTop:0}em;
  font-family: "Raleway", sans-serif;

  &::after {
    content: "";
    position: relative;
    display: block;
    left: calc(50% - ${props=>props.left}px);
    height: 3px;
    background: #34b7a7;
    width: ${props=>props.width}em;
    top: 0.4em;
  }
`;

export const Desc = styled.p`
  text-align: center;
  margin: 1.8em 1em;
  color: #404040;
  padding:${props=>props.padding?props.padding:0};
  @media screen and (max-width:1000px) {
    padding:1em;
  }
  @media screen and (max-width:850px) {
    padding:0em;
  }
`;

export const GridContainer = styled.div`
  /* border: 2px solid green; */
  display: grid;
  margin: 0 auto;
  margin-bottom: 2em;
  width: fit-content;
  grid-template-columns: 29em 34em;
  border-radius: 5px;

  @media screen and (max-width: 1100px) {
    /* border: 2px solid red; */
    grid-template-columns: 25em 31em;
  }

  @media screen and (max-width: 1000px) {
    /* border: 2px solid red; */
    grid-template-columns: 23em 28em;
  }


  @media screen and (max-width: 850px) {
    /* width:max-content; */
    width:100%;
    box-shadow: none;
    grid-template-columns: 1fr;
  }
`;

export const Form = styled.form`
  background-color: white;
  padding: 3em;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  @media screen and (max-width:850px){
    box-shadow: none;
  }

 
`;

export const FormHeading = styled.h2`
   letter-spacing: 1px;
   color: #404040;
   font-size: 1.8em;
   margin-bottom: 1em;
`;

export const InputField = styled.input`
  height: 2.7em;
  width: 100%;
  border: 0;
  padding: 0 0.7em;
  font-size: 1.2em;

  background-color: #efefef;
  &:focus {
    outline: 2px solid #34b7a7;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: vertical;
  border: 0;
  padding: 0.4em 0.7em;
  font-size: 1.1em;

  background-color: #efefef;
  &:focus {
    outline: 2px solid #34b7a7;
  }
`;

export const Button = styled.button`
  background-color: red;
  height: 2.8em;
  text-transform: uppercase;
  width: 7em;
  border-radius: 5px;
  font-size: 0.9em;
  background-color: #34b7a7;
  border: 0;
  color: white;
  margin : 0.2em 1.2em 0 0;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
outline:0;

  &:hover {
    color: white;
    background-color: #36c0af;
  }

  &:active {
    box-shadow: none;
  }

`;

export const Error = styled.small`
color:red;
display:block;
height:1.9em;
`


export const Container = styled.div`
  display:grid;
  padding:0 3em ;
  align-content: center;
  gap:5em;

`

export const List = styled.li`
  /* border:2px solid green; */
  display:grid;
  /* border:2px solid green; */
  grid-template-rows: 1.5em 1.5em;
  grid-template-columns:3.6em 13em;
  margin: 2.8em 0;
  column-gap: 0.8em;
  row-gap:0.5em;
`
export const ListHeading = styled.h1`
  color:#454545;
  grid-row-start: 1 ;
  grid-row-end:2;
  grid-column-start:2;
  grid-column-end:3 ;
  font-size: 1.7em;
  font-weight:600;
`
export const ListDesc = styled.p`
padding:0 0.5em;
color:#454545;
grid-row-start:2;
grid-row-end:3; 
grid-column-start:2;
  grid-column-end:3 ;
`
export const ListIcon = styled.i`
  /* border:2px solid green; */
  overflow:hidden;
  grid-row-start:1;
grid-row-end:3; 
display:flex;

justify-content:center;
align-items:center;
border-radius: 48%;
background-color:#effbf9;
transition: background-color 0.7s linear;
& svg{
  transition: stroke 0.7s linear;
  stroke:#34b7a7;
  }

  &:hover{
    background-color:#34b7a7;
  }

  
  &:hover svg{
    stroke:white;
  }
`