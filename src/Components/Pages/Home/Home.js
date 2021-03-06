import React from 'react'
import { HomeWrapper,Heading, Description,Button,StyledBox } from './Home-styles'
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/about');
  return (
    <HomeWrapper>
            <StyledBox>
                <Heading>Gurpinder Singh. </Heading>
                <Description>Coder, Programmer and Developer...</Description>
                <Button onClick={handleClick}>About me</Button>
            </StyledBox> 
    </HomeWrapper>
  )
}


