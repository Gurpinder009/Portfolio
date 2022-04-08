
import styled from 'styled-components'

const text_color="#373737";


export const HomeWrapper= styled.div`
min-height:90vh;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
flex-wrap: wrap;
@media (max-width: 780px) {
  background-position: right;
}

`


export const StyledBox = styled.div`
  display: grid;
  justify-items: center;
  width: 25em;
  position: relative;
  z-index: 2;
`

export const Heading = styled.h1`
  width: 15ch;
  font-weight: bolder;
  color:${text_color} ;
  animation-duration: 3s;
  animation-name: typing, blink;
  animation-timing-function: ease-out;
  animation-delay: 0.5s;
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid;
  font-size: 30px;

  @media (max-width:780px){
    font-size: 22px;

  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`
export const Description = styled.div`
    color:${text_color} ;

  margin-top: 0.5em;
  text-align:center;
  font-size: 22px;
`

export const Button = styled.button`
  color: white;
  text-decoration: none;
  background-color: #34b7a7;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  border: none;
  margin-top: 2em;
  padding: 0.8em 2em;
  border-radius: 25px;
  display: inline-block;
  transition-duration: 0.2s;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #36c0af;
  }

  &:active {
    box-shadow: none;
  }
`
