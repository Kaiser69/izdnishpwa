import React from 'react';
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import izdinish from "../assets/izdinis.jpg";
import Typing from 'react-typing-animation';


const Styles = styled.div`
  .jumbo {
      background: url(${izdinish}) no-repeat center center fixed;
      background-size: cover;
      height: 800px;
      width: 100%;
      color: #efefef;
      position: relative;
      z-index: -2;
  }
  
  
  @media screen and (min-width: 601px) {
    div.example {
      font-size: 80px;
    }
  }
  
  @media screen and (max-width: 600px) {
    div.example {
      font-size: 30px;
    }
  }
  .overlay {
      padding-top: 15rem;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
  }
`;

export const Jumbotron = () => {
    return (
       <Styles>
           <Jumbo fluid className="jumbo">
             <div className="overlay">
             <Container>
                 <Typing speed={50}> <div class="example"> Izdinishqa Xosh keldingiz {}🔎 </div>  <Typing.Speed ms={20} />
                 <h3 class="text-warning py-5"> Uyghur Edebiyatigha bëghishlanghan uniwërsal edebiy Zhurnal</h3> </Typing>
            
             </Container>
             </div>
             
           </Jumbo>
       </Styles>
    )
}
