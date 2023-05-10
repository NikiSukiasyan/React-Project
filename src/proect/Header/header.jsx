import "./Header.css";
import image from "../../img/people.png";
import windows from "../../img/windows.png";
import google from "../../img/google.png";
import firefox from "../../img/firefox.png";
import safari from "../../img/safari.png";
import coach from "../../img/coach.png";
import partner from "../../img/partner.png";
import ceo from "../../img/ceo.png";
import logo from "../../img/logo.jpg";
import img from "../../img/image.jpg";

function Header() {
   return ( 
   <header>
      <img src= {logo} alt="" class = "logo" />
         <nav>
            <ul>
               <li>home</li>
               <li>solutions</li>
               <li>cases</li>
               <li>about us</li>
               <li>blog</li>
               <li>contact us</li>
            </ul>
         </nav>
      <div><h1>Get Bussiness <span>Solutions with The Firm</span></h1>
         <p class = "p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
         
         <img src= {image} alt="people" class = "image" />
         </div>
         <div>
            <h2>our partner</h2>
            <div class = "flex">
               <div class = "greybox">
                  <img src={windows} alt="" />
               </div>
               <div class = "greybox">
                  <img src={google} alt="" />
               </div>
               <div class = "greybox">
                  <img src={firefox} alt="" />
               </div>
               <div class = "greybox">
                  <img src={safari} alt="" />
               </div>
            </div>
         </div>
         <div class = "box">
            <h3>Frustration of Clients</h3>
            <p class = "text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <p class = "paragraph">Loren rasion gravida auem is bibenua tase</p>
            <p class = "paragraph">Lorem Ipsum is simply dummy text of the.</p>
            <p class = "paragraph">Printing and typesetting industry. Lorem Ipsum</p>
            <p class = "paragraph">When an unknown printer took a galley of type and scrambled it</p>
            <img src={img} alt="" class="absolute"/>
         </div>
         <div>
            <div>
               <div class = "whitebox">
                  <img src={coach} alt="" class = "photo" />
                  <h5>coaching</h5>
                  <p>Loren rasion gravida auem is bibenua tase</p>
               </div>
               <div class = "white-box">
                  <img src={partner} alt="" class = "photo" />
                  <h5>digital partner</h5>
                  <p>Loren rasion gravida auem is bibenua tase</p>
               </div>
               <div class = "white-container">
                  <img src={ceo} alt="" class = "photo"/>
                  <h5>ceo</h5>
                  <p>Loren rasion gravida auem is bibenua tase</p>
               </div>
            </div>
            <h4>Perfect Solution for Your Bussiness </h4>
            <p class = "solution">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
         </div>
      </header>

         
   )
   
}


export default Header;
