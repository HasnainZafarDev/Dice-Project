import React, { useState } from "react";
import styled from "styled-components";

const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <Container>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} />
      </div>
      <p>Click on Dice to roll</p>
    </Container>
  );
};

export default RoleDice;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
