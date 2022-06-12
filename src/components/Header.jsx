import React from "react";

function Header() {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>its great time for a good taste of burger</h3>
        <h1>
          <span>BURGER</span>FOR <br />
          WEEK
        </h1>
        <p className="details">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          sint laudantium laboriosam at id facilis placeat? A, rem est tenetur
          praesentium dolores totam. Aliquid, quod qui soluta nulla a repellat.
        </p>
        <div className="header-btns">
          <a href="http://localhost:9999/" className="header-btn">
            Register for updates
          </a> 
          
        </div>
      </div>
    </div>
  );
}

export default Header;
