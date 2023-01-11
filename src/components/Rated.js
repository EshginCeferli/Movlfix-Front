import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { EffectCoverflow, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
// 

function Rated() {
  const { t } = useTranslation();

  const [movies, setMovies] = useState([]);

  const GetRatedMovies = async () => {
    await axios
      .get("https://localhost:7079/api/Movie/GetMoviesRateOrder")
      .then((response) => {
        setMovies(response.data);
      });
  };

  useEffect(() => {
    GetRatedMovies();
  }, []);

  return (
    <div>
      <section
        className="top-rated-movie tr-movie-bg"
        style={{ backgroundImage: "url(images/bg/tr_movies_bg.jpg)" }}
        // data-background="images/bg/tr_movies_bg.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-5">
                <span className="sub-title"> {t(`online streaming`)}</span>
                <h2 className="title"> {t(`top rated movies`)}</h2>
              </div>
            </div>
          </div>

          <div className="row">
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
                          <img src={`data:image/jpeg;base64,${movie.photo}`} alt="" />
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
        </div>
      </section>
    </div>
  );
}

export default Rated;
