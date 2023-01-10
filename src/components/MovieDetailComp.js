import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper";
import Swal from "sweetalert2";
import StarsRating from "react-star-rate";

function MovieDetailComp(props) {
  const { t } = useTranslation();

  const url = "https://localhost:7079";

  //Comment items
  const [by, setBy] = useState();
  const [context, setContext] = useState();
  const comments = props.movie.comments;

  //USer items
  let token = localStorage.getItem("token");

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  const [user, setUser] = useState();

  useEffect(() => {
    if (token != null) {
      let usermail = parseJwt(token).sub[1];
      axios.get(`${url}/api/Account/GetUserByEmail/${usermail}`).then((res) => {
        setUser(res.data);
      });
    }
  }, []);


  async function AddComment(e) {
    e.preventDefault();
   
    await axios
      .post(`${url}/api/MovieComment/Create`, {
        By: user?.userName,
        Context: context,
        MovieId: props.id,
      })

      .then(function (response) {
        if (response.data.status === "success" || response.status === 200) {
          Swal.fire({
            position: "center",

            title: "Your comment added",
            showConfirmButton: false,
            timer: 1500,
          });
          window.location.reload();
        }
      })
      .catch(function (err) {
        console.log(err);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something went wrong",
          showConfirmButton: true,
          timer: 5000,
        });
      });
  }

  //Rate items
  const ratingChanged = async (e) => {
    await axios
      .post(`https://localhost:7079/api/Movie/Rate?id=${props.id}&rate=${e}`)
      .then(function (response) {
        Swal.fire({
          icon: "success",
          title: `You rated movie ${e} points`,
          text: "Thank you for your feedback!",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //Slider items

  const [movies, setMovies] = useState([]);
  const category = props.movie.movieCategory?.name;

  const GetRatedMovies = async () => {
    await axios
      .get(
        `https://localhost:7079/api/Movie/GetMoviesByCategory?category=${category}`
      )
      .then((response) => {
        setMovies(response.data);
      });
  };

  useEffect(() => {
    GetRatedMovies();
  }, category);

  return (
    <section
      className="movie-details-area"
      style={{ backgroundImage: "url(/images/bg/movie_details_bg.jpg)" }}
    >
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-xl-3 col-lg-4">
            <div className="movie-details-img">
              <img src={`/images/poster/${props.movie.poster}`} alt="" />
              <a
                href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                className="popup-video"
              >
                <img src="/images/images/play_icon.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8">
            <div className="movie-details-content">
              <h2>{props.movie.name}</h2>
              <div className="banner-meta">
                <ul>
                  <li className="quality">
                    <span>Pg 18</span>
                    <span>hd</span>
                  </li>
                  <li className="category">
                    <a href="#">{props.movie.movieCategoryName}</a>
                  </li>
                  <li className="release-time">
                    <span>
                      <i className="far fa-calendar-alt" />{" "}
                      {props.movie.releaseYear}
                    </span>
                    <span>
                      <i className="far fa-clock" /> {props.movie.length} min
                    </span>
                    <span>
                      <i className="far fa-clock" /> {props.movie.country} 
                    </span>
                  </li>
                </ul>
              </div>
              <p>{props.movie.description}</p>
              <h5>Rate Movie</h5>
              <StarsRating onChange={ratingChanged} />
              <div className="movie-details-prime">
                <ul>
                  <li className="share">
                    <a href="#">
                      <i className="fas fa-share-alt" /> Share
                    </a>
                  </li>
                  <li className="streaming">
                    <h6>Prime Video</h6>
                    <span>Streaming Channels</span>
                  </li>
                  <li className="watch">
                    <a
                      href="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                      className="btn popup-video"
                    >
                      <i className="fas fa-play" /> Watch Now
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="movie-details-btn">
            <a
              href="images/poster/movie_details_img.jpg"
              className="download-btn"
              download=""
            >
              Download <img src="/fonts/download.svg" alt="" />
            </a>
          </div>
        </div>

        <div className="row mb-5 my-5">
          <h1 className="mb-5 text-md-center">  {t(`movies you could also like`)}</h1>
          <Swiper
            loop={true}
            spaceBetween={10}
            effect={"coverflow"}
            grabCursor={true}
            slidesPerView={"4"}
           
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
                        <img src={`/images/poster/${movie.poster}`} alt="" />
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

        <div className="blog-comment ">
          <div className="widget-title ">
            <h5 className="title">
              {" "}
              {t(`comment's`)} ({comments?.length})
            </h5>
          </div>
          <ul>
            {comments?.map((comment, i) => {
              return (
                <li key={i}>
                  <div className="single-comment">
                    <div className="comment-avatar-img">
                      <img
                        src="/images/blog/commentAvatar.png"
                        alt="images"
                      />
                    </div>
                    <div className="comment-text">
                      <div className="comment-avatar-info">
                        <h5>
                          {comment.by}
                          <span className="comment-date">
                            {comment.createDate}
                          </span>
                        </h5>
                        {/* <a href="#" className="comment-reply-link">
                          {t(`reply`)} <i className="fas fa-reply-all" />
                        </a> */}
                      </div>
                      <p>{comment.context}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="contact-form-wrap">
          <div className="widget-title mb-50">
            <h5 className="title"> {t(`post a comment`)}</h5>
          </div>
          <div className="contact-form">
            <form onSubmit={(e) => AddComment(e)}>
              <div className="row">          
                <div className="col-md-12">
                  <textarea
                    type="text"
                    onChange={(e) => setContext(e.target.value)}
                    placeholder={t(`your comment`)}
                  />
                </div>
              </div>

              <button className="btn"> {t(`comment`)}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieDetailComp;
