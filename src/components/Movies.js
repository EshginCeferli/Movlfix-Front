import React from "react";
import Categories from "./Categories";
import { useState } from "react";

function Movies() {
const [filteredData, setFilteredData] = useState([])

console.log("test");
  return (
    <div>
      <section
        className="movie-area movie-bg"
        style={{ backgroundImage: "url(/images/bg/movie_bg.jpg)" }}
      // data-background="images/bg/movie_bg.jpg"
      >
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-6">
              <div className="section-title text-center text-lg-left">
                <span className="sub-title">ONLINE STREAMING</span>
                <h2 className="title">New Release Movies</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="movie-page-meta">
                <div className="tr-movie-menu-active text-center">
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
                <form action="#" className="movie-filter-form">
                  <select className="custom-select" defaultValue={"DEFAULT"}>
                    <option value="DEFAULT" disabled>
                      Choose a salutation ...
                    </option>
                    <option value="1">Mr</option>
                    <option value="2">Mrs</option>
                    <option value="3">Ms</option>
                    <option value="4">Miss</option>
                    <option value="5">Dr</option>
                  </select>
                </form>
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
              {" "}
              <div className="row tr-movie-active">
                <div className="col-3">
                  {" "}
                  <Categories />
                  
                </div>
                <div className="col-9">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                      <div className="movie-item movie-item-three mb-5">
                        <div className="movie-poster">
                          <img src="images/poster/ucm_poster01.jpg" alt="" />
                          <ul className="overlay-btn">
                            <li className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video btn"
                              >
                                Watch Now
                              </a>
                            </li>
                            <li>
                              <a href="movie-details.html" className="btn">
                                Details
                              </a>
                            </li>
                          </ul>
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
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one">
                      <div className="movie-item movie-item-three mb-5">
                        <div className="movie-poster">
                          <img src="images/poster/ucm_poster02.jpg" alt="" />
                          <ul className="overlay-btn">
                            <li className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video btn"
                              >
                                Watch Now
                              </a>
                            </li>
                            <li>
                              <a href="movie-details.html" className="btn">
                                Details
                              </a>
                            </li>
                          </ul>
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
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                      <div className="movie-item movie-item-three mb-5">
                        <div className="movie-poster">
                          <img src="images/poster/ucm_poster03.jpg" alt="" />
                          <ul className="overlay-btn">
                            <li className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video btn"
                              >
                                Watch Now
                              </a>
                            </li>
                            <li>
                              <a href="movie-details.html" className="btn">
                                Details
                              </a>
                            </li>
                          </ul>
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
                    <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one">
                      <div className="movie-item movie-item-three mb-5">
                        <div className="movie-poster">
                          <img src="images/poster/ucm_poster04.jpg" alt="" />
                          <ul className="overlay-btn">
                            <li className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video btn"
                              >
                                Watch Now
                              </a>
                            </li>
                            <li>
                              <a href="movie-details.html" className="btn">
                                Details
                              </a>
                            </li>
                          </ul>
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
                    <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                      <div className="movie-item movie-item-three mb-5">
                        <div className="movie-poster">
                          <img src="images/poster/ucm_poster05.jpg" alt="" />
                          <ul className="overlay-btn">
                            <li className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video btn"
                              >
                                Watch Now
                              </a>
                            </li>
                            <li>
                              <a href="movie-details.html" className="btn">
                                Details
                              </a>
                            </li>
                          </ul>
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
                    <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one cat-two">
                      <div className="movie-item movie-item-three mb-5">
                        <div className="movie-poster">
                          <img src="images/poster/ucm_poster06.jpg" alt="" />
                          <ul className="overlay-btn">
                            <li className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video btn"
                              >
                                Watch Now
                              </a>
                            </li>
                            <li>
                              <a href="movie-details.html" className="btn">
                                Details
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="movie-content">
                          <div className="top">
                            <h5 className="title">
                              <a href="movie-details.html">The Hikaru Night</a>
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
                    <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one">
                      <div className="movie-item movie-item-three mb-5">
                        <div className="movie-poster">
                          <img src="images/poster/ucm_poster07.jpg" alt="" />
                          <ul className="overlay-btn">
                            <li className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video btn"
                              >
                                Watch Now
                              </a>
                            </li>
                            <li>
                              <a href="movie-details.html" className="btn">
                                Details
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="movie-content">
                          <div className="top">
                            <h5 className="title">
                              <a href="movie-details.html">The Life Quotes</a>
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
                    <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one cat-two">
                      <div className="movie-item movie-item-three mb-5">
                        <div className="movie-poster">
                          <img src="images/poster/ucm_poster08.jpg" alt="" />
                          <ul className="overlay-btn">
                            <li className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                                className="popup-video btn"
                              >
                                Watch Now
                              </a>
                            </li>
                            <li>
                              <a href="movie-details.html" className="btn">
                                Details
                              </a>
                            </li>
                          </ul>
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
              <div className="row">
                <div className="col-12">
                  <div className="pagination-wrap mt-30">
                    <nav>
                      <ul>
                        <li className="active">
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">Next</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row tr-movie-active">
                <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                  <div className="movie-item movie-item-three mb-5">
                    <div className="movie-poster">
                      <img src="images/poster/ucm_poster01.jpg" alt="" />
                      <ul className="overlay-btn">
                        <li className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                            className="popup-video btn"
                          >
                            Watch Now
                          </a>
                        </li>
                        <li>
                          <a href="movie-details.html" className="btn">
                            Details
                          </a>
                        </li>
                      </ul>
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
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one">
                  <div className="movie-item movie-item-three mb-5">
                    <div className="movie-poster">
                      <img src="images/poster/ucm_poster02.jpg" alt="" />
                      <ul className="overlay-btn">
                        <li className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                            className="popup-video btn"
                          >
                            Watch Now
                          </a>
                        </li>
                        <li>
                          <a href="movie-details.html" className="btn">
                            Details
                          </a>
                        </li>
                      </ul>
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
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                  <div className="movie-item movie-item-three mb-5">
                    <div className="movie-poster">
                      <img src="images/poster/ucm_poster03.jpg" alt="" />
                      <ul className="overlay-btn">
                        <li className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                            className="popup-video btn"
                          >
                            Watch Now
                          </a>
                        </li>
                        <li>
                          <a href="movie-details.html" className="btn">
                            Details
                          </a>
                        </li>
                      </ul>
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
                <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one">
                  <div className="movie-item movie-item-three mb-5">
                    <div className="movie-poster">
                      <img src="images/poster/ucm_poster04.jpg" alt="" />
                      <ul className="overlay-btn">
                        <li className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                            className="popup-video btn"
                          >
                            Watch Now
                          </a>
                        </li>
                        <li>
                          <a href="movie-details.html" className="btn">
                            Details
                          </a>
                        </li>
                      </ul>
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
                <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                  <div className="movie-item movie-item-three mb-5">
                    <div className="movie-poster">
                      <img src="images/poster/ucm_poster05.jpg" alt="" />
                      <ul className="overlay-btn">
                        <li className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                            className="popup-video btn"
                          >
                            Watch Now
                          </a>
                        </li>
                        <li>
                          <a href="movie-details.html" className="btn">
                            Details
                          </a>
                        </li>
                      </ul>
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
                <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one cat-two">
                  <div className="movie-item movie-item-three mb-5">
                    <div className="movie-poster">
                      <img src="images/poster/ucm_poster06.jpg" alt="" />
                      <ul className="overlay-btn">
                        <li className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                            className="popup-video btn"
                          >
                            Watch Now
                          </a>
                        </li>
                        <li>
                          <a href="movie-details.html" className="btn">
                            Details
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">The Hikaru Night</a>
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
                <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one">
                  <div className="movie-item movie-item-three mb-5">
                    <div className="movie-poster">
                      <img src="images/poster/ucm_poster07.jpg" alt="" />
                      <ul className="overlay-btn">
                        <li className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                            className="popup-video btn"
                          >
                            Watch Now
                          </a>
                        </li>
                        <li>
                          <a href="movie-details.html" className="btn">
                            Details
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">The Life Quotes</a>
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
                <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one cat-two">
                  <div className="movie-item movie-item-three mb-5">
                    <div className="movie-poster">
                      <img src="images/poster/ucm_poster08.jpg" alt="" />
                      <ul className="overlay-btn">
                        <li className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                            className="popup-video btn"
                          >
                            Watch Now
                          </a>
                        </li>
                        <li>
                          <a href="movie-details.html" className="btn">
                            Details
                          </a>
                        </li>
                      </ul>
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
              <div className="row">
                <div className="col-12">
                  <div className="pagination-wrap mt-30">
                    <nav>
                      <ul>
                        <li className="active">
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">Next</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="row tr-movie-active">
                <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                  <div className="movie-item movie-item-three mb-5">
                    <div className="movie-poster">
                      <img src="images/poster/ucm_poster01.jpg" alt="" />
                      <ul className="overlay-btn">
                        <li className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                            className="popup-video btn"
                          >
                            Watch Now
                          </a>
                        </li>
                        <li>
                          <a href="movie-details.html" className="btn">
                            Details
                          </a>
                        </li>
                      </ul>
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
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one">
                  <div className="movie-item movie-item-three mb-5">
                    <div className="movie-poster">
                      <img src="images/poster/ucm_poster02.jpg" alt="" />
                      <ul className="overlay-btn">
                        <li className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                            className="popup-video btn"
                          >
                            Watch Now
                          </a>
                        </li>
                        <li>
                          <a href="movie-details.html" className="btn">
                            Details
                          </a>
                        </li>
                      </ul>
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
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                  <div className="movie-item movie-item-three mb-5">
                    <div className="movie-poster">
                      <img src="images/poster/ucm_poster03.jpg" alt="" />
                      <ul className="overlay-btn">
                        <li className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                            className="popup-video btn"
                          >
                            Watch Now
                          </a>
                        </li>
                        <li>
                          <a href="movie-details.html" className="btn">
                            Details
                          </a>
                        </li>
                      </ul>
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
                <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one">
                  <div className="movie-item movie-item-three mb-5">
                    <div className="movie-poster">
                      <img src="images/poster/ucm_poster04.jpg" alt="" />
                      <ul className="overlay-btn">
                        <li className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                            className="popup-video btn"
                          >
                            Watch Now
                          </a>
                        </li>
                        <li>
                          <a href="movie-details.html" className="btn">
                            Details
                          </a>
                        </li>
                      </ul>
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
                <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
                  <div className="movie-item movie-item-three mb-5">
                    <div className="movie-poster">
                      <img src="images/poster/ucm_poster05.jpg" alt="" />
                      <ul className="overlay-btn">
                        <li className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                            className="popup-video btn"
                          >
                            Watch Now
                          </a>
                        </li>
                        <li>
                          <a href="movie-details.html" className="btn">
                            Details
                          </a>
                        </li>
                      </ul>
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
                <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one cat-two">
                  <div className="movie-item movie-item-three mb-5">
                    <div className="movie-poster">
                      <img src="images/poster/ucm_poster06.jpg" alt="" />
                      <ul className="overlay-btn">
                        <li className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                            className="popup-video btn"
                          >
                            Watch Now
                          </a>
                        </li>
                        <li>
                          <a href="movie-details.html" className="btn">
                            Details
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">The Hikaru Night</a>
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
                <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one">
                  <div className="movie-item movie-item-three mb-5">
                    <div className="movie-poster">
                      <img src="images/poster/ucm_poster07.jpg" alt="" />
                      <ul className="overlay-btn">
                        <li className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                            className="popup-video btn"
                          >
                            Watch Now
                          </a>
                        </li>
                        <li>
                          <a href="movie-details.html" className="btn">
                            Details
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <a href="movie-details.html">The Life Quotes</a>
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
                <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one cat-two">
                  <div className="movie-item movie-item-three mb-5">
                    <div className="movie-poster">
                      <img src="images/poster/ucm_poster08.jpg" alt="" />
                      <ul className="overlay-btn">
                        <li className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                            className="popup-video btn"
                          >
                            Watch Now
                          </a>
                        </li>
                        <li>
                          <a href="movie-details.html" className="btn">
                            Details
                          </a>
                        </li>
                      </ul>
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
              <div className="row">
                <div className="col-12">
                  <div className="pagination-wrap mt-30">
                    <nav>
                      <ul>
                        <li className="active">
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">Next</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Movies;
