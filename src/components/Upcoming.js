import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow } from "swiper";

import "swiper/css";
import "swiper/css/navigation";


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
            <div className="row align-items-end mb-5">
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
                <Swiper
                  loop={true}
                  spaceBetween={10}
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"4"}
                  coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 40,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow]}
                >
                  <SwiperSlide>
                    {" "}
                    <div className="movie-item mb-50">
                      <div className="movie-poster">
                        <a href="movie-details.html">
                          <img src="images/poster/ucm_poster01.jpg" alt="" />
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
                                <i className="far fa-clock"></i> 128 min
                              </span>
                              <span className="rating">
                                <i className="fas fa-thumbs-up"></i> 3.5
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="movie-item mb-50">
                      <div className="movie-poster">
                        <a href="movie-details.html">
                          <img src="images/poster/ucm_poster02.jpg" alt="" />
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
                                <i className="far fa-clock"></i> 128 min
                              </span>
                              <span className="rating">
                                <i className="fas fa-thumbs-up"></i> 3.5
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="movie-item mb-50">
                      <div className="movie-poster">
                        <a href="movie-details.html">
                          <img src="images/poster/ucm_poster03.jpg" alt="" />
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
                                <i className="far fa-clock"></i> 128 min
                              </span>
                              <span className="rating">
                                <i className="fas fa-thumbs-up"></i> 3.5
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="movie-item mb-50">
                      <div className="movie-poster">
                        <a href="movie-details.html">
                          <img src="images/poster/ucm_poster04.jpg" alt="" />
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
                                <i className="far fa-clock"></i> 128 min
                              </span>
                              <span className="rating">
                                <i className="fas fa-thumbs-up"></i> 3.5
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="movie-item mb-50">
                      <div className="movie-poster">
                        <a href="movie-details.html">
                          <img src="images/poster/ucm_poster05.jpg" alt="" />
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
                                <i className="far fa-clock"></i> 128 min
                              </span>
                              <span className="rating">
                                <i className="fas fa-thumbs-up"></i> 3.5
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <Swiper
                  loop={true}
                  spaceBetween={10}
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"4"}
                  coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 40,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow]}
                >
                  <SwiperSlide>
                    <div className="movie-item mb-50">
                      <div className="movie-poster">
                        <a href="movie-details.html">
                          <img src="images/poster/ucm_poster05.jpg" alt="" />
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
                                <i className="far fa-clock"></i> 128 min
                              </span>
                              <span className="rating">
                                <i className="fas fa-thumbs-up"></i> 3.5
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="movie-item mb-50">
                      <div className="movie-poster">
                        <a href="movie-details.html">
                          <img src="images/poster/ucm_poster06.jpg" alt="" />
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
                                <i className="far fa-clock"></i> 128 min
                              </span>
                              <span className="rating">
                                <i className="fas fa-thumbs-up"></i> 3.5
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="movie-item mb-50">
                      <div className="movie-poster">
                        <a href="movie-details.html">
                          <img src="images/poster/ucm_poster07.jpg" alt="" />
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
                                <i className="far fa-clock"></i> 128 min
                              </span>
                              <span className="rating">
                                <i className="fas fa-thumbs-up"></i> 3.5
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="movie-item mb-50">
                      <div className="movie-poster">
                        <a href="movie-details.html">
                          <img src="images/poster/ucm_poster08.jpg" alt="" />
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
                                <i className="far fa-clock"></i> 128 min
                              </span>
                              <span className="rating">
                                <i className="fas fa-thumbs-up"></i> 3.5
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="movie-item mb-50">
                      <div className="movie-poster">
                        <a href="movie-details.html">
                          <img src="images/poster/ucm_poster03.jpg" alt="" />
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
                                <i className="far fa-clock"></i> 128 min
                              </span>
                              <span className="rating">
                                <i className="fas fa-thumbs-up"></i> 3.5
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <Swiper
                  loop={true}
                  spaceBetween={10}
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"4"}
                  coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 40,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow]}
                >
                  <SwiperSlide>
                    {" "}
                    <div className="movie-item mb-50">
                      <div className="movie-poster">
                        <a href="movie-details.html">
                          <img src="images/poster/ucm_poster01.jpg" alt="" />
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
                                <i className="far fa-clock"></i> 128 min
                              </span>
                              <span className="rating">
                                <i className="fas fa-thumbs-up"></i> 3.5
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="movie-item mb-50">
                      <div className="movie-poster">
                        <a href="movie-details.html">
                          <img src="images/poster/ucm_poster02.jpg" alt="" />
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
                                <i className="far fa-clock"></i> 128 min
                              </span>
                              <span className="rating">
                                <i className="fas fa-thumbs-up"></i> 3.5
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="movie-item mb-50">
                      <div className="movie-poster">
                        <a href="movie-details.html">
                          <img src="images/poster/ucm_poster03.jpg" alt="" />
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
                                <i className="far fa-clock"></i> 128 min
                              </span>
                              <span className="rating">
                                <i className="fas fa-thumbs-up"></i> 3.5
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="movie-item mb-50">
                      <div className="movie-poster">
                        <a href="movie-details.html">
                          <img src="images/poster/ucm_poster04.jpg" alt="" />
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
                                <i className="far fa-clock"></i> 128 min
                              </span>
                              <span className="rating">
                                <i className="fas fa-thumbs-up"></i> 3.5
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="movie-item mb-50">
                      <div className="movie-poster">
                        <a href="movie-details.html">
                          <img src="images/poster/ucm_poster05.jpg" alt="" />
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
                                <i className="far fa-clock"></i> 128 min
                              </span>
                              <span className="rating">
                                <i className="fas fa-thumbs-up"></i> 3.5
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
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
