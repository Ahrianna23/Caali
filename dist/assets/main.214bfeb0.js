import{j as c,r as m,R as h,a as u}from"./vendor.f1b182cd.js";const _=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}};_();const e=c.exports.jsx,a=c.exports.jsxs,g=({title:i,href:d})=>e("a",{href:d,children:a("li",{class:"Desktop-Nav-Links",children:[" ",i," "]})});var r=!1;const f=()=>{function i(){document.getElementById("bar-one").classList.remove("menuTopX"),document.getElementById("bar-one").classList.add("menuTopL"),document.getElementById("bar-two").classList.remove("menuMiddleHide"),document.getElementById("bar-two").classList.add("menuMiddleShow"),document.getElementById("bar-three").classList.remove("menuBottomX"),document.getElementById("bar-three").classList.add("menuBottomL"),document.getElementById("Mobile-Nav").classList.remove("MenuEnter"),document.getElementById("Mobile-Nav").classList.add("MenuExit"),document.getElementById("Mobile-Nav-Shade-Box").classList.remove("mobile-nav-page-transition"),document.getElementById("Mobile-Nav-Shade-Box").classList.add("mobile-pt-exit"),document.getElementById("Mobile-Nav").classList.remove("mobile-nav-page-transition"),document.getElementById("dropdown-nav-bg").classList.remove("animate__fadeInDownBig"),document.getElementById("menuitemone").classList.remove("animate__fadeInLeft"),document.getElementById("menuitemtwo").classList.remove("animate__fadeInLeft"),document.getElementById("menuitemthree").classList.remove("animate__fadeInLeft"),document.getElementById("menuitemfour").classList.remove("animate__fadeInLeft"),document.getElementById("menuitemfive").classList.remove("animate__fadeInLeft"),document.getElementById("altitemone").classList.remove("animate__fadeInRight"),document.getElementById("altitemtwo").classList.remove("animate__fadeInRight"),document.getElementById("altitemthree").classList.remove("animate__fadeInRight"),document.getElementById("altitemfour").classList.remove("animate__fadeInRight"),document.getElementById("altitemfive").classList.remove("animate__fadeInRight"),r=!1}const d=()=>{r==!1?(document.getElementById("bar-one").classList.remove("menuTopL"),document.getElementById("bar-one").classList.add("menuTopX"),document.getElementById("bar-two").classList.remove("menuMiddleShow"),document.getElementById("bar-two").classList.add("menuMiddleHide"),document.getElementById("bar-three").classList.remove("menuBottomL"),document.getElementById("bar-three").classList.add("menuBottomX"),document.getElementById("Mobile-Nav-Shade-Box").classList.remove("mobile-pt-exit"),document.getElementById("Mobile-Nav-Shade-Box").classList.add("mobile-nav-page-transition"),setTimeout(()=>{document.getElementById("Mobile-Nav").classList.remove("MenuExit"),document.getElementById("Mobile-Nav").classList.add("MenuEnter")},300),setTimeout(()=>{document.getElementById("dropdown-nav-bg").classList.add("animate__fadeInDown"),document.getElementById("menuitemone").classList.add("animate__fadeInLeft"),document.getElementById("menuitemtwo").classList.add("animate__fadeInLeft"),document.getElementById("menuitemthree").classList.add("animate__fadeInLeft"),document.getElementById("menuitemfour").classList.add("animate__fadeInLeft"),document.getElementById("menuitemfive").classList.add("animate__fadeInLeft"),document.getElementById("altitemone").classList.add("animate__fadeInRight"),document.getElementById("altitemtwo").classList.add("animate__fadeInRight"),document.getElementById("altitemthree").classList.add("animate__fadeInRight"),document.getElementById("altitemfour").classList.add("animate__fadeInRight"),document.getElementById("altitemfive").classList.add("animate__fadeInRight")},600),r=!0):r==!0&&i()};return a("div",{class:"componet-wrapper",children:[a("nav",{class:"Desktop-Nav Full-Width",children:[e("img",{src:"../images/Caali-Logo-Single.svg",alt:"Caali Logo"}),a("ul",{children:[e("a",{href:"#",children:e("li",{class:"Desktop-Nav-Links",children:"Featured"})}),e("a",{href:"#",children:a("li",{class:"Dropdown-Parent Desktop-Nav-Links",id:"Dropdown",children:["Candles",a("ul",{class:"Dropdown-Menu",children:[a("div",{class:"Dropdown-Menu-Items",children:[e("a",{href:"#",children:e("li",{children:"Hemp Candles"})}),e("a",{href:"#",children:e("li",{children:"Decorative Candles"})}),e("a",{href:"#",children:e("li",{children:"Coconut Soy Wax Candles"})})]}),a("div",{class:"Mega-Menus",children:[e("a",{href:"#Test",children:a("div",{class:"Mega-Menus-Item",children:[e("img",{src:"../images/Caali-Mega-Menu-Candle.png",alt:"Product Placeholder"}),e("p",{children:" Product Title "})]})}),e("a",{href:"#Test",children:a("div",{class:"Mega-Menus-Item",children:[e("img",{src:"../images/Caali-Mega-Menu-Candle.png",alt:"Product Placeholder"}),e("p",{children:" Product Title "})]})}),e("a",{href:"#Test",children:a("div",{class:"Mega-Menus-Item",children:[e("img",{src:"../images/Caali-Mega-Menu-Candle.png",alt:"Product Placeholder"}),e("p",{children:" Product Title "})]})}),e("a",{href:"#Test",children:a("div",{class:"Mega-Menus-Item",children:[e("img",{src:"../images/Caali-Mega-Menu-Candle.png",alt:"Product Placeholder"}),e("p",{children:" Product Title "})]})})]})]})]})}),[{name:"Collections",href:"#"},{name:"Gifts",href:"#"},,].map((l,s)=>e(g,{title:l.name,href:l.href},l+s))]})]}),a("nav",{class:"Mobile-Nav",children:[e("img",{src:"http://caali.co/assets/Caali-Logo-2.svg",alt:"Caali Logo",id:"logo",class:"animate__animated animate__fadeIn animate__delay-2s"}),a("div",{class:"menu-icon",id:"menu-icon",onClick:d,children:[e("div",{class:"menu-icon-bar bar-one animate__animated animate__lightSpeedInRight animate__faster",id:"bar-one"}),e("div",{class:"menu-icon-bar bar-two animate__animated animate__lightSpeedInRight animate__faster ",id:"bar-two"}),e("div",{class:"menu-icon-bar bar-three animate__animated animate__lightSpeedInRight animate__faster",id:"bar-three"})]}),e("div",{id:"Mobile-Nav-Shade-Box"}),a("ul",{id:"Mobile-Nav",class:"",children:[e("img",{src:"http://caali.co/assets/Caali-Logo-Single.svg",alt:"Caali Logo",id:"dropdown-nav-bg"}),e("a",{href:"#",children:e("li",{class:"Desktop-Nav-Links animate__animated",id:"menuitemone",children:" Featured "})}),e("a",{href:"#",children:e("li",{class:"Desktop-Nav-Links animate__animated",id:"menuitemtwo",children:" Shop All "})}),e("a",{href:"#",children:e("li",{class:"Desktop-Nav-Links animate__animated",id:"menuitemthree",children:" BoHo Scents "})}),e("a",{href:"#",children:e("li",{class:"Desktop-Nav-Links animate__animated",id:"menuitemfour",children:" Hemp Wax "})}),e("a",{href:"#",children:e("li",{class:"Desktop-Nav-Links animate__animated",id:"menuitemfive",children:" Gift Boxes "})}),a("div",{class:"Mobile-Nav-AltItems",children:[e("a",{href:"#",children:e("li",{class:"animate__animated",id:"altitemone",children:" Sign In "})}),e("a",{href:"#",children:e("li",{class:"animate__animated",id:"altitemtwo",children:" Our Story "})}),e("a",{href:"#",children:e("li",{class:"animate__animated",id:"altitemthree",children:" Need Help? "})}),e("a",{href:"#",children:e("li",{class:"animate__animated",id:"altitemfour",children:" Track an Order "})}),e("a",{href:"#",children:e("li",{class:"animate__animated",id:"altitemfive",children:" Returns & Exchanges "})})]})]})]})]})};var P=new Date,L=P.getFullYear();const I=()=>e("div",{class:"componet-wrapper",children:e("footer",{children:a("div",{class:"Max-Width",children:[a("ul",{class:"Footer-Nav",children:[e("a",{href:"#Footer",children:e("li",{children:"Contact"})}),e("a",{href:"#Footer",children:e("li",{children:"Special Order"})}),e("a",{href:"#Footer",children:e("li",{children:"Submit Suggestions"})}),e("a",{href:"#Footer",children:e("li",{children:"Shipping & Returns"})}),e("a",{href:"#Footer",children:e("li",{children:"Refund Policy"})}),e("a",{href:"#Footer",children:e("li",{children:"Privacy Policy"})}),e("a",{href:"#Footer",children:e("li",{children:"Terms of Service"})})]}),a("div",{class:"Footer-Partners",children:[e("h4",{children:"Our Partners"}),a("div",{class:"Partner",children:[e("img",{src:"https://caali.co/assets/Caali-Footer-Logo-Placeholder.png",alt:"Logo for a Caali Partner"}),e("p",{children:"Partner Name"})]}),a("div",{class:"Partner",children:[e("img",{src:"https://caali.co/assets/Caali-Footer-Logo-Placeholder.png",alt:"Logo for a Caali Partner"}),e("p",{children:"Partner Name"})]})]}),a("div",{class:"Footer-Socials",children:[e("h4",{children:"Follow Us"}),e("img",{src:"https://caali.co/assets/Caali-Social-Icons-IG.png",alt:"Logo for Instagram, Caali's Page"}),e("img",{src:"https://caali.co/assets/Caali-Social-Icons-TT.png",alt:"Logo for TikTok, Caali's Page"}),e("img",{src:"https://caali.co/assets/Caali-Social-Icons-TW.png",alt:"Logo for Twitter, Caali's Page"}),e("img",{src:"https://caali.co/assets/Caali-Social-Icons-FB.png",alt:"Logo for Facebok, Caali's Page"})]}),a("p",{class:"copyright",children:[" \xA9 ",L," Caali LLC"]})]})})});function p(){return m.exports.useState(0),window.addEventListener("scroll",function(){var i=window.scrollY;i>=400&&(document.getElementById("HP-Intro-Lead-Txt").classList.add("animate__fadeInUp"),document.getElementById("HP-Intro-Falling-Txt").classList.add("animate__fadeInUp"),document.getElementById("HP-Intro-CTA-Txt").classList.add("animate__fadeInUp"))}),window.addEventListener("scroll",function(){var i=window.scrollY;i>=900&&(document.getElementById("HPPLPCIMG1").classList.add("animate__fadeInLeft"),document.getElementById("HPPLPCT1").classList.add("animate__fadeInRight"),document.getElementById("HPPLPCP1").classList.add("animate__fadeInRight"),document.getElementById("HPPLPCB1").classList.add("animate__fadeInUpBig")),i>=1200&&i<=1799&&(document.getElementById("HPPLPCIMG2").classList.add("animate__fadeInRight"),document.getElementById("HPPLPCT2").classList.add("animate__fadeInLeft"),document.getElementById("HPPLPCP2").classList.add("animate__fadeInLeft"),document.getElementById("HPPLPCB2").classList.add("animate__fadeInDownBig"),console.log(i)),i>=1800&&(document.getElementById("HPPLPCIMG3").classList.add("animate__fadeInLeft"),document.getElementById("HPPLPCT3").classList.add("animate__fadeInRight"),document.getElementById("HPPLPCP3").classList.add("animate__fadeInRight"),document.getElementById("HPPLPCB3").classList.add("animate__fadeInUpBig"))}),a("div",{class:"Main-Global-Container",children:[e(f,{}),e("div",{class:"Content-Body",children:a("div",{class:"Hero-Section Homepage-Hero",children:[e("img",{src:"http://caali.co/assets/Caali-Hero-Leaf-BG.png",id:"hero-bg-img",class:"animate__animated animate__fadeInRight animate__delay-1s "}),a("div",{id:"CTA-Content",children:[e("p",{id:"leading-hero-txt",class:"animate__animated animate__fadeInDown animate__fast",children:"Hand Poured"}),e("h1",{id:"main-hero-txt",class:"animate__animated animate__fadeInUp",children:"Luxury"}),e("p",{id:"falling-hero-txt",class:"animate__animated animate__fadeInUp animate__delay-1s",children:"From Brooklyn"}),e("p",{class:"sub-hero-txt animate__animated animate__fadeInUp animate__delay-1s",children:"Luxe Candles"}),e("p",{class:"sub-hero-txt animate__animated animate__fadeInUp animate__delay-1s",children:"Coconut Soy or Hemp Wax"}),e("p",{class:"sub-hero-txt animate__animated animate__fadeInUp animate__delay-1s",children:"50hr Burn"}),a("a",{href:"#Shop",id:"cta-link",children:[" ",e("div",{class:"CTA animate__animated animate__zoomInUp animate__delay-1s",children:" Shop Now"})]})]})]})}),a("div",{class:"HP-Intro Full-Width",children:[e("h3",{id:"HP-Intro-Lead-Txt",class:"animate__animated",children:"Boho Luxe is a vibe"}),e("p",{id:"HP-Intro-Falling-Txt",class:"animate__animated",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("a",{href:"#",id:"HP-Intro-CTA-Txt",class:"animate__animated animate__delay-1s",children:"Learn more about Ahrianna \u2192"})]}),a("div",{class:"HP-Featured Full-Width",children:[e("h2",{class:"Sub-Heading",id:"HP-Featured-SubHeading",children:" Featured Collection"}),a("div",{class:"PLP-Card HP-PLP-Left",id:"HPPLPC1",children:[e("img",{src:"http://via.placeholder.com/400x400",id:"HPPLPCIMG1",class:"animate__animated"}),e("h3",{class:"animate__animated Product-Title",id:"HPPLPCT1",children:"Product Title"}),e("p",{class:"animate__animated Product-Price",id:"HPPLPCP1",children:"$24.99"}),e("a",{href:"#",children:e("div",{class:"animate__animated hpplp-bttn",id:"HPPLPCB1",children:"Buy Now"})})]}),a("div",{class:"PLP-Card HP-PLP-Right",id:"HPPLPC2",children:[e("img",{src:"http://via.placeholder.com/400x400",id:"HPPLPCIMG2",class:"animate__animated"}),e("h3",{class:"animate__animated Product-Title",id:"HPPLPCT2",children:"Product Title"}),e("p",{class:"animate__animated Product-Price",id:"HPPLPCP2",children:"$24.99"}),e("a",{href:"#",children:e("div",{class:"animate__animated hpplp-bttn",id:"HPPLPCB2",children:"Buy Now"})})]}),a("div",{class:"PLP-Card HP-PLP-Left",id:"HPPLPC3",children:[e("img",{src:"http://via.placeholder.com/400x400",id:"HPPLPCIMG3",class:"animate__animated"}),e("h3",{class:"animate__animated Product-Title",id:"HPPLPCT3",children:"Product Title"}),e("p",{class:"animate__animated Product-Price",id:"HPPLPCP3",children:"$24.99"}),e("a",{href:"#",children:e("div",{class:"animate__animated hpplp-bttn",id:"HPPLPCB3",children:"Buy Now"})})]})]}),e(I,{})]})}h.render(e(u.StrictMode,{children:e(p,{})}),document.getElementById("root"));