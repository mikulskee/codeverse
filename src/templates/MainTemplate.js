import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import debounce from "lodash.debounce";

const MainTemplate = () => {
  const [touchEnd, setTouchEnd] = useState();
  const [touchStart, setTouchStart] = useState();

  useEffect(() => {
    window.addEventListener(
      "wheel",
      debounce(e => {
        if (e.deltaY > 0) {
          document.querySelector("header").classList.add("active");
          document.querySelector(".bg-front").classList.add("active");
          document.querySelector("main").classList.add("active");
        } else {
          document.querySelector("header").classList.remove("active");
          document.querySelector("main").classList.remove("active");
          document.querySelector(".bg-front").classList.remove("active");
        }
      }, 50)
    );
  }, []);
  useEffect(
    debounce(() => {
      window.addEventListener("touchstart", e => {
        setTouchStart(e.changedTouches[0].clientY);
      });
      window.addEventListener("touchend", e => {
        setTouchEnd(e.changedTouches[0].clientY);
      });

      if (touchStart > touchEnd) {
        document.querySelector("header").classList.add("active");
        document.querySelector("main").classList.add("active");
        document.querySelector(".bg-front").classList.add("active");
      } else {
        document.querySelector("header").classList.remove("active");
        document.querySelector("main").classList.remove("active");
        document.querySelector(".bg-front").classList.remove("active");
      }
    }, 50),
    [touchEnd, touchStart]
  );
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default MainTemplate;
