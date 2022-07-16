import { useState } from 'react'
import logo from './logo.svg'
import '../src/components/menu.css'
import './App.css'
import { Navbar, Footer, HomepageHero, HPFeatured, HPPLPItem, PLPItem} from './components'

function App() {
  const [count, setCount] = useState(0)
  window.addEventListener('scroll', function() {
    var currentY = window.scrollY;
    // alert(currentY);
    if(currentY >= 500){
      document.getElementById('HP-Intro-Lead-Txt').classList.add('animate__fadeInUp')
      document.getElementById('HP-Intro-Falling-Txt').classList.add('animate__fadeInUp')
      document.getElementById('HP-Intro-CTA-Txt').classList.add('animate__fadeInUp')
    }
  });

  window.addEventListener('scroll', function() {
    var currentY = window.scrollY; 
    if(currentY >= 900){ 
        document.getElementById('HPPLPCIMG1').classList.add('animate__fadeInLeft');
        document.getElementById('HPPLPCT1').classList.add('animate__fadeInRight');
        document.getElementById('HPPLPCP1').classList.add('animate__fadeInRight');
        document.getElementById('HPPLPCB1').classList.add('animate__fadeInUpBig');
        // this.alert("hey")
      }
    if(currentY >= 1200 && currentY <= 1799){ 
      document.getElementById('HPPLPCIMG2').classList.add('animate__fadeInRight');
      document.getElementById('HPPLPCT2').classList.add('animate__fadeInLeft');
      document.getElementById('HPPLPCP2').classList.add('animate__fadeInLeft');
      document.getElementById('HPPLPCB2').classList.add('animate__fadeInDownBig');
      console.log(currentY)
      // this.alert("hey")
    }
    if(currentY >= 1800){ 
      document.getElementById('HPPLPCIMG3').classList.add('animate__fadeInLeft');
      document.getElementById('HPPLPCT3').classList.add('animate__fadeInRight');
      document.getElementById('HPPLPCP3').classList.add('animate__fadeInRight');
      document.getElementById('HPPLPCB3').classList.add('animate__fadeInUpBig');
      // this.alert("hey")
    }
  })
  return (
    <div class="Main-Global-Container">
      <Navbar />
      <div class="Content-Body">
          <div class="Hero-Section Homepage-Hero">
              <img src='../images/Caali-Hero-Leaf-BG.png' id='hero-bg-img' class="animate__animated animate__fadeInRight animate__delay-1s "/>
              <div id="CTA-Content">
                  <p id='leading-hero-txt' class="animate__animated animate__fadeInDown animate__fast">Hand Poured</p>
                  <h1 id='main-hero-txt' class="animate__animated animate__fadeInUp">Luxury</h1>
                  <p id='falling-hero-txt' class="animate__animated animate__fadeInUp animate__delay-1s">From Brooklyn</p>
                  <p class="sub-hero-txt animate__animated animate__fadeInUp animate__delay-1s">Luxe Candles</p>
                  <p class="sub-hero-txt animate__animated animate__fadeInUp animate__delay-1s">Coconut Soy or Hemp Wax</p>
                  <p class="sub-hero-txt animate__animated animate__fadeInUp animate__delay-1s">50hr Burn</p>
                  <a href="#Shop" id="cta-link"> <div class="CTA animate__animated animate__zoomInUp animate__delay-1s"> Shop Now</div></a>
              </div>
          </div>
      </div>
      <div class="HP-Intro Full-Width" >
        <h3 id='HP-Intro-Lead-Txt' class='animate__animated'>Boho Luxe is a vibe</h3>
        <p id='HP-Intro-Falling-Txt' class='animate__animated'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="#" id='HP-Intro-CTA-Txt' class='animate__animated animate__delay-1s'>Learn more about Ahrianna →</a>
      </div>
      <div class="HP-Featured Full-Width"> 
        <h2 class="Sub-Heading" id='HP-Featured-SubHeading'> Featured Collection</h2>
        
        <div class="PLP-Card HP-PLP-Left" id="HPPLPC1">
            <img src="http://via.placeholder.com/400x400" id="HPPLPCIMG1" class="animate__animated"/>
            <h3 class="animate__animated Product-Title" id="HPPLPCT1" >Product Title</h3>
            <p class="animate__animated Product-Price" id="HPPLPCP1">$24.99</p>
            <a href="#"><div class="animate__animated hpplp-bttn" id="HPPLPCB1">Buy Now</div></a>

        </div>
        <div class="PLP-Card HP-PLP-Right" id="HPPLPC2">
            <img src="http://via.placeholder.com/400x400" id="HPPLPCIMG2" class="animate__animated"/>
            <h3 class="animate__animated Product-Title" id="HPPLPCT2" >Product Title</h3>
            <p class="animate__animated Product-Price" id="HPPLPCP2">$24.99</p>
            <a href="#"><div class="animate__animated hpplp-bttn" id="HPPLPCB2">Buy Now</div></a>

        </div>
        <div class="PLP-Card HP-PLP-Left" id="HPPLPC3">
            <img src="http://via.placeholder.com/400x400" id="HPPLPCIMG3" class="animate__animated"/>
            <h3 class="animate__animated Product-Title" id="HPPLPCT3" >Product Title</h3>
            <p class="animate__animated Product-Price" id="HPPLPCP3">$24.99</p>
            <a href="#"><div class="animate__animated hpplp-bttn" id="HPPLPCB3">Buy Now</div></a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
