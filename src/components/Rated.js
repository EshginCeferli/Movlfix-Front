import React from 'react'
import "../assets/css/style.css";

function Rated() {
  return (
    <div><section
    className="top-rated-movie tr-movie-bg"
    style={{ backgroundImage: "url(images/bg/tr_movies_bg.jpg)" }}
    // data-background="images/bg/tr_movies_bg.jpg"
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title text-center mb-5">
            <span className="sub-title">ONLINE STREAMING</span>
            <h2 className="title">Top Rated Movies</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="tr-movie-menu-active text-center">
            <button className="active" data-filter="*">
              TV Shows
            </button>
            <button className="" data-filter=".cat-one">
              Movies
            </button>
            <button className="" data-filter=".cat-two">
              documentary
            </button>
            <button className="" data-filter=".cat-three">
              sports
            </button>
          </div>
        </div>
      </div>
      <div className="row tr-movie-active">
        <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
          <div className="movie-item mb-5">
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
        <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one cat-three">
          <div className="movie-item mb-5">
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
          <div className="movie-item mb-5">
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
        <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one cat-three">
          <div className="movie-item mb-5">
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
                    <span className="quality">8K</span>
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
          <div className="movie-item mb-5">
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
                    <span className="quality">3D</span>
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
        <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one cat-three">
          <div className="movie-item mb-5">
            <div className="movie-poster">
              <a href="movie-details.html">
                <img src="images/poster/ucm_poster06.jpg" alt="" />
              </a>
            </div>
            <div className="movie-content">
              <div className="top">
                <h5 className="title">
                  <a href="movie-details.html">The Hikaru</a>
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
                      <i className="fas fa-thumbs-up" /> 3.9
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-two">
          <div className="movie-item mb-5">
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
                    <span className="quality">4K</span>
                  </li>
                  <li>
                    <span className="duration">
                      <i className="far fa-clock" /> 128 min
                    </span>
                    <span className="rating">
                      <i className="fas fa-thumbs-up" /> 3.9
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 grid-item grid-sizer cat-one cat-three">
          <div className="movie-item mb-5">
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
                    <span className="quality">4K</span>
                  </li>
                  <li>
                    <span className="duration">
                      <i className="far fa-clock" /> 128 min
                    </span>
                    <span className="rating">
                      <i className="fas fa-thumbs-up" /> 3.9
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Rated