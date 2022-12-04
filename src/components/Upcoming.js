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
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        id="tvShow-tab"
                        data-toggle="tab"
                        href="#tvShow"
                        role="tab"
                        aria-controls="tvShow"
                        aria-selected="true"
                      >
                        TV Shows
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="movies-tab"
                        data-toggle="tab"
                        href="#movies"
                        role="tab"
                        aria-controls="movies"
                        aria-selected="false"
                      >
                        Movies
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="anime-tab"
                        data-toggle="tab"
                        href="#anime"
                        role="tab"
                        aria-controls="anime"
                        aria-selected="false"
                      >
                        Anime
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="tvShow"
                role="tabpanel"
                aria-labelledby="tvShow-tab"
              >
                <div className="ucm-active owl-carousel">
                  <div className="movie-item mb-50">
                    <div className="movie-poster">
                      <a href="movie-details.html">
                        <img src="/images/poster/ucm_poster01.jpg" alt="" />
                      </a>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">Women's Day</a>
                        </h5>
                        <span className="date">2021</span>
                      </div>
                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="quality">hd</span>
                          </li>
                          <li>
                            <span className="duration">
                              <i className="far fa-clock" /> 128 min
                            </span>
                            <span className="rating">
                              <i className="fas fa-thumbs-up" /> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="movie-item mb-50">
                    <div className="movie-poster">
                      <a href="movie-details.html">
                        <img src="/images/poster/ucm_poster02.jpg" alt="" />
                      </a>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">The Perfect Match</a>
                        </h5>
                        <span className="date">2021</span>
                      </div>
                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="quality">4k</span>
                          </li>
                          <li>
                            <span className="duration">
                              <i className="far fa-clock" /> 128 min
                            </span>
                            <span className="rating">
                              <i className="fas fa-thumbs-up" /> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="movie-item mb-50">
                    <div className="movie-poster">
                      <a href="movie-details.html">
                        <img src="/images/poster/ucm_poster03.jpg" alt="" />
                      </a>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">The Dog Woof</a>
                        </h5>
                        <span className="date">2021</span>
                      </div>
                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="quality">hd</span>
                          </li>
                          <li>
                            <span className="duration">
                              <i className="far fa-clock" /> 128 min
                            </span>
                            <span className="rating">
                              <i className="fas fa-thumbs-up" /> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="movie-item mb-50">
                    <div className="movie-poster">
                      <a href="movie-details.html">
                        <img src="/images/poster/ucm_poster04.jpg" alt="" />
                      </a>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">The Easy Reach</a>
                        </h5>
                        <span className="date">2021</span>
                      </div>
                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="quality">8k</span>
                          </li>
                          <li>
                            <span className="duration">
                              <i className="far fa-clock" /> 128 min
                            </span>
                            <span className="rating">
                              <i className="fas fa-thumbs-up" /> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="movie-item mb-50">
                    <div className="movie-poster">
                      <a href="movie-details.html">
                        <img src="/images/poster/ucm_poster05.jpg" alt="" />
                      </a>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">The Cooking</a>
                        </h5>
                        <span className="date">2021</span>
                      </div>
                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="quality">hd</span>
                          </li>
                          <li>
                            <span className="duration">
                              <i className="far fa-clock" /> 128 min
                            </span>
                            <span className="rating">
                              <i className="fas fa-thumbs-up" /> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="movies"
                role="tabpanel"
                aria-labelledby="movies-tab"
              >
                <div className="ucm-active owl-carousel">
                  <div className="movie-item mb-50">
                    <div className="movie-poster">
                      <a href="movie-details.html">
                        <img src="/images/poster/ucm_poster05.jpg" alt="" />
                      </a>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">The Cooking</a>
                        </h5>
                        <span className="date">2021</span>
                      </div>
                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="quality">hd</span>
                          </li>
                          <li>
                            <span className="duration">
                              <i className="far fa-clock" /> 128 min
                            </span>
                            <span className="rating">
                              <i className="fas fa-thumbs-up" /> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="movie-item mb-50">
                    <div className="movie-poster">
                      <a href="movie-details.html">
                        <img src="/images/poster/ucm_poster06.jpg" alt="" />
                      </a>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">The Hikers</a>
                        </h5>
                        <span className="date">2021</span>
                      </div>
                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="quality">4k</span>
                          </li>
                          <li>
                            <span className="duration">
                              <i className="far fa-clock" /> 128 min
                            </span>
                            <span className="rating">
                              <i className="fas fa-thumbs-up" /> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="movie-item mb-50">
                    <div className="movie-poster">
                      <a href="movie-details.html">
                        <img src="/images/poster/ucm_poster07.jpg" alt="" />
                      </a>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">Life Quotes</a>
                        </h5>
                        <span className="date">2021</span>
                      </div>
                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="quality">hd</span>
                          </li>
                          <li>
                            <span className="duration">
                              <i className="far fa-clock" /> 128 min
                            </span>
                            <span className="rating">
                              <i className="fas fa-thumbs-up" /> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="movie-item mb-50">
                    <div className="movie-poster">
                      <a href="movie-details.html">
                        <img src="/images/poster/ucm_poster08.jpg" alt="" />
                      </a>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">The Beachball</a>
                        </h5>
                        <span className="date">2021</span>
                      </div>
                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="quality">4k</span>
                          </li>
                          <li>
                            <span className="duration">
                              <i className="far fa-clock" /> 128 min
                            </span>
                            <span className="rating">
                              <i className="fas fa-thumbs-up" /> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="movie-item mb-50">
                    <div className="movie-poster">
                      <a href="movie-details.html">
                        <img src="/images/poster/ucm_poster03.jpg" alt="" />
                      </a>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">The Dog Woof</a>
                        </h5>
                        <span className="date">2021</span>
                      </div>
                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="quality">hd</span>
                          </li>
                          <li>
                            <span className="duration">
                              <i className="far fa-clock" /> 128 min
                            </span>
                            <span className="rating">
                              <i className="fas fa-thumbs-up" /> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="anime"
                role="tabpanel"
                aria-labelledby="anime-tab"
              >
                <div className="ucm-active owl-carousel">
                  <div className="movie-item mb-50">
                    <div className="movie-poster">
                      <a href="movie-details.html">
                        <img src="/images/poster/ucm_poster01.jpg" alt="" />
                      </a>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">Women's Day</a>
                        </h5>
                        <span className="date">2021</span>
                      </div>
                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="quality">hd</span>
                          </li>
                          <li>
                            <span className="duration">
                              <i className="far fa-clock" /> 128 min
                            </span>
                            <span className="rating">
                              <i className="fas fa-thumbs-up" /> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="movie-item mb-50">
                    <div className="movie-poster">
                      <a href="movie-details.html">
                        <img src="/images/poster/ucm_poster02.jpg" alt="" />
                      </a>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">The Perfect Match</a>
                        </h5>
                        <span className="date">2021</span>
                      </div>
                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="quality">4k</span>
                          </li>
                          <li>
                            <span className="duration">
                              <i className="far fa-clock" /> 128 min
                            </span>
                            <span className="rating">
                              <i className="fas fa-thumbs-up" /> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="movie-item mb-50">
                    <div className="movie-poster">
                      <a href="movie-details.html">
                        <img src="/images/poster/ucm_poster03.jpg" alt="" />
                      </a>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">The Dog Woof</a>
                        </h5>
                        <span className="date">2021</span>
                      </div>
                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="quality">hd</span>
                          </li>
                          <li>
                            <span className="duration">
                              <i className="far fa-clock" /> 128 min
                            </span>
                            <span className="rating">
                              <i className="fas fa-thumbs-up" /> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="movie-item mb-50">
                    <div className="movie-poster">
                      <a href="movie-details.html">
                        <img src="/images/poster/ucm_poster04.jpg" alt="" />
                      </a>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">The Easy Reach</a>
                        </h5>
                        <span className="date">2021</span>
                      </div>
                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="quality">8k</span>
                          </li>
                          <li>
                            <span className="duration">
                              <i className="far fa-clock" /> 128 min
                            </span>
                            <span className="rating">
                              <i className="fas fa-thumbs-up" /> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="movie-item mb-50">
                    <div className="movie-poster">
                      <a href="movie-details.html">
                        <img src="/images/poster/ucm_poster05.jpg" alt="" />
                      </a>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">The Cooking</a>
                        </h5>
                        <span className="date">2021</span>
                      </div>
                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="quality">hd</span>
                          </li>
                          <li>
                            <span className="duration">
                              <i className="far fa-clock" /> 128 min
                            </span>
                            <span className="rating">
                              <i className="fas fa-thumbs-up" /> 3.5
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
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
