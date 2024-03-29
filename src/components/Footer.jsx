// Set Any Requirements needed.


const FooterNavigationItems = ({title, href}) => (
    <a href={href}>
        <li class="Desktop-Nav-Links"> {title} </li>
    </a>
);
var date = new Date();
var year = date.getFullYear()
const Footer = () => {
    
    return (
        <div class="componet-wrapper">
            <footer>
                <div class="Max-Width">
                    <ul class="Footer-Nav">
                        <a href="#Footer">
                            <li>
                                Contact
                            </li>
                        </a>
                        <a href="#Footer">
                            <li>
                                Special Order
                            </li>
                        </a>
                        <a href="#Footer">
                            <li>
                                Submit Suggestions
                            </li>
                        </a>
                        <a href="#Footer">
                            <li>
                                Shipping & Returns
                            </li>
                        </a>
                        <a href="#Footer">
                            <li>
                                Refund Policy
                            </li>
                        </a>
                        <a href="#Footer">
                            <li>
                                Privacy Policy
                            </li>
                        </a>
                        <a href="#Footer">
                            <li>
                                Terms of Service
                            </li>
                        </a>
                    </ul>

                    <div class="Footer-Partners">
                        <h4>Our Partners</h4>
                        <div class="Partner">
                            <img src="https://caali.co/assets/Caali-Footer-Logo-Placeholder.png" alt="Logo for a Caali Partner" />
                            <p>Partner Name</p>
                        </div>
                        <div class="Partner">
                            <img src="https://caali.co/assets/Caali-Footer-Logo-Placeholder.png" alt="Logo for a Caali Partner" />
                            <p>Partner Name</p>
                        </div>
                    </div>
                    
                    <div class="Footer-Socials">
                        <h4>Follow Us</h4>
                        <img src="https://caali.co/assets/Caali-Social-Icons-IG.png" alt="Logo for Instagram, Caali's Page" />
                        <img src="https://caali.co/assets/Caali-Social-Icons-TT.png" alt="Logo for TikTok, Caali's Page" />
                        <img src="https://caali.co/assets/Caali-Social-Icons-TW.png" alt="Logo for Twitter, Caali's Page" />
                        <img src="https://caali.co/assets/Caali-Social-Icons-FB.png" alt="Logo for Facebok, Caali's Page" />
                    </div>
                    <p class="copyright"> &copy; {year } Caali LLC</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;