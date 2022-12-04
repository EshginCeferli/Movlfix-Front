import React from "react";

function Service() {
  return (
    <div>
      <>
        {/* services-area */}
        <section
          className="services-area services-bg"
          //   data-background="img/bg/services_bg.jpg"
          style={{ backgroundImage: "url(/images/bg/services_bg.jpg)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="services-img-wrap">
                  <img src="images/images/services_img.jpg" alt="" />
                  <a
                    href="images/images/services_img.jpg"
                    className="download-btn"
                    download=""
                  >
                    Download <img src="/fonts/download.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="services-content-wrap">
                  <div className="section-title title-style-two mb-2">
                    <span className="sub-title">Our Services</span>
                    <h2 className="title">
                      Download Your Shows Watch Offline.
                    </h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                    eiusmod tempor.There are many variations of passages of
                    lorem Ipsum available, but the majority have suffered
                    alteration in some injected humour.
                  </p>
                  <div className="services-list">
                    <ul>
                      <li>
                        <div className="icon">
                        <i className="fas fa-light fa-tv"></i>
                   
                        </div>
                        <div className="content">
                          <h5>Enjoy on Your TV.</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consecetur adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                        <i className="fas fa-light fa-video"></i>
                        {/* <i clasName="fas fa-regular fa-video"></i>
                        <i className="fasfa-light fa-tv-retro"></i> */}
                        </div>
                        <div className="content">
                          <h5>Watch Everywhere.</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consecetur adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* services-area-end */}
      </>
    </div>
  );
}

export default Service;
