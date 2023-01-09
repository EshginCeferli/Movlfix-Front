import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { useTranslation } from "react-i18next";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function Upcoming() {
  const { t } = useTranslation();

  const [movies, setMovies] = useState([]);

  const GetNewMovies = async () => {
    await axios
      .get("https://localhost:7079/api/Movie/GetMoviesDescOrder")
      .then((response) => {
        setMovies(response.data);
      });
  };

  useEffect(() => {
    GetNewMovies();
  }, []);


  return (
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
            <div className="col-12">
              <div className="section-title text-center text-lg-left">
                <span className="sub-title d-flex justify-content-center">
                  {" "}
                  {t(`online streaming`)}
                </span>
                <h2 className="title" style={{ textAlign: "center" }}>
                  {" "}
                  {t(`new movies`)}
                </h2>
              </div>
            </div>
          </div>

          <Swiper
            loop={true}
            spaceBetween={10}
            effect={"coverflow"}
            grabCursor={true}
            slidesPerView={"4"}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 40,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
          >
            {movies?.map((movie, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="movie-item mb-50">
                    <div className="movie-poster">
                      <Link to={`/movie/${movie.id}`}>
                        <img src={`images/poster/${movie.poster}`} alt="" />
                      </Link>
                    </div>
                    <div className="movie-content">
                      <div className="top">
                        <h5 className="title">
                          <Link to={`/movie/${movie.id}`}>{movie.name}</Link>
                        </h5>
                        <span className="date">{movie.releaseYear}</span>
                      </div>
                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="quality">hd</span>
                          </li>
                          <li>
                            <span className="duration">
                              <i className="far fa-clock"></i> {movie.length}{" "}
                              min
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
              );
            })}
          </Swiper>
        </div>
      </section>
      {/* up-coming-movie-area-end */}
    </>
  );
}

export default Upcoming;
