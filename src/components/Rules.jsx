import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <Container>
      <h2>How To Play DICE Game</h2>
      <div className="text">
        <p>1.Select any number</p>
        <p>2.Click on dice image</p>
        <p>3.If selected number is equal to dice number you will get the same point as dice</p>
        <p>4.If you get wrong guess then 2 points will be deducted</p>
      </div>
    </Container>
  );
};

export default Rules;

const Container = styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 20px;
background-color: #fbf1f1;
padding: 20px;
border-radius: 10px;
h2{
  font-size: 24px;
}
.text{
    margin-top: 24px;

}
`;
