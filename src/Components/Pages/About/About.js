import React from "react";
import { Desc, Heading } from "../ContactMe/ContactMe-styles";
import {
  AboutWrapper, Box, Image, Container, Title, PersonDetails, DetailContainer, DetailHeading, DetailDesc, SkillContainer, Skill, SkillLabel,
  SkillValue, ProgressBarHeader, ProgressBar, SkillDetailWrapper
} from "./About-styles";
import michael from "../../../michael.jpeg"



const SkillList = [
  {
    Heading: "Drawing",
    value: 95,
  },
  {
    Heading: "CSS",
    value: 75,
  },
  {
    Heading: "javascript",
    value: 70,
  },

  {
    Heading: "Chess",
    value: 40,
  },

  {
    Heading: "HTML",
    value: 80,
  },

  {
    Heading: "Ludo",
    value: 80,
  }
]




export default function About() {
  return (
    <AboutWrapper>
      <Heading width={3} left={41} marginTop={1.2}>
        About
      </Heading>
      <Desc>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam adipisci
        assumenda rerum earum dolore reprehenderit omnis error fuga quos,
        laborum voluptate aut corporis possimus neque voluptates optio quod
        nobis consequuntur nihil fugiat sit autem!
      </Desc>

      <Box>
        <Image src={michael} alt="loading" />
        <Container>
          <Title>
            WEB DEVElOPER
          </Title>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <PersonDetails>
            <DetailContainer>
              <DetailHeading>Name:</DetailHeading>
              <DetailDesc> Harkomal singh</DetailDesc>
            </DetailContainer>
            <DetailContainer>
              <DetailHeading>Age:</DetailHeading>
              <DetailDesc> 20</DetailDesc>
            </DetailContainer>
            <DetailContainer>
              <DetailHeading>Phone Number:</DetailHeading>
              <DetailDesc> 8146487427</DetailDesc>
            </DetailContainer>
            <DetailContainer>
              <DetailHeading>Email Address:</DetailHeading>
              <DetailDesc> michael@gmail.com</DetailDesc>
            </DetailContainer>
            <DetailContainer>
              <DetailHeading>Address:</DetailHeading>
              <DetailDesc> V.P.O. Dosanjh kalan, Punjab</DetailDesc>
            </DetailContainer>
            <DetailContainer>
              <DetailHeading>Freelance:</DetailHeading>
              <DetailDesc> Available</DetailDesc>
            </DetailContainer>
            <DetailContainer>
              <DetailHeading>Degree: </DetailHeading>
              <DetailDesc> Bachelor of Computer Applications</DetailDesc>
            </DetailContainer>
          </PersonDetails>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, rem tempora officiis fugit reprehenderit, perferendis possimus quod vitae magni ipsum aliquam, ab eligendi autem voluptate. Rem, inventore perferendis! Amet ipsam quo sunt, tempore dicta eos illo nisi, dolor voluptas in ratione minima inventore, suscipit deleniti quia ad cupiditate sapiente! Harum exercitationem ab molestias eum fugiat at, ducimus quia unde nostrum dolor atque nam molestiae!</p>
        </Container>
      </Box>

      <Heading width={3} left={41} marginTop={3.6}>
        Skills
      </Heading>
      <Desc>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam adipisci
        assumenda rerum earum dolore reprehenderit omnis error fuga quos,
        laborum voluptate aut corporis possimus neque voluptates optio quod
        nobis consequuntur nihil fugiat sit autem!
      </Desc>

      <SkillContainer>


        {SkillList.map((data,index) => <Skill key={index}>
          <SkillDetailWrapper>
            <SkillLabel>{data.Heading}</SkillLabel>
            <SkillValue>{data.value}%</SkillValue>
          </SkillDetailWrapper>
          <ProgressBar><ProgressBarHeader width={data.value} /></ProgressBar>
        </Skill>
        )}



      </SkillContainer>

    </AboutWrapper>
  );
}
