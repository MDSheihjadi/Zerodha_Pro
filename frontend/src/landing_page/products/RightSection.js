import React from "react";

function RightSection({imageURL, productName, productDescription, LearnMore}) {
  return (
  <div className="container border-bottom mb-3">
      <div className="row align-items-center">
        <div className="col-6 p-5 mt-2">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-3 mb-1 p-5">
            <a href={LearnMore} style={{ marginLeft: "50px" }}>
              LearnMore &#x2192;
            </a>
          </div>
        </div>
        <div className="col-6 p-4">
          <img src={imageURL} className="p-5" />
        </div>
      </div>
    </div>
);
}


export default RightSection;
