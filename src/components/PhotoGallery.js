import React from "react";
import styled from "styled-components";
import gallery1 from "../img/gallery1.jpg";
import gallery2 from "../img/gallery2.jpg";
import gallery3 from "../img/gallery3.jpg";
import gallery4 from "../img/gallery4.jpg";
import gallery5 from "../img/gallery5.jpg";
import gallery6 from "../img/gallery6.jpg";
import gallery7 from "../img/gallery7.jpg";
import gallery8 from "../img/gallery8.jpg";
import gallery9 from "../img/gallery9.jpg";

const Wrapper = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  @media only screen and (min-width: 1024px) {
    margin: 40px 0 20px;
  }
  img {
    margin: 2% 3%;
    width: 35%;
    align-self: center;
    @media only screen and (min-width: 1024px) {
      width: 22%;
    }
  }
  img:nth-child(2) {
    width: 45%;
    @media only screen and (min-width: 1024px) {
      width: 26%;
    }
  }
  img:nth-child(3) {
    width: 35%;
    align-self: center;
    @media only screen and (min-width: 1024px) {
      width: 22%;
    }
  }
  img:nth-child(4) {
    width: 40%;
    @media only screen and (min-width: 1024px) {
      width: 20%;
    }
  }
  img:nth-child(5) {
    width: 40%;
    @media only screen and (min-width: 1024px) {
      width: 22%;
    }
  }
  img:nth-child(6) {
    width: 35%;
    align-self: flex-end;
    @media only screen and (min-width: 1024px) {
      width: 26%;
    }
  }
  img:nth-child(7) {
    width: 35%;
    align-self: flex-end;
    @media only screen and (min-width: 1024px) {
      width: 23%;
    }
  }
  img:nth-child(8) {
    width: 35%;
    align-self: flex-end;
    @media only screen and (min-width: 1024px) {
      width: 32%;
    }
  }
  img:nth-child(9) {
    width: 35%;
    align-self: flex-end;
    @media only screen and (min-width: 1024px) {
      width: 26%;
    }
  }
`;

const PhotoGallery = () => {
  return (
    <Wrapper>
      <img src={gallery4} alt="" />
      <img src={gallery3} alt="" />
      <img src={gallery5} alt="" />
      <img src={gallery6} alt="" />
      <img src={gallery7} alt="" />
      <img src={gallery9} alt="" />
      <img src={gallery1} alt="" />
      <img src={gallery2} alt="" />
      <img src={gallery8} alt="" />
    </Wrapper>
  );
};

export default PhotoGallery;
