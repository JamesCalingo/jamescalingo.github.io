/* eslint-disable react/no-unescaped-entities */
import profilePic from "../assets/images/picture-of-me.jpg";

function Landing() {
  return (
    <div id="landing">
      <div className="slide">
        <p id="tagline">
          "Technology is the light that can cut through the darkness."
        </p>
      </div>
      <div className="">
        <h1>Hello world!</h1>
        <div className="intro">
          <img
            src={profilePic}
            className="img-thumbnail profile-pic"
            alt="James Calingo (aka me)"
          />
          <p>My name is James Calingo and I am a software engineer.</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
