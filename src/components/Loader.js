import styled from "styled-components";

export const Loader = styled.div`
  
    position: relative;
    width: 0.15em;
    height: 0.15em;
    background-color: currentcolor;
    border-radius: 100%;
    animation: loader-39-1 30s infinite linear;
    &:before,
    &:after {
      content: "";
      border-radius: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &:before {
      width: 0.3em;
      height: 1em;
      animation: loader-39-2 0.8s linear infinite;
    }
    &:after {
      width: 1em;
      height: 0.3em;
      animation: loader-39-2 1.2s linear infinite;
    }
  }
  @keyframes loader-39-1 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes loader-39-2 {
    0% {
      box-shadow: 0.04em -0.04em 0 0.02em currentcolor;
    }
    25% {
      box-shadow: 0.04em 0.04em 0 0.02em currentcolor;
    }
    50% {
      box-shadow: -0.04em 0.04em 0 0.02em currentcolor;
    }
    75% {
      box-shadow: -0.04em -0.04em 0 0.02em currentcolor;
    }
    100% {
      box-shadow: 0.04em -0.04em 0 0.02em currentcolor;
    }
 
`;
