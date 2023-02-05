import React, { useState } from "react";

import AboutMe from "./AboutMe";
import Projects from "./Projects";
import CertificateImgs from "./Certs";
import Resume from "./Resume";
import Contact from "./Contact";

export default function App() {
  const [count, setCount] = useState(0);

  function handleButtonClick() {
    setCount(count + 1);
  }

  function keyDownAction(event) {
    if (event.key === "ArrowDown") {
      setCount(count + 1);
    } else if (event.key === "ArrowUp") {
      setCount(count - 1);
    }
    componentWillUnmount();
  }

  function componentWillUnmount() {
    document.removeEventListener("keydown", keyDownAction);
  }

  document.addEventListener("keydown", keyDownAction);

  function handleNavClick(e) {
    const choice = e.target;
    let attriChoice = choice.getAttribute("value");

    if (attriChoice === "about-me") {
      setCount(0);
      componentMountChoice();
    } else if (attriChoice === "projects") {
      setCount(1);
      componentMountChoice();
    } else if (attriChoice === "certifications") {
      setCount(2);
      componentMountChoice();
    } else if (attriChoice === "resume") {
      setCount(3);
      componentMountChoice();
    } else if (attriChoice === "contact") {
      setCount(4);
      componentMountChoice();
    }
  }

  function componentMountChoice() {
    if (count % 5 === 0) {
      return <AboutMe />;
    } else if (count % 5 === 1) {
      return <Projects />;
    } else if (count % 5 === 2) {
      return <CertificateImgs />;
    } else if (count % 5 === 3) {
      return <Resume />;
    } else if (count % 5 === 4) {
      return <Contact />;
    }
  }

  return (
    <div>
      <div>
        <header>
          <h1>Michael Lito</h1>
          <nav>
            <ul>
              <li>
                <a onClick={handleNavClick} value="about-me">
                  About Me
                </a>
              </li>
              <li>
                <a onClick={handleNavClick} value="projects">
                  Projects
                </a>
              </li>
              <li>
                <a onClick={handleNavClick} value="certifications">
                  Certifications
                </a>
              </li>
              <li>
                <a onClick={handleNavClick} value="resume">
                  Resume
                </a>
              </li>
              <li>
                <a onClick={handleNavClick} value="contact">
                  Contact Info
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="header-img" alt="border blue decoration">
          <text> Reactive Portfolio</text>
        </div>
      </div>
      <div>
        <div></div>
        {componentMountChoice()}
      </div>
      <section id="downArrow" className="demo">
        <a onClick={handleButtonClick}>
          <span id="downScroll1"></span>
        </a>
      </section>
    </div>
  );
}
