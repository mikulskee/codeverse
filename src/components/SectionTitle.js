import React from "react";

import styled from "styled-components";

const Wrapper = styled.h2`
  position: relative;
  color: #f2f2f2;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 24px;
  font-style: italic;
  display: flex;
  flex-direction: row;
  @media only screen and (min-width: 768px) {
    margin-left: 45px;
    font-size: 28px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 17px;
  }
  @media only screen and (min-width: 1500px) {
    font-size: 22px;
  }

  span {
    color: #f2f2f2;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 24px;
    font-style: normal;
    display: block;
    margin: 0.5px;
    @media only screen and (min-width: 1024px) {
      font-size: 2em;
    }
  }

  span.anim-txt {
    opacity: 0;
    &.visible {
      opacity: 1;
    }
  }

  span.bracket {
    font-style: italic;
    visibility: hidden;
    margin: 0 4px;
    transform: translateX(-20px);
  }
  span.bracket:nth-last-child(1) {
    transform: translateX(20px);
  }
`;

const SectionTitle = props => {
  const title = Array.from(props.children).map((letter, i) => (
    <span className="anim-txt" key={i}>
      {letter}
    </span>
  ));
  return (
    <Wrapper className={props.className}>
      <span className="bracket">{"{ "}</span>
      {title}
      <span className="bracket">{" }"}</span>
    </Wrapper>
  );
};

export default SectionTitle;
