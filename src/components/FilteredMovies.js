import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactPaginate from "react-paginate";

function FilteredMovies(props) {
  const { t } = useTranslation();
  const ref = useRef(null);

  //Pagineate items
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  //Paginate function
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(props.result?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(props.result?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, props.result]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % props.result?.length;

    setItemOffset(newOffset);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  console.log();
  return (
    <div className="row" ref={ref}>
      {currentItems?.map((movie, i) => {
        return (
          <div
            className="col-xl-4 col-lg-4 col-sm-6 grid-item grid-sizer cat-two"
            key={i}
          >
            <div className="movie-item movie-item-three mb-5">
              <Link to={`/movie/${movie.id}`}>
                <div className="movie-poster">
                  <img src={`/images/poster/${movie.poster}`} alt="" />
                  <ul className="overlay-btn">
                    <li className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <Link
                        to="https://www.youtube.com/watch?v=R2gbPxeNk2E"
                        className="popup-video btn"
                      >
                        {t(`watch now`)}
                      </Link>
                    </li>
                    <li>
                      <Link to={`/movie/${movie.id}`} className="btn">
                        {t(`details`)}
                      </Link>
                    </li>
                  </ul>
                </div>
              </Link>
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
                        <i className="far fa-clock" /> {movie.length} {t(`min`)}
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
      <ReactPaginate
        breakLabel="..."
        nextLabel={t(`next>`)}
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel={t(`previous`)}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </div>
  );
}

export default FilteredMovies;
