import React from "react";
import styled from "styled-components";
const Wrapper = styled.button`
  background: none;
  border: none;
  width: 30px;
  height: 21px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .bar {
    width: 30px;
    height: 3px;
    background-color: #f2f2f2;
  }
`;

const Burger = props => {
  return (
    <Wrapper onClick={props.handleClick}>
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </Wrapper>
  );
};

export default Burger;
