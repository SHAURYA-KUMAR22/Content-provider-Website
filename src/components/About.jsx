import React from "react";
import aboutImage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          nobis ut sit dolorem recusandae vel a consequatur expedita cumque
          quaerat, quo hic voluptatum praesentium voluptatibus! Distinctio, sit!
          Dolorem, provident iure.
        </p>
        <button>Read More</button>
      </div>

      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
    </div>
  );
}

export default About;
