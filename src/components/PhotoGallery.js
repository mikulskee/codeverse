import React from "react";
import styled from "styled-components";
import gallery1 from "../img/gallery1_1.jpg";
import gallery2 from "../img/gallery2_1.jpg";
import gallery3 from "../img/gallery3_1.jpg";
import gallery4 from "../img/gallery4_1.jpg";
import gallery5 from "../img/gallery5_1.jpg";
import gallery6 from "../img/gallery6_1.jpg";
import gallery7 from "../img/gallery7_1.jpg";
import gallery8 from "../img/gallery8_1.jpg";
import gallery9 from "../img/gallery9_1.jpg";

const Wrapper = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and (min-width: 1024px) {
    margin: 40px 0 20px;
  }

  div.container {
    position: relative;
    display: inline-block;
    margin: 2% 2%;
    @media only screen and (min-width: 1024px) {
      margin: 2% 3%;
    }
    p {
      position: absolute;
      top: 10%;
      left: -10%;
      font-family: "Montserrat", sans-serif;
      color: #f2f2f2;
      font-size: 10px;
      background-color: rgba(4, 5, 25, 0.9);
      padding: 5px 10px;
      @media only screen and (min-width: 736px) {
        font-size: 12px;
      }
      @media only screen and (min-width: 1024px) {
        font-size: 14px;
      }
      @media only screen and (min-width: 1366px) {
        font-size: 16px;
      }
    }
    img {
      width: 35vw;
      align-self: center;
      max-width: 445px;
      @media only screen and (min-width: 1024px) {
        width: 24vw;
      }
    }
  }

  div.container:nth-child(2) {
    p {
      top: auto;
      left: auto;
      bottom: 5%;
      right: -5%;
    }
    img {
      width: 43vw;
      max-width: 485px;
      @media only screen and (min-width: 1024px) {
        width: 26vw;
      }
    }
  }

  div.container:nth-child(3) {
    p {
      left: auto;
      right: -10%;
    }
    img {
      width: 35vw;
      align-self: center;
      max-width: 465px;

      @media only screen and (min-width: 1024px) {
        width: 25vw;
      }
    }
  }

  div.container:nth-child(4) {
    p {
      top: auto;
      bottom: 5%;
    }
    img {
      width: 40vw;
      max-width: 410px;
      @media only screen and (min-width: 1024px) {
        width: 22vw;
      }
    }
  }
  div.container:nth-child(5) {
    p {
      top: 80%;
    }
    img {
      width: 40vw;
      max-width: 485px;
      @media only screen and (min-width: 1024px) {
        width: 26vw;
      }
    }
  }
  div.container:nth-child(6) {
    p {
      top: 45%;
    }
    img {
      max-width: 485px;

      width: 35vw;
      align-self: flex-end;
      @media only screen and (min-width: 1024px) {
        width: 26vw;
      }
    }
  }

  div.container:nth-child(7) {
    img {
      max-width: 430px;
      width: 43vw;
      align-self: flex-end;
      @media only screen and (min-width: 1024px) {
        width: 23vw;
      }
    }
  }

  div.container:nth-child(8) {
    p {
      top: auto;
      bottom: 5%;
    }
    img {
      width: 32vw;
      align-self: flex-end;
      max-width: 425px;
      @media only screen and (min-width: 1024px) {
        width: 23vw;
      }
    }
  }

  div.container:nth-child(9) {
    margin: 2% 1%;
    display: flex;
    justify-content: center;
    p {
      top: auto;
      left: auto;
      right: -5%;
      bottom: 5%;
    }
    img {
      max-width: 595px;
      width: 80%;
      align-self: flex-end;
      @media only screen and (min-width: 1024px) {
        width: 32vw;
      }
    }
  }
`;

const PhotoGallery = () => {
  return (
    <Wrapper>
      <div className="container">
        <p>Trapani, Sicily, ITA</p>
        <img src={gallery4} alt="" />
      </div>
      <div className="container">
        <p>Ho Chi Minh City, VNM</p>
        <img src={gallery3} alt="" />
      </div>
      <div className="container">
        <p>Poznań, POL</p>
        <img src={gallery5} alt="" />
      </div>
      <div className="container">
        <p>Katowice, POL</p>
        <img src={gallery6} alt="" />
      </div>
      <div className="container">
        <p>Koh Tao Island, THA</p>
        <img src={gallery7} alt="" />
      </div>
      <div className="container">
        <p>Dubai, UAE</p>
        <img src={gallery9} alt="" />
      </div>
      <div className="container">
        <p>Wetlina, Bieszczady, POL</p>
        <img src={gallery1} alt="" />
      </div>
      <div className="container">
        <p>Marina Bay, SGP</p>
        <img src={gallery8} alt="" />
      </div>
      <div className="container">
        <p>Tatranská Lomnica, SVK</p>
        <img src={gallery2} alt="" />
      </div>
    </Wrapper>
  );
};

export default PhotoGallery;
