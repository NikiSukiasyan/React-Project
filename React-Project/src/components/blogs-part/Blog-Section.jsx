import "./Blog-Section.css"
import Discussion1 from "../../images/discussion1.png"
import Discussion2 from "../../images/discussion2.png"
import Discussion3 from "../../images/discussion3.png"
import ProfilePic1 from "../../images/profile1.png"
import ProfilePic2 from "../../images/profile2.png"
import ProfilePic3 from "../../images/profile3.png"
import Clock from "../../images/clock.png"

const information = [
  {
    id: 1,
    image: Discussion1,
    title: "Lorem Ipsum is ",
    text:
      "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen.",
    profilePicture: ProfilePic1,
    name: "Alex Liones",
    clockImage: Clock,
    time: "28,Aug 2020, 09:48:00"
  },
  {
    id: 2,
    image: Discussion2,
    title: "Lorem Ipsum is ",
    text:
      "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen.",
    profilePicture: ProfilePic2,
    name: "Alex Liones",
    clockImage: Clock,
    time: "28,Aug 2020, 09:48:00"
  },
  {
    id: 3,
    image: Discussion3,
    title: "Lorem Ipsum is ",
    text:
      "Lorem Ipsum is simply  text of the printing and type setting industry. make a type specimen.",
    profilePicture: ProfilePic3,
    name: "Alex Liones",
    clockImage: Clock,
    time: "28,Aug 2020, 09:48:00"
  }
];

function Blog(props) {
  return (
    <>
      <div className="blog-container">
        <h1 className="blogs-title">Our Blogs</h1>
      </div>
      <div className="blogs-box-container">
        {information.map((props) => (
          <div className="blogs-box" key={props.id}>
            <img src={props.image} alt="Discussion Photos" className="discussion-pic"/>
            <h2 className="box-title">{props.title}</h2>
            <p className="blog-text">{props.text}</p>
            <img src={props.profilePicture} alt="Profile Photos" className="profile-pic"/>
            <p className="profile-name">{props.name}</p>
            <img src={props.clockImage} alt="Clock logo" className="clock"/>
            <span className="time">{props.time}</span>
            <button>Read More</button>
          </div>
        ))}
      </div>
      <button className="view-button">View More</button>
    </>
  );
}

export default Blog;
