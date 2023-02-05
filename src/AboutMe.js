export default function AboutMe() {
  return (
    <section className="row" id="about-me">
      <div className="col-sm-2">
        <h2>About Me</h2>
      </div>
      <div className="col-sm-2">
        <img
          className="pfp"
          src={require("./assets/images/pfp.png")}
          alt="Profile Pic"
        />
      </div>
      <div className="col-sm-8">
        <p>
          Self-driven and passionate about software development. Currently
          holding nine certificates in software development. Threw code-cademy
          and enrolled in Georgia Tech for full stack flex. Seeking a Full stack
          Certification and building my portfolio to better position myself in
          the software development job market. Proficient in writing HTML, CSS,
          Javascript, Node.js along associated frameworks such as React,
          Express. Proficient in working with Non Relational DB's such as Mongo.
          I have mingled in writing Python, building machine learning programs,
          web scraping applications. Great sales & marketing skills. Proficient
          with MS Office Suite. Excellent interpersonal communication skills.
        </p>
      </div>
    </section>
  );
}
