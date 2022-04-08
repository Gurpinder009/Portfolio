import styled from "styled-components";

export const AboutWrapper = styled.div`
  min-height: 87vh;
  width: 90%;
  max-width: 80em;
  /* border:2px solid green; */
  margin: 0 auto;
  overflow:hidden;
  @media screen and (max-width: 1275px) {
    width: 95%;
  }
  @media screen and (max-width: 1105px) {
    width: 99%;
  }
`;
export const Box = styled.div`
  display: grid;
  grid-template-columns: 33% 67%;
  width: 95%;
  column-gap: 1.5em;
  margin: 2.6em auto;
  grid-auto-rows: 23em;

  @media screen and (max-width: 1105px) {
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    column-gap: 0;
  }
`;

export const Image = styled.img`
  /* border: 2px solid blue; */
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1105px) {
    width: 80%;
    margin: 0 auto;
    height: 85%;
  }
`;

export const Container = styled.div`
  @media screen and (max-width: 1105px) {
    width: 80%;
    margin: 0 auto;
    height: 85%;
  }
  & p {
    color: #656566;
    text-indent: 0.2em;
  }
`;

export const Title = styled.h1`
  /* color:red; */
  font-size: 1.8em;
  font-weight: 600;
  margin-bottom: 0.2em;
  color: rgba(0, 0, 0, 0.7);
`;

export const PersonDetails = styled.div`
  display: grid;
  /* border: 2px solid green; */
  padding: 1.2em 0;
  grid-auto-rows: min-content;
  row-gap: 1em;
  column-gap: 0.8em;
  grid-template-columns: 1fr 1fr;
  /* border:2px solid green; */
`;
export const DetailContainer = styled.div`
  /* border: 2px solid red; */
`;

export const DetailHeading = styled.h3`
  font-size: medium;
  font-weight: 600;
  color: #404040;
  display: inline;
  /* border:2px solid green; */
`;

export const DetailDesc = styled.p`
  color: #656565;
  display: inline;
`;

export const SkillContainer = styled.div`
  display: grid;
  width:100%;
  grid-template-columns: 1fr 1fr;
  gap: 1.5em;
  padding:2em;
  margin-bottom: 3em;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
  }

`;

export const Skill = styled.div`
  /* border:2px solid green; */
`;
export const SkillDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7em;
`;

export const SkillLabel = styled.label`
  text-transform: uppercase;
  font-weight: bold;
  color: #656565;
`;

export const SkillValue = styled.p`
  display: inline;
`;

export const ProgressBar = styled.div`
  color: green;
  min-height: 0.9rem;
  width: 100%;
  background-color: #e4e4e4;
  overflow: hidden;
  border-radius: 2px;
`;

export const ProgressBarHeader = styled.div`
  width: ${(props) => (props.width ? props.width : 50)}%;
  height: 0.9rem;
  background-color: #34b7a7;
`;
