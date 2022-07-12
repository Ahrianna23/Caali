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

        document.getElementById("Mobile-Nav").classList.remove("MenuExit");
        document.getElementById("Mobile-Nav").classList.add("MenuEnter");

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
                <img src="../images/Caali-Logo-Single.svg" alt="Caali Logo" />
                <div class="menu-icon" id="menu-icon" onClick={menuClicked}>
                    <div class="menu-dot" id="menu-dot"></div>
                    <div class="menu-icon-bar bar-one" id="bar-one"></div>
                    <div class="menu-icon-bar bar-two" id="bar-two"></div>
                    <div class="menu-icon-bar bar-three" id="bar-three"></div>
                </div>
                <ul id="Mobile-Nav">
                <img src="../images/Caali-Leaf-Image-Menu.svg" alt="Caali Leaf Graphic for Mobile Menu" />
                    {[
                    {
                        name: "Featured",
                        href: "#",
                        classes: ""
                    },
                    {
                        name: "All Candles",
                        href: "#",
                        classes: ""
                    },
                    {
                        name: "Decorative Candles",
                        href: "#",
                        classes: ""
                    },
                    {
                        name: "Hemp Candles",
                        href: "#",
                        classes: ""
                    },
                    {
                        name: "Coconut Soy Wax Candles",
                        href: "#",
                        classes: ""
                    },
                    {
                        name: "Collections",
                        href: "#",
                        classes: ""
                    },
                    {
                        name: "Gifts",
                        href: "#",
                        classes: ""
                    },].map((item, index) => {
                    collectedNavItems.push(item);
                    return (
                        <NavigationItem key={item + index} title={item.name} href={item.href} class={item.classes} />
                    )})
                    }
                    <div class="Mobile-Nav-AltItems">
                        <a href="#">
                            <li class=""> About </li>
                        </a>
                        <a href="#">
                            <li class=""> News </li>
                        </a>
                        <a href="#">
                            <li class=""> FAQ </li>
                        </a>

                        <a href="#">
                            <li class=""> Coming Soon! </li>
                        </a>

                        <a href="#">
                            <li class=""> Returns & Exchanges </li>
                        </a>
                    </div>
                    
                </ul>
                
            </nav>

        </div>
    )
}

export default Navbar;