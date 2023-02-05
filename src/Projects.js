export default function Projects() {
  return (
    <section id="projects" className="row">
      <div className="col-sm-2">
        <h2>Projects</h2>
      </div>
      <div className="col-sm-3">
        <a
          className="project-one"
          href="https://micklitodev.github.io/JavascriptQuiz/"
        >
          <img
            src={require("./assets/images/jsquizappss.png")}
            alt="link to deployed Password Generator"
          />
          <h3>Javascript Quiz</h3>
        </a>
      </div>

      <div className="col-md-3;">
        <a
          className="project-two"
          href="https://micklitodev.github.io/PASSWORDGENERATOR/"
        >
          <img
            src={require("./assets/images/passgenss.png")}
            alt="link to deployed Password Generator"
          />
          <h3>Password Generator</h3>
        </a>
      </div>

      <div className="col-md-3">
        <a
          className="project-three"
          href="https://micklitodev.github.io/HORISEON-WEBOPTIMIZATION/"
        >
          <img
            src={require("./assets/images/project1.png")}
            alt="link to deployed Horiseon Website"
          />
          <h3>Horiseon Web Opt</h3>
        </a>
      </div>
    </section>
  );
}
