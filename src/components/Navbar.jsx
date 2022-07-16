// Set Any Requirements needed.


const NavigationItem = ({title, href}) => (
    <a href={href}>
        <li class="Desktop-Nav-Links"> {title} </li>
    </a>
);
var menuState = false;

const Navbar = () => {
    const collectedNavItems = [];

    // HANDLE MENU CLICK
    function collaspeMenu() {
        // Flame
        document.getElementById('menu-dot').classList.remove("menuDotHide");
        document.getElementById('menu-dot').classList.add("menuDotShow");

        document.getElementById('bar-one').classList.remove("menuTopX");
        document.getElementById('bar-one').classList.add("menuTopL");

        // Middle Bar Bar
        document.getElementById('bar-two').classList.add("menuMiddleShow");
        document.getElementById('bar-two').classList.remove("menuMiddleHide");

        //  Bottom Bar
        document.getElementById('bar-three').classList.remove("menuBottomX");
        document.getElementById('bar-three').classList.add("menuBottomL");

        document.getElementById("Mobile-Nav").classList.remove("MenuEnter");
        document.getElementById("Mobile-Nav").classList.add("MenuExit");
        
        // Shade Box for Mobile Nav
        document.getElementById('Mobile-Nav-Shade-Box').classList.remove('mobile-nav-page-transition');
        document.getElementById('Mobile-Nav-Shade-Box').classList.add('mobile-pt-exit');

        // Actual Nav
        document.getElementById("Mobile-Nav").classList.remove("mobile-nav-page-transition");

        // Mobile Nav Content
        document.getElementById('dropdown-nav-bg').classList.remove('animate__fadeInDownBig');
        document.getElementById("menuitemone").classList.remove("animate__fadeInLeft");
        document.getElementById("menuitemtwo").classList.remove("animate__fadeInLeft");
        document.getElementById("menuitemthree").classList.remove("animate__fadeInLeft");
        document.getElementById("menuitemfour").classList.remove("animate__fadeInLeft");
        document.getElementById("menuitemfive").classList.remove("animate__fadeInLeft");

        document.getElementById('altitemone').classList.remove("animate__fadeInRight");
        document.getElementById('altitemtwo').classList.remove("animate__fadeInRight");
        document.getElementById('altitemthree').classList.remove("animate__fadeInRight");
        document.getElementById('altitemfour').classList.remove("animate__fadeInRight");
        document.getElementById('altitemfive').classList.remove("animate__fadeInRight");
        menuState = false;
    }
    const menuClicked = () => { 
    if(menuState == false){
        // document.getElementById('custom-mobile-nav').style.height = "100vh;"

       // Flame
        document.getElementById('menu-dot').classList.remove("menuDotShow");
        document.getElementById('menu-dot').classList.add("menuDotHide");

        // // First Bar
        document.getElementById('bar-one').classList.remove("menuTopL");
        document.getElementById('bar-one').classList.add("menuTopX");

         // Middle Bar Bar
         document.getElementById('bar-two').classList.remove("menuMiddleShow");
         document.getElementById('bar-two').classList.add("menuMiddleHide");

        //  Bottom Bar
        document.getElementById('bar-three').classList.remove("menuBottomL");
        document.getElementById('bar-three').classList.add("menuBottomX");

        document.getElementById('Mobile-Nav-Shade-Box').classList.remove('mobile-pt-exit');
        document.getElementById('Mobile-Nav-Shade-Box').classList.add('mobile-nav-page-transition')

        setTimeout(() => {
            document.getElementById("Mobile-Nav").classList.remove("MenuExit");
            document.getElementById("Mobile-Nav").classList.add("MenuEnter");
        }, 300);


        setTimeout(() => {
            document.getElementById('dropdown-nav-bg').classList.add('animate__fadeInDown');
            document.getElementById("menuitemone").classList.add("animate__fadeInLeft");
            document.getElementById("menuitemtwo").classList.add("animate__fadeInLeft");
            document.getElementById("menuitemthree").classList.add("animate__fadeInLeft");
            document.getElementById("menuitemfour").classList.add("animate__fadeInLeft");
            document.getElementById("menuitemfive").classList.add("animate__fadeInLeft")

            document.getElementById('altitemone').classList.add("animate__fadeInRight");
            document.getElementById('altitemtwo').classList.add("animate__fadeInRight");
            document.getElementById('altitemthree').classList.add("animate__fadeInRight");
            document.getElementById('altitemfour').classList.add("animate__fadeInRight");
            document.getElementById('altitemfive').classList.add("animate__fadeInRight");
        }, 600)

        menuState = true;
    } else if( menuState == true){
        collaspeMenu()
    }
    }
    
    
    return (
        <div class="componet-wrapper">

            <nav class="Desktop-Nav Full-Width">
                <img src="../images/Caali-Logo-Single.svg" alt="Caali Logo" />
                <ul>
                <a href="#">
                    <li class="Desktop-Nav-Links">Featured</li>
                </a>
                <a href="#">
                    <li class="Dropdown-Parent Desktop-Nav-Links" id="Dropdown">Candles
                        <ul class="Dropdown-Menu">
                            <div class="Dropdown-Menu-Items">
                                <a href="#">
                                    <li>Hemp Candles</li>
                                </a>
                                <a href="#">
                                    <li>Decorative Candles</li>
                                </a>
                                <a href="#">
                                    <li>Coconut Soy Wax Candles</li>
                                </a>
                            </div>
                            <div class="Mega-Menus">
                                <a href="#Test">
                                    <div class="Mega-Menus-Item">
                                        <img src="../images/Caali-Mega-Menu-Candle.png" alt="Product Placeholder" />
                                        <p> Product Title </p>
                                    </div>
                                </a>

                                <a href="#Test">
                                    <div class="Mega-Menus-Item">
                                        <img src="../images/Caali-Mega-Menu-Candle.png" alt="Product Placeholder" />
                                        <p> Product Title </p>
                                    </div>
                                </a>

                                <a href="#Test">
                                    <div class="Mega-Menus-Item">
                                        <img src="../images/Caali-Mega-Menu-Candle.png" alt="Product Placeholder" />
                                        <p> Product Title </p>
                                    </div>
                                </a>
                                <a href="#Test">
                                    <div class="Mega-Menus-Item">
                                        <img src="../images/Caali-Mega-Menu-Candle.png" alt="Product Placeholder" />
                                        <p> Product Title </p>
                                    </div>
                                </a>
                            </div>
                        </ul>
                    </li>
                </a>
                {[
                    {
                        name: "Collections",
                        href: "#"
                    },
                    {
                        name: "Gifts",
                        href: "#"
                    },,].map((item, index) => {
                    collectedNavItems.push(item);
                    return (
                        <NavigationItem key={item + index} title={item.name} href={item.href} />
                    )})
                    }
                </ul>
            </nav>

            <nav class="Mobile-Nav">
                <img src="../images/Caali-Logo-2.svg" alt="Caali Logo" id="logo" class="animate__animated animate__fadeIn animate__delay-2s"/>
                <div class="menu-icon" id="menu-icon" onClick={menuClicked}>
                    <div class="menu-dot" id="menu-dot"></div>
                    <div class="menu-icon-bar bar-one animate__animated animate__lightSpeedInRight animate__faster" id="bar-one"></div>
                    <div class="menu-icon-bar bar-two animate__animated animate__lightSpeedInRight animate__faster " id="bar-two"></div>
                    <div class="menu-icon-bar bar-three animate__animated animate__lightSpeedInRight animate__faster" id="bar-three"></div>
                </div>
                <div id="Mobile-Nav-Shade-Box"></div>
                <ul id="Mobile-Nav" class="">
                    <img src="../images/Caali-Logo-Single.svg" alt="Caali Logo" id="dropdown-nav-bg" />
                    <a href="#">
                        <li class="Desktop-Nav-Links animate__animated" id="menuitemone"> Featured </li>
                    </a>
                    <a href="#">
                        <li class="Desktop-Nav-Links animate__animated" id="menuitemtwo"> Shop All </li>
                    </a>
                    <a href="#">
                        <li class="Desktop-Nav-Links animate__animated" id="menuitemthree"> BoHo Scents </li>
                    </a>
                    <a href="#">
                        <li class="Desktop-Nav-Links animate__animated" id="menuitemfour"> Hemp Wax </li>
                    </a>
                    <a href="#">
                        <li class="Desktop-Nav-Links animate__animated" id="menuitemfive"> Gift Boxes </li>
                    </a>
                    
                    <div class="Mobile-Nav-AltItems">
                        <a href="#">
                            <li class="animate__animated" id="altitemone"> Sign In </li>
                        </a>
                        <a href="#">
                            <li class="animate__animated" id="altitemtwo"> Our Story </li>
                        </a>
                        <a href="#">
                            <li class="animate__animated" id="altitemthree"> Need Help? </li>
                        </a>

                        <a href="#">
                            <li class="animate__animated" id="altitemfour"> Track an Order </li>
                        </a>

                        <a href="#">
                            <li class="animate__animated" id="altitemfive"> Returns & Exchanges </li>
                        </a>
                    </div>
                    
                </ul>
                
            </nav>

        </div>
    )
}

export default Navbar;