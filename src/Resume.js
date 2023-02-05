import React, { useState, useEffect } from "react";

export default function Resume() {
  const whiteStyle = {
    color: "white",
  };
  const [color, setColor] = useState();
  const [text, setText] = useState("Download");
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    if (downloaded) {
      setColor(whiteStyle);
      setText("downloaded");
    }
  }, [downloaded]);

  function handleClick() {
    setDownloaded(true);
  }

  return (
    <div id="resume" className="row">
      <div className="col-sm-2">
        <h2> Resume </h2>
      </div>
      <div className="col-lg-10">
        <div className="resumeBtn">
          <a href={require("./assets/downloads/Resume.jpg")} download="Resume">
            <button
              className="btn-lg btn-info"
              onClick={handleClick}
              style={color}
              type="button"
            >
              {text}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
