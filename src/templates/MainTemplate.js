import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
// import debounce from "lodash.debounce";
// import {
//   headerOutAnimation,
//   headerInAnimation,
//   mainInAnimation,
//   mainOutAnimation
// } from "../animations/sectionsAnimations";

const MainTemplate = () => {
  // const [touchEnd, setTouchEnd] = useState();
  // const [touchStart, setTouchStart] = useState();

  // useEffect(
  //   debounce(() => {
  //     window.addEventListener("touchstart", e => {
  //       setTouchStart(e.changedTouches[0].clientY);
  //     });
  //     window.addEventListener("touchend", e => {
  //       setTouchEnd(e.changedTouches[0].clientY);
  //     });

  //     if (touchStart > touchEnd && touchStart - touchEnd > 30) {
  //       headerOutAnimation();
  //       mainInAnimation();
  //     } else if (touchStart < touchEnd && touchEnd - touchStart > 30) {
  //       headerInAnimation();
  //       mainOutAnimation();
  //     }
  //   }, 50),
  //   [touchEnd, touchStart]
  // );

  // useEffect(() => {
  //   if (touchEnd > 0) {
  //     setTimeout(() => {
  //       setTouchEnd();
  //       setTouchStart();
  //     }, 100);
  //   }
  // });
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default MainTemplate;
