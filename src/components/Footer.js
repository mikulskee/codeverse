import React from "react";
import styled from "styled-components";
import bgFooter from "../img/bg-footer.jpg";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faYoutube,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.footer`
  position: relative;
  height: 55vw;
  background-image: url(${bgFooter});
  background-position: center;
  background-size: cover;
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgb(4, 5, 25);
  background: linear-gradient(
    180deg,
    rgba(4, 5, 25, 1) 0%,
    rgba(4, 5, 25, 1) 10%,
    rgba(4, 5, 25, 0.7) 30%,
    rgba(4, 5, 25, 0.7) 75%,
    rgba(4, 5, 25, 1) 100%
  );
`;
const Content = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 135px;
  }
  h3,
  h5 {
    color: #f2f2f2;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 8px;
  }
  h3 {
    font-style: italic;
    font-size: 14px;
    color: #bf2ac8;
  }
`;

const Socials = styled.ul`
  list-style: none;
  display: flex;

  li {
    padding: 5px 0;
    a {
      display: flex;
      align-items: center;
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
      color: #f2f2f2;
      text-decoration: none;
      span.icon {
        font-size: 22px;
        width: 50px;
        text-align: center;
      }
      span.name {
        margin-left: 15px;
      }
    }
  }
`;
const Footer = () => {
  return (
    <Wrapper>
      <Gradient />
      <Content>
        <img src={logo} alt="logo" />
        <h3>to boldly go where no man has gone before</h3>
        <Socials>
          <li>
            <a href="https://github.com/mikulskee">
              <span className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/miikulskee/">
              <span className="icon">
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/MikulskeeTV/">
              <span className="icon">
                <FontAwesomeIcon icon={faYoutube} />
              </span>
            </a>
          </li>
          <li>
            <a href="www.linkedin.com/in/mikulski-mateusz">
              <span className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
            </a>
          </li>
        </Socials>
        <h5>© Codeverse, 2020.</h5>
      </Content>
    </Wrapper>
  );
};

export default Footer;
