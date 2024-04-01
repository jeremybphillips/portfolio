import { useState } from "react";
import classNames from "classnames";
import LightboxThumbnailButton from "./components/LightboxThumbnailButton";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(null);

  return (
    <div id="page-wraper">
      <div className="responsive-nav">
        <i
          className="fa fa-bars"
          id="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>
        <div
          id="menu"
          className={classNames("menu", {
            open: menuOpen,
          })}
        >
          <i
            className="fa fa-times"
            id="menu-close"
            onClick={() => setMenuOpen(!menuOpen)}
          ></i>
          <div className="container">
            <div className="image">
              <img
                src="assets/images/profile.jpg"
                alt=""
                height="150"
                width="150"
              />
            </div>
            <div className="author-content">
              <h4>Jeremy Phillips</h4>
              <span>Senior front end developer</span>
            </div>
            <nav className="main-nav" role="navigation">
              <ul className="main-menu">
                {/*
                // TODO - Close menu after click on smaller screens (< 846px)
                <li><a href="#section1">About Me</a></li>
                <li><a href="#section2">What I’m good at</a></li>
                <li><a href="#section3">Contact Me</a></li>
                */}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section className="section about-me" data-section="section1">
        <div className="container">
          <div
            className="section-heading"
            style={{ borderBottom: "3px solid rgba(250, 250, 250, 0.25)" }}
          >
            <h2>About Me</h2>
            <div className="line-dec"></div>
            <span>
              A seasoned front end developer adept at transforming ideas into
              interactive solutions. Passionate about creating captivating user
              experiences and delivering exceptional results.
            </span>
          </div>

          <div className="section-heading">
            <h2>My Work</h2>
            <div className="line-dec"></div>
          </div>

          <div className="left-image-post work-item">
            <div className="row">
              <div className="col-md-6">
                <div className="left-image">
                  <LightboxThumbnailButton
                    isOpen={lightboxOpen === 1}
                    onClose={() => setLightboxOpen(null)}
                    slides={[
                      {
                        src: "assets/images/ecomm/01.png",
                        title: "New landing page",
                      },
                      {
                        src: "assets/images/ecomm/02.png",
                        title: "Legacy landing page",
                      },
                      {
                        src: "assets/images/ecomm/03.png",
                        title: "Updated product display and search page",
                      },
                      {
                        src: "assets/images/ecomm/05.png",
                        title:
                          "Modernized shopping cart with payment integration",
                      },
                      {
                        src: "assets/images/ecomm/06.png",
                        title: "Updated admin portal",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-text">
                  <h4>Texas Department of Criminal Justice</h4>
                  <p>
                    Lead front end developer the modernization of the
                    11-year-old direct purchase program for Texas Department of
                    Criminal Justice (TDCJ).
                  </p>
                  <p>
                    Lead React / Next.js developmer. Worked in collaboration
                    with the UX team to translate Figma designs into a modern
                    interface. Played a key role in revamping the outdated
                    application, working closely with designers to implement
                    their vision while providing expertise on technical
                    feasibility and best practices.
                  </p>
                  <button onClick={() => setLightboxOpen(1)}>View More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="right-image-post work-item">
            <div className="row">
              <div className="col-md-6">
                <div className="left-text">
                  <h4>Texas x Texas (TxT)</h4>
                  <p>Front end architech for Texas x Texas (TxT).</p>
                  <p>
                    Led the front-end development effort while regularly
                    participating in meetings to address feasibility questions
                    from the UX team and product managemnt, ensuring a seamless
                    integration of design and development. Provided valuable
                    insights during discussions to ensure alignment between
                    design vision and technical feasibility.
                  </p>
                  <button onClick={() => setLightboxOpen(2)}>View More</button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-image">
                  <LightboxThumbnailButton
                    isOpen={lightboxOpen === 2}
                    onClose={() => setLightboxOpen(null)}
                    slides={[
                      {
                        src: "assets/images/txt/01.png",
                        title: "TxT log in page",
                      },
                      {
                        src: "assets/images/txt/02.png",
                        title: "Landing page",
                      },
                      {
                        src: "assets/images/txt/03.png",
                        title: "User account settings page",
                      },
                      {
                        src: "assets/images/txt/04.png",
                        title: "",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="left-image-post work-item last-item">
            <div className="row">
              <div className="col-md-6">
                <div className="left-image">
                  <LightboxThumbnailButton
                    isOpen={lightboxOpen === 3}
                    onClose={() => setLightboxOpen(null)}
                    slides={[
                      {
                        src: "assets/images/texkit/01.png",
                        title: "Implement new Progress bar component",
                      },
                      {
                        src: "assets/images/texkit/02.png",
                        title: "",
                      },
                      {
                        src: "assets/images/texkit/03.png",
                        title: "",
                      },
                      {
                        src: "assets/images/texkit/04.png",
                        title: "",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-text">
                  <h4>React component library</h4>
                  <p>
                    Partnered with UX designers and product managemnt to develop
                    new components for an internal component library.
                  </p>
                  <p>
                    Actively contributed to the expansion and maintanacne of the
                    component library. Also worked with devops to create new CI
                    / CD process used for release.
                  </p>
                  <button onClick={() => setLightboxOpen(3)}>View More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section my-services" data-section="section2">
        <div className="container">
          <div className="section-heading">
            <h2>What I’m good at?</h2>
            <div className="line-dec"></div>
            <span>
              Curabitur leo felis, rutrum vitae varius eu, malesuada a tortor.
              Vestibulum congue leo et tellus aliquam, eu viverra nulla semper.
              Nullam eu faucibus diam. Donec eget massa ante.
            </span>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="service-item">
                <div className="first-service-icon service-icon"></div>
                <h4>HTML5 &amp; CSS3</h4>
                <p>
                  Phasellus non convallis dolor. Integer tempor hendrerit arcu
                  at bibendum. Sed ac ante non metus vehicula congue quis eget
                  eros.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <div className="second-service-icon service-icon"></div>
                <h4>Creative Ideas</h4>
                <p>
                  Proin lacus massa, eleifend sed fermentum in, dignissim vel
                  metus. Nunc accumsan leo nec felis porttitor, ultricies
                  faucibus purus mollis.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <div className="third-service-icon service-icon"></div>
                <h4>Easy Customize</h4>
                <p>
                  Integer suscipit condimentum aliquet. Nam quis risus metus.
                  Nullam faucibus quam eget arcu pretium tincidunt. Nam libero
                  dui.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <div className="fourth-service-icon service-icon"></div>
                <h4>Admin Dashboard</h4>
                <p>
                  Vivamus et dui a massa venenatis fringilla. Proin lacus massa,
                  eleifend sed fermentum in, dignissim vel metus. Nunc accumsan
                  leo nec felis porttitor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-me" data-section="section3">
        <div className="container">
          <div className="section-heading">
            <h2>Contact Me</h2>
            <div className="line-dec"></div>
            <span
              >Fusce eget nibh nec justo interdum condimentum. Morbi justo ex,
              efficitur at ante ac, tincidunt maximus ligula. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.</span
            >
          </div>
          <div className="row">
            <div className="right-content">
              <div className="container">
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your name..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Your email..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          className="form-control"
                          id="message"
                          placeholder="Your message..."
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="button">
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
