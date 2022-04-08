import React from "react";
import {
  ProjectWrapper,
  CardContainer,
  Card,
  CardHeading,
  Image,
  CardDesc,
  CardDetails,
  CardButton,
} from "./Projects-styles";
import { Desc, Heading } from "../ContactMe/ContactMe-styles";


export default function Projects() {
  return (
    <ProjectWrapper>
      <Heading marginTop={1.8} width={4} left={52}>Projects</Heading>
      <Desc padding={"0 5em"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita soluta beatae reiciendis officiis et! Vitae, sit pariatur! Quis, inventore perspiciatis, distinctio necessitatibus praesentium tempore exercitationem facere ipsam, voluptas quasi repudiandae!</Desc>
      <CardContainer>
        <Card>
          <Image
            src="https://cdn-images-1.medium.com/max/1000/1*p8kr-K6qcq_25g6ToWH01Q.jpeg"
            alt="nothing"
          />
          <CardDetails>
            <CardHeading>Data</CardHeading>
            <CardDesc>
              Web Application for managing operations of library
            </CardDesc>
            <CardButton>Button</CardButton>
          </CardDetails>
        </Card>



        <Card>
          <Image
            src="https://www.scnsoft.com/blog-pictures/cover-pics/react_js.png"
            alt="nothing"
          />
          <CardDetails>
           <CardHeading>Data</CardHeading>
           <CardDesc>Web Application for managing operations of library</CardDesc>
           <CardButton>Button</CardButton>
          </CardDetails>
        </Card>


        <Card>
          <Image
            src="https://celesttechnologies.com/assets/images/blog/advantag-Laravel.jpg"
            alt="nothing"
          />
          <CardDetails>
           <CardHeading>Data</CardHeading>
           <CardDesc>Web Application for managing operations of library</CardDesc>
           <CardButton>Button</CardButton>
          </CardDetails>
        </Card>


        <Card>
          <Image
            src="https://www.spec-india.com/wp-content/uploads/2019/10/Express-JS.png"
            alt="nothing"
          />
          <CardDetails>
           <CardHeading>Data</CardHeading>
           <CardDesc>Web Application for managing operations of library</CardDesc>
           <CardButton>Button</CardButton>
          </CardDetails>
        </Card>


        <Card>
          <Image
            src="https://i.ytimg.com/vi/Vp37fWKOlV4/maxresdefault.jpg"
            alt="nothing"
          />
          <CardDetails>
           <CardHeading>Data</CardHeading>
           <CardDesc>Web Application for managing operations of library</CardDesc>
           <CardButton>Button</CardButton>
          </CardDetails>
        </Card>


        <Card>
          <Image
            src="https://i.imgur.com/NG7YplH.jpg"
            alt="nothing"
          />
          <CardDetails>
           <CardHeading>Data</CardHeading>
           <CardDesc>Web Application for managing operations of library</CardDesc>
           <CardButton>Button</CardButton>
          </CardDetails>
        </Card>


        <Card>
          <Image
            src="https://miro.medium.com/max/1400/1*Ifpd_HtDiK9u6h68SZgNuA.png"
            alt="nothing"
          />
          <CardDetails>
           <CardHeading>Data</CardHeading>
           <CardDesc>Web Application for managing operations of library</CardDesc>
           <CardButton>Button</CardButton>
          </CardDetails>
        </Card>
      </CardContainer>
    </ProjectWrapper>
  );
}
