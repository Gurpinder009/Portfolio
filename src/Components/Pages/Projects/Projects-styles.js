import styled from "styled-components";

export const ProjectWrapper = styled.div`
  min-height: 90vh;
  /* padding: 2em; */
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em 1em;
  overflow: hidden;
  margin: 0 auto;
  flex-wrap: wrap;
  max-width: 75em;
`;
export const Card = styled.div`
  display: grid;
  grid-template-rows: 56% 44%;
  width: 20rem;
  height: 22rem;
  padding: 0.5em;
  border-radius: 10px;
  margin: 0.8em;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
`;
export const Image = styled.img`
  border-radius: 8px;
  width: 100%;
  min-height: 11rem;
  height: 100%;
  border:1px solid green;
`;

export const CardDetails = styled.div`
  border-radius: 5px;
  display: grid;
  padding: 0 0.2em;
  gap: 0;
  grid-auto-rows: 1fr;
`;

export const CardHeading = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8em;
  color: #454545;
  padding: 0;
  font-weight: 700;
`;


export const CardDesc = styled.div`
  overflow: hidden;
  color:#656565;
`;
export const CardButton = styled.button`
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  border: 1.8px solid #34b7a7;
  background-color: white;
  color: #34b7a7;
  font-size: 1.2em;
  transition: all 0.6s linear;
  &:hover {
    color: white;
    background-color: #34b7a7;
  }
`;
