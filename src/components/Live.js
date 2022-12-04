import React from 'react'

function Live() {
  return (
    <div><section
    className="live-area live-bg fix"
    // data-background="images/bg/live_bg.jpg"
    style={{ backgroundImage: "url(/images/bg/live_bg.jpg)" }}
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-5 col-lg-6">
          <div className="section-title title-style-two mb-25">
            <span className="sub-title">ONLINE STREAMING</span>
            <h2 className="title">
              Live Movie &amp; TV Shows For Friends &amp; Family
            </h2>
          </div>
          <div className="live-movie-content">
            <p>
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
              There are many variations of passages of lorem Ipsum available, but
              the majority have suffered alteration.
            </p>
            <div className="live-fact-wrap">
              <div className="resolution">
                <h2>HD 4K</h2>
              </div>
              <div className="active-customer">
                <h4>
                  <span className="odometer" data-count={20} />
                  K+
                </h4>
                <p>Active Customer</p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
              className="btn popup-video"
            >
              <i className="fas fa-play" /> Watch Now
            </a>
          </div>
        </div>
        <div className="col-xl-7 col-lg-6">
          <div
            className="live-movie-img wow fadeInRight"
            data-wow-delay=".2s"
            data-wow-duration="1.8s"
          >
            <img src="images/images/live_img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Live