import React from "react";
import "./Testimonials.css";
import FirstProfile from "../../images/1profile.png"
import SecondProfile from "../../images/2profile.png"
import ThirdProfile from "../../images/3profile.png"
import FourthProfile from "../../images/4profile.png"
import FifthProfile from "../../images/5profile.png"
import Dots from "../../images/dots.png"


function Testimonials() {
  return (
    <>    
    <section className="testimonials">
    <h1 className="title">Our Testimonials</h1>
    </section>
    <div className="profile-container">
      <img src={FourthProfile} alt="Fourth Profile"/>
      <img src={FifthProfile} alt="Fifth Profile"/>
      <img src={FirstProfile} alt="First Profile" className="first-profile"/>
      <img src={SecondProfile} alt="Second Profile" />
      <img src={ThirdProfile} alt="Third Profile"/>
      <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,</p>
    </div>
    <div className="text-container">
      <p>Jenny Wilson |</p>
      <span> Digital Agency</span>
      <img src={Dots} alt="Three Dots" className="dot"/>
    </div>
  </>

  );
}

export default Testimonials;