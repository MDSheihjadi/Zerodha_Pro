import React from "react";
//use of the props
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  LearnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container border-bottom mb-3">
      <div className="row align-items-center text-center ">
        <div className="col-md-5 p-4">
          <img src={imageURL} className="p-5" />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6 p-5 mt-2">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-3 mb-1 p-5">
            <a href={tryDemo}>Try Demo &#x2192;</a>
            <a href={LearnMore} style={{ marginLeft: "50px" }}>
              LearnMore &#x2192;
            </a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="images\googlePlayBadge.svg" />
              {/* googlePlay */}
            </a>
            <a href={appStore}>
              <img
                src="images\appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
              {/* appStore */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
