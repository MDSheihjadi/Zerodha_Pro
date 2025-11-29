import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row align-items-center text-center mt-5 p-5 ">
        <h1> Technology</h1>
        <h3 className="text-muted mt-3">
          Sleek,modern and intutive trading platforms
        </h3>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings &#x2192;
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
