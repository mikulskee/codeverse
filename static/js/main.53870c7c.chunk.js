(this["webpackJsonpcodeverse.pl"]=this["webpackJsonpcodeverse.pl"]||[]).push([[0],{16:function(e,n,t){e.exports=t.p+"static/media/bg_back.d1f5b0bd.png"},17:function(e,n,t){e.exports=t.p+"static/media/logo.07f25ba9.png"},33:function(e,n,t){e.exports=t(44)},38:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),r=t(15),c=t.n(r),i=(t(38),t(12)),s=t(3),l=t(4),u=t(16),d=t.n(u),m=t(6),f=t.n(m),p=t(17),h=t.n(p),v=t(18),g=t(21),b=t(24),w=t(0);function y(){var e=Object(s.a)(['\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(calc(-50% + 20px));\n  color: #f2f2f2;\n  font-size: 30px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n\n  svg {\n    transform: translateY(0) rotate(-115deg);\n  }\n\n  div.line-icon {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    content: "";\n    display: block;\n    width: 2px;\n    height: 0%;\n    background-color: #fff;\n    background: linear-gradient(-45deg, #fff, rgba(0, 0, 255, 0));\n    filter: drop-shadow(0 0 6px #699bff);\n  }\n']);return y=function(){return e},e}var E=l.a.div(y()),x=function(){return Object(a.useEffect)((function(){!function(){var e=document.querySelector(".hand-icon"),n=document.querySelector(".line-icon"),t=document.querySelector(".icon-container");b.a.timeline({repeat:-1}).from(t,{duration:.4,opacity:0,delay:1.5}).to(e,{duration:1.5,y:-30,ease:w.b.easeOut}).to(n,{duration:1.5,height:"74%"},"-=1.5").to(t,{duration:.25,opacity:0})}()}),[]),o.a.createElement(E,{className:"icon-container"},o.a.createElement(v.a,{className:"hand-icon",icon:g.a}),o.a.createElement("div",{className:"line-icon"}))};function k(){var e=Object(s.a)(['\n  display: block;\n  color: #f2f2f2;\n  font-family: "Montserrat", sans-serif;\n  font-weight: bold;\n  font-size: 20px;\n  width: 250px;\n  line-height: 1.8;\n  transform: translateY(-80px);\n\n  span {\n    color: #f2f2f2;\n    font-family: "Montserrat", sans-serif;\n    font-weight: bold;\n    font-size: 20px;\n  }\n\n  span.yellow {\n    color: #ebe483;\n  }\n  span.design {\n    font-family: "Courgette", cursive;\n    font-weight: 500;\n  }\n  span.develop {\n    font-family: "Share Tech Mono", monospace;\n    font-weight: 500;\n  }\n']);return k=function(){return e},e}function S(){var e=Object(s.a)(["\n  /* position: absolute; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  /* top: 0;\n  left: 0; */\n  transform: translateY(0);\n  height: 100vh;\n  height: calc(var(--vh, 1vh) * 100);\n  width: 100vw;\n  opacity: 1;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  transition: transform 0.5s ease-out, opacity 0.5s ease-out;\n\n  .bg-front {\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: translateY(0);\n    height: 100vh;\n    height: calc(var(--vh, 1vh) * 100);\n    width: 100vw;\n    background-image: url(",");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    transition: transform 0.5s ease-out;\n\n    &.active {\n      transform: translateY(-30%);\n    }\n  }\n\n  &.active {\n    transform: translateY(-15%);\n\n    opacity: 0;\n  }\n\n  img {\n    position: absolute;\n    top: 20px;\n    left: 20px;\n    width: 105px;\n  }\n"]);return S=function(){return e},e}var L=l.a.header(S(),d.a,f.a),j=l.a.p(k()),q=function(){return o.a.createElement(L,{className:"header"},o.a.createElement("div",{className:"bg-front",src:f.a}),o.a.createElement("div",{className:"bg-mask"}),o.a.createElement("img",{src:h.a,alt:""}),o.a.createElement(j,{className:"main-description"},"Hi, my name is ",o.a.createElement("span",{className:"yellow"},"Mateusz Mikulski")," ",o.a.createElement("br",null)," ","i ",o.a.createElement("span",{className:"design"},"design")," and"," ",o.a.createElement("span",{className:"develop"},"develop")," websites"),o.a.createElement(x,null))};function O(){var e=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translateY(100%);\n  height: 100vh;\n  height: calc(var(--vh, 1vh) * 100);\n  width: 100vw;\n  background-color: #040519;\n  transition: transform 0.6s ease-out;\n  h1 {\n    color: #e7e7e7;\n  }\n  &.active {\n    transform: translateY(0);\n  }\n"]);return O=function(){return e},e}var N=l.a.main(O()),Y=function(){return o.a.createElement(N,{className:"main"},o.a.createElement("h1",null,"{ Projects }"))},z=t(11),M=t.n(z),H=function(){var e=Object(a.useState)(),n=Object(i.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(),s=Object(i.a)(c,2),l=s[0],u=s[1];return Object(a.useEffect)((function(){window.addEventListener("wheel",M()((function(e){e.deltaY>0?(document.querySelector("header").classList.add("active"),document.querySelector(".bg-front").classList.add("active"),document.querySelector("main").classList.add("active")):(document.querySelector("header").classList.remove("active"),document.querySelector("main").classList.remove("active"),document.querySelector(".bg-front").classList.remove("active"))}),50))}),[]),Object(a.useEffect)(M()((function(){window.addEventListener("touchstart",(function(e){u(e.changedTouches[0].clientY)})),window.addEventListener("touchend",(function(e){r(e.changedTouches[0].clientY)})),l>t?(document.querySelector("header").classList.add("active"),document.querySelector("main").classList.add("active"),document.querySelector(".bg-front").classList.add("active")):(document.querySelector("header").classList.remove("active"),document.querySelector("main").classList.remove("active"),document.querySelector(".bg-front").classList.remove("active"))}),50),[t,l]),o.a.createElement(o.a.Fragment,null,o.a.createElement(q,null),o.a.createElement(Y,null))},P=function(){return Object(a.useEffect)((function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px")),window.addEventListener("resize",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))})),window.addEventListener("orientationchange",(function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}))})),o.a.createElement(H,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,n,t){e.exports=t.p+"static/media/bg_front.d0b398e5.png"}},[[33,1,2]]]);
//# sourceMappingURL=main.53870c7c.chunk.js.map