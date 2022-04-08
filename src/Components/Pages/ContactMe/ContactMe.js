import React, { useRef } from "react";
import {
  ContactMeWrapper,
  Heading,
  Desc,
  GridContainer,
  Iframe,
  Container,
  Form,
  ListHeading,
  FormHeading,
  InputField,
  TextArea,
  ListIcon,
  Button,
  ListDesc,
  List,
  Error,
} from "./ContactMe-styles";
import * as yup from "yup";

const validation = yup.object().shape({
  message: yup.string().required("message is required"),
  phone_num: yup.string().required("phone_num is required"),
  email: yup.string().required("email is required"),
  name: yup.string().required("name is required"),
});

export default function ContactMe() {
  return (
    <ContactMeWrapper>
       <Heading width={5} left={80} marginTop={0.5}>contact me</Heading>
      <Desc>
        Now staying in touch is easier then we thought. Fill Form and we will
        contact you.
      </Desc>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d420743.46260703076!2d75.64249283193102!3d31.26265623290091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8cefda5cef93%3A0x42eeef004cc5df1!2sDosanjh%20Kalan%2C%20Punjab!5e1!3m2!1sen!2sin!4v1649441908330!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Iframe>
     
    
      <GridContainer>
        <Container>
          <ul>
            <List>
              <ListIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-map-pin"
                  width="32"
                  height="40"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="11" r="3" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
              </ListIcon>
              <ListHeading>Location:</ListHeading>
              <ListDesc>V.P.O. Dosanjh Kalan, Punjab</ListDesc>
            </List>
            <List>
              <ListIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-mail"
                  width="30"
                  height="40"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </ListIcon>
              <ListHeading>Email Address:</ListHeading>
              <ListDesc>michael@gmail.com</ListDesc>
            </List>
            <List>
              <ListIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-device-mobile"
                  width="40"
                  height="38"
                  viewBox="0 0 24 24"
                  strokeWidth="1.3"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="7" y="4" width="10" height="16" rx="1" />
                  <line x1="11" y1="5" x2="13" y2="5" />
                  <line x1="12" y1="17" x2="12" y2="17.01" />
                </svg>
              </ListIcon>
              <ListHeading>Phone Number:</ListHeading>
              <ListDesc>+91 8146487427</ListDesc>
            </List>
          </ul>
        </Container>
        <FormComponent />
      </GridContainer>
    </ContactMeWrapper>
  );
}

function FormComponent() {
  const formRef = useRef();
  const handleSubmission = async (e) => {
    e.preventDefault();
    let data = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone_num: e.target[2].value,
      message: e.target[3].value,
    };

    console.log(
      await validation
        .validate(data)
        .then((result) => result)
        .catch((error) => error.message)
    );
  };

  const handleReset = (e) =>{
    e.reset();
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmission}>
      <FormHeading>Register</FormHeading>
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <Input placeholder="Phone Number" />
      <Input rows={4} placeholder="Message" isTextArea={true} />
      <Button type="submit">Submit</Button>
      <Button type="reset" onClick={(e)=>handleReset(e)}>Reset</Button>
    </Form>
  );
}

function Input(props) {
  const [state, setState] = React.useState("");
  const handleChange = (e) => {
    setState(e);
  };
  return (
    <>
      {props?.isTextArea === true ? (
        <TextArea
          placeholder={props.placeholder}
          value={state}
          onChange={(e) => handleChange(e.target.value)}
          rows={3}
          wrap="hard"
          maxlength="100"
        />
      ) : (
        <InputField
          placeholder={props.placeholder}
          value={state}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}
      <Error>{props.error}</Error>
    </>
  );
}
