import React from "react";

function BlogComp() {
  return (
    <div>
      {" "}
      <div className="blog-post-item">
        <div className="blog-post-thumb">
          <a href="blog-details.html">
            <img src="images/blog/blog_thumb01.jpg" alt="" />
          </a>
        </div>
        <div className="blog-post-content">
          <span className="date">
            <i className="far fa-clock" /> 10 Mar 2021
          </span>
          <h2 className="title">
            <a href="blog-details.html">Your Free Movie Streaming Purposes</a>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip exesa commodo consequat. Duis aute irure dolor in reprehend
            .
          </p>
          <div className="blog-post-meta">
            <ul>
              <li>
                <i className="far fa-user" /> by <a href="#">Admin</a>
              </li>
              <li>
                <i className="far fa-thumbs-up" /> 63
              </li>
              <li>
                <i className="far fa-comments" />
                <a href="#">12 Comments</a>
              </li>
            </ul>
            <div className="read-more">
              <a href="blog-details.html">
                Read More <i className="fas fa-angle-double-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-post-item">
        <div className="blog-post-thumb">
          <a href="blog-details.html">
            <img src="images/blog/blog_thumb02.jpg" alt="" />
          </a>
        </div>
        <div className="blog-post-content">
          <span className="date">
            <i className="far fa-clock" /> 10 Mar 2021
          </span>
          <h2 className="title">
            <a href="blog-details.html">Where watch English movies free?</a>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip exesa commodo consequat. Duis aute irure dolor in reprehend
            .
          </p>
          <div className="blog-post-meta">
            <ul>
              <li>
                <i className="far fa-user" /> by <a href="#">Admin</a>
              </li>
              <li>
                <i className="far fa-thumbs-up" /> 63
              </li>
              <li>
                <i className="far fa-comments" />
                <a href="#">12 Comments</a>
              </li>
            </ul>
            <div className="read-more">
              <a href="blog-details.html">
                Read More <i className="fas fa-angle-double-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-post-item">
        <div className="blog-post-thumb">
          <a href="blog-details.html">
            <img src="images/blog/blog_thumb03.jpg" alt="" />
          </a>
        </div>
        <div className="blog-post-content">
          <span className="date">
            <i className="far fa-clock" /> 10 Mar 2021
          </span>
          <h2 className="title">
            <a href="blog-details.html">House movie to is streaming website?</a>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididun labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip exesa commodo consequat. Duis aute irure dolor in reprehend
            .
          </p>
          <div className="blog-post-meta">
            <ul>
              <li>
                <i className="far fa-user" /> by <a href="#">Admin</a>
              </li>
              <li>
                <i className="far fa-thumbs-up" /> 63
              </li>
              <li>
                <i className="far fa-comments" />
                <a href="#">12 Comments</a>
              </li>
            </ul>
            <div className="read-more">
              <a href="blog-details.html">
                Read More <i className="fas fa-angle-double-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination-wrap mt-60">
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
  );
}

export default BlogComp;
