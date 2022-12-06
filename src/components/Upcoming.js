import React from "react";
// import '../assets/css/bootstrap.min.css'
// import '../assets/css/style.css'
// import "../assets/css/owl.carousel.min.css";
// import '../assets/css/slick.css'

function Upcoming() {
  return (
    <div>
      <>
        {/* up-coming-movie-area */}
        <section
          className="ucm-area ucm-bg"
          data-background="/images/bg/ucm_bg.jpg"
        >
          <div
            className="ucm-bg-shape"
            data-background="/images/bg/ucm_bg_shape.png"
          />
          <div className="container">
            <div className="row align-items-end mb-55">
              <div className="col-lg-6">
                <div className="section-title text-center text-lg-left">
                  <span className="sub-title">ONLINE STREAMING</span>
                  <h2 className="title">Upcoming Movies</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ucm-nav-wrap">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Home
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Profile
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Contact
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                Slide 1
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                Slider2
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                Slider 3
              </div>
            </div>
          </div>
        </section>
        {/* up-coming-movie-area-end */}
      </>
    </div>
  );
}

export default Upcoming;
