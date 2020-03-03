import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "../img/logo_1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faYoutube,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { footerContentAnimation } from "../animations/contentAnimations";

const Wrapper = styled.footer`
  position: relative;
  overflow: hidden;
  height: 55vw;
  background: rgb(4, 5, 25);
  max-width: 2100px;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    height: 30vw;
  }
  @media only screen and (orientation: landscape) {
    height: 30vw;
  }
  @media only screen and (min-width: 1024px) {
    height: 220px;
  }

  .border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 20px solid #bf2ac8;
  }
  .bg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%) scale(1.1);
    background: rgb(4, 5, 25);
    border-radius: 10px;
    @media only screen and (min-width: 768px) {
      width: 103%;
    }
    @media only screen and (min-width: 1024px) {
      width: 104%;
    }
  }
`;

const Content = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  padding: 20px 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 130px;
    @media only screen and (orientation: landscape) {
      width: 115px;
    }
    @media only screen and (min-width: 1024px) {
      width: 150px;
    }
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
    font-size: 12px;
    color: #f2f2f2;
    @media only screen and (min-width: 1024px) {
      font-size: 14px;
    }
    span {
      color: #bf2ac8;
      font-size: 12px;
      font-family: "Montserrat", sans-serif;
      @media only screen and (min-width: 1024px) {
        font-size: 14px;
      }
    }
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
  useEffect(() => {
    const timeline = footerContentAnimation();

    window.addEventListener("scroll", () => {
      const footer = document.querySelector("footer");
      const height = window.innerHeight;
      const footerHeight = footer.getBoundingClientRect().height;
      const top = Math.floor(footer.getBoundingClientRect().top + footerHeight);

      if (height >= top) {
        timeline.play();
      } else if (height < top) {
        timeline.reverse();
      }
    });
  });
  return (
    <Wrapper>
      <div className="border" />
      <div className="bg" />
      <Content>
        <img src={logo} alt="logo" />
        <h3>
          to <span>boldly</span> go where no man has gone before &#x1F680;
        </h3>
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
