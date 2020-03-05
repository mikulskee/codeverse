import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute } from "@fortawesome/free-solid-svg-icons";
import gallery1 from "../img/gallery1_1.jpg";
import gallery2 from "../img/gallery2_1.jpg";
import gallery3 from "../img/gallery3_1.jpg";
import gallery4 from "../img/gallery4_1.jpg";
import gallery5 from "../img/gallery5_1.jpg";
import gallery6 from "../img/gallery6_1.jpg";
import gallery7 from "../img/gallery7_1.jpg";
import gallery8 from "../img/gallery8_1.jpg";
import gallery9 from "../img/gallery9_1.jpg";

const Wrapper = styled.ul`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  @media only screen and (min-width: 1024px) {
    margin: 40px 0 20px;
  }

  li {
    margin: 3% 2%;
    position: relative;
    @media only screen and (min-width: 1024px) {
      margin: 2% 3%;
    }

    a.container {
      display: flex;
      /* visibility: hidden; */
      @media only screen and (min-width: 1024px) {
        &:hover img {
          opacity: 0.5 !important;
        }
        &:hover svg {
          opacity: 1;
        }
      }

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #f2f2f2;
        font-size: 96px;
        transition: opacity 0.2s linear;
        opacity: 0;
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
        z-index: 1;
        visibility: hidden;

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
        transition: opacity 0.2s linear;
        visibility: hidden;
        @media only screen and (min-width: 1024px) {
          width: 24vw;
        }
      }
    }
  }

  li:nth-child(2) a.container {
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

  li:nth-child(3) a.container {
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

  li:nth-child(4) a.container {
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
  li:nth-child(5) a.container {
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
  li:nth-child(6) a.container {
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

  li:nth-child(7) a.container {
    img {
      max-width: 430px;
      width: 43vw;
      align-self: flex-end;
      @media only screen and (min-width: 1024px) {
        width: 23vw;
      }
    }
  }

  li:nth-child(8) a.container {
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

  li:nth-child(9) a.container {
    margin: 2% 1%;
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

const photos = [
  {
    name: "Trapani, Sicily, ITA",
    link:
      "https://www.google.com/maps/place/91100+Trapani,+Province+of+Trapani,+Italy/@38.0173813,12.4685625,12z/data=!3m1!4b1!4m5!3m4!1s0x1319622fd6a4905f:0x8bf1debcf9983482!8m2!3d38.0173505!4d12.5365171",
    image: gallery4
  },
  {
    name: "Ho Chi Minh City, VNM",
    link:
      "https://www.google.com/maps/place/Ho+Chi+Minh+City,+Vietnam/@10.7546664,106.415032,10z/data=!3m1!4b1!4m5!3m4!1s0x317529292e8d3dd1:0xf15f5aad773c112b!8m2!3d10.8230989!4d106.6296638",
    image: gallery3
  },
  {
    name: "Poznań, POL",
    link:
      "https://www.google.com/maps/place/Old+Market+Square/@52.407481,16.918882,15z/data=!4m8!1m2!2m1!1spoznan+main+square!3m4!1s0x47045b39cf647505:0xf56a159b8104f7d5!8m2!3d52.4081131!4d16.9336713",
    image: gallery5
  },
  {
    name: "Katowice, POL",
    link:
      "https://www.google.com/maps/place/Wie%C5%BCa+wodna+przy+ul.+Korczaka+w+Katowicach/@50.273701,19.0823524,15z/data=!4m5!3m4!1s0x4716d01bf950d965:0xadd264cb51c76ae!8m2!3d50.274269!4d19.087436",
    image: gallery6
  },
  {
    name: "Koh Tao Island, THA",
    link:
      "https://www.google.com/maps/place/Ko+Tao/@10.0922767,99.8003846,13z/data=!3m1!4b1!4m5!3m4!1s0x3055a1c0322e70e7:0x8ad5f354bb6e5341!8m2!3d10.0956102!4d99.8403959",
    image: gallery7
  },
  {
    name: "Dubai, UAE",
    link:
      "https://www.google.com/maps/place/Dubai+Marina/@25.0832675,55.1220605,14z/data=!3m1!4b1!4m5!3m4!1s0x3e5f6b5402c126e3:0xb9511e6655c46d7c!8m2!3d25.0805422!4d55.1403426",
    image: gallery9
  },
  {
    name: "Wetlina, Bieszczady, POL",
    link:
      "https://www.google.com/maps/place/38-608+Wetlina/@49.1433593,22.4672609,14z/data=!3m1!4b1!4m5!3m4!1s0x473be24226efaaaf:0xdc149aa99c511a12!8m2!3d49.1433611!4d22.4847705",
    image: gallery1
  },
  {
    name: "Marina Bay, SGP",
    link:
      "https://www.google.com/maps/place/Sands+Expo+%26+Convention+Centre/@1.2828506,103.8566133,17.54z/data=!4m13!1m7!3m6!1s0x31da11238a8b9375:0x887869cf52abf5c4!2sSingapore!3b1!8m2!3d1.352083!4d103.819836!3m4!1s0x31da1905a913542d:0x81a3ad206e972c35!8m2!3d1.2830247!4d103.8578669",
    image: gallery8
  },
  {
    name: "Tatranská Lomnica, SVK",
    link:
      "https://www.google.com/maps/place/Skalnat%C3%A1+dolina/@49.1925946,20.208177,13z/data=!4m13!1m7!3m6!1s0x473e225555124b75:0x9473dd3ea67a4444!2sTatransk%C3%A1+Lomnica,+059+60+Vysok%C3%A9+Tatry,+Slovakia!3b1!8m2!3d49.1644992!4d20.2822798!3m4!1s0x473e2226714c1d53:0xe8357aaefb40d0f0!8m2!3d49.1885757!4d20.2300787",
    image: gallery2
  }
];

const PhotoGallery = () => {
  const content = photos.map(photo => (
    <li key={photo.name}>
      <a className="container fade-in-container" href={photo.link}>
        <p className="first-element-fade-in">{photo.name}</p>
        <img
          className="second-element-fade-in"
          src={photo.image}
          alt={photo.name}
        />{" "}
        <FontAwesomeIcon icon={faRoute} />
      </a>
    </li>
  ));
  return <Wrapper className="photo-gallery">{content}</Wrapper>;
};

export default PhotoGallery;
