import React from "react";
import styled from "styled-components";
import {Button} from 'react-bootstrap';

import Title from "./Title";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 500px;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem;
 
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Description = styled.p`
  color: white;
  text-align: center;
`;
const Card = ({ title, description, image, url}) => {
  return (
    
    <Wrapper style={{ backgroundImage: `url(${image})` }}> 
      <Title>{title}</Title>
      <Description>{description}</Description>
     
         <a href={url}><Button variant="success" > Echip Oqung</Button>{' '}</a>

    </Wrapper>
  );
};

export default Card;