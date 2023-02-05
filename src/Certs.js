import React, { useState } from "react";

export default function CertificateImgs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  const images = [
    require("./assets/images/htmlcert.png"),
    require("./assets/images/reactcert.png"),
    require("./assets/images/expresscert.png"),
    require("./assets/images/csscert.png"),
    require("./assets/images/nodecert.png"),
  ];

  function handleNextClick() {
    setTransition(true);
    setTimeout(() => {
      setTransition(false);
      setCurrentIndex(
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, 500);
  }

  function handlePrevClick() {
    setTransition(true);
    setTimeout(() => {
      setTransition(false);
      setCurrentIndex(
        currentIndex === 0 ? images.length - 1 : currentIndex - 1
      );
    }, 500);
  }

  return (
    <div className="certs">
      <div className="row">
        <div className="col-sm-2">
          <h2 className="cert-h2">Certs</h2>
        </div>
        <div className="col-lg-8">
          <div className="slideshow">
            <button onClick={handlePrevClick}>Prev</button>
            <img
              src={images[currentIndex]}
              alt=""
              className={transition ? "transition" : ""}
            />
            <button onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
