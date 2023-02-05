export default function Contact() {
  return (
    <section className="row" id="contact">
      <div className="col-sm-2">
        <h2>Contact Me</h2>
      </div>
      <div className="col-sm-3">
        <div className="favicondiv">
          <a href="https://github.com/Micklitodev">
            <img
              className="favicon"
              src={require("./assets/images/githubfavicon.png")}
              alt="github link"
            />
          </a>
          <h3>GitHub Link</h3>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="favicondiv">
          <a href="tel:4708314159">
            <img
              className="favicon"
              src={require("./assets/images/phonefavicon.png")}
              alt="phone link"
            />
          </a>
          <h3>(470) 831-4159</h3>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="favicondiv">
          <a href="mailto: micklito.dev@gmail.com">
            <img
              className="favicon"
              src={require("./assets/images/emailfavicon.png")}
              alt="email link"
            />
          </a>
          <h3>Micklito.dev@gmail.com</h3>
        </div>
      </div>
    </section>
  );
}
