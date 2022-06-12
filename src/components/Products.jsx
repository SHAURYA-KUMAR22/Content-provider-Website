import React from "react";
import Productbox from "./Productbox";
import pimage1 from "../images/s1.png";
import pimage2 from "../images/s2.png";

function Products() {
  return (
    <div id="products">
      <h1>CHOOSE & ENJOY</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur minima
        dolorem asperiores id? At nesciunt rerum nulla rem, velit alias quas
        voluptate ipsa enim nemo necessitatibus nam accusantium odio eum.
      </p>
      <div className="a-container"></div>
      <Productbox image={pimage1} title="Luger burger" />
      <Productbox image={pimage2} title="Le pigeon burger" />
      <Productbox image={pimage1} title="Luger burger" />
    </div>
  );
}

export default Products;
