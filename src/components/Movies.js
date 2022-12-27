import React, { useState, useEffect, useRef } from "react";
import Categories from "./Categories";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";

function Movies() {
  const { t } = useTranslation();

  const baseUrlMovie = "https://localhost:7079/api/Movie/GetAll";

  const [movies, setMovies] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const ref = useRef(null);
  const itemsPerPage = 6;

  //Get Movie from Api
  async function getAllMovies() {
    await axios.get(baseUrlMovie).then((response) => {
      setMovies(response.data);
    });
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(movies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(movies.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, movies]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % movies.length;

    setItemOffset(newOffset);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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
                <span className="sub-title">{t(`online streaming`)}</span>
                <h2 className="title" ref={ref}>
                  {t(`new release movies`)}
                </h2>
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
                    {currentItems?.map((movie, i) => {
                      return (
                        <div
                          className="col-xl-4 col-lg-4 col-sm-6 grid-item grid-sizer cat-two"
                          key={i}
                        >
                          <div className="movie-item movie-item-three mb-5">
                            <Link to={`/movie/${movie.id}`}>
                              <div className="movie-poster">
                                <img
                                  src={`/images/poster/${movie.poster}`}
                                  alt=""
                                />
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
                                      {t(`watch now`)}
                                    </a>
                                  </li>
                                  <li>
                                    <Link
                                      to={`/movie/${movie.id}`}
                                      className="btn"
                                    >
                                      {t(`details`)}
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </Link>
                            <div className="movie-content">
                              <div className="top">
                                <h5 className="title">
                                  <a href="movie-details.html">{movie.name}</a>
                                </h5>
                                <span className="date">
                                  {movie.releaseYear}
                                </span>
                              </div>
                              <div className="bottom">
                                <ul>
                                  <li>
                                    <span className="quality">hd</span>
                                  </li>
                                  <li>
                                    <span className="duration">
                                      <i className="far fa-clock" />{" "}
                                      {movie.length} {t(`our`)}
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
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel={t(`next>`)}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={1}
                    pageCount={pageCount}
                    previousLabel={t(`<previous`)}
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    previousClassName="page-num"
                    nextLinkClassName="page-num"
                    activeLinkClassName="active"
                  />
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
