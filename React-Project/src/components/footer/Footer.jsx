import "./Footer.css"
import Map from "../../images/map.png"
import Logo from "../../images/firm.png"
import Facebook from "../../images/facebook.png"
import Twitter from "../../images/twitter.png"
import Youtube from "../../images/youtube.png"
import Linkedln from "../../images/linkedln.png"
import Printerest from "../../images/printerest.png"

function Footer() {
 return <>
 <footer>
    <img src={Map} alt="Tbilisi Map" className="map-image"/>
    <div className="submit-box">
        <h2>Get in Touch</h2>
        <div className="form-container">
            <form>
                <label htmlFor="name" className="name-label">Name</label>
                <input type="text" placeholder="Lorem Ipsum" className="name"/>
                <label htmlFor="email" className="email-label">Email</label>
                <input type="email" className="email" placeholder="LoremIpusum@mail.com"/>
                <label htmlFor="phone" className="phone-num">Phone</label>
                <input type="number" placeholder="+0 968 856 1524" className="phone"/>
                <label htmlFor="subject" className="subject-label">Subject</label>
                <input type="text" className="subject" placeholder="Choose your subject"/>
            </form>
            <button className="submit-btn">Submit</button>
        </div>
    </div>
    <div className="logo-box">
    <img src={Logo} alt="The Firm Logo" />
    </div>
    <div className="li-container">
      <ul>
        <li>Home</li>
        <li>Solutions</li>
        <li>Cases</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div className="logo-container">
        <img src={Facebook} alt="Facebook Logo" />
        <img src={Twitter} alt="Twitter Logo" />
        <img src={Youtube} alt="Youtube Logo" />
        <img src={Linkedln} alt="Linkedln Logo" />
        <img src={Printerest} alt="Printerest Logo" />
    </div>
    <span className="rights">Copyrights ©2020 Thefirm. All Right Reserved</span>
 </footer>
 </>   
}

export default Footer;

