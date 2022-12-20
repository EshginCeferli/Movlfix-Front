import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BlogComp() {
  const [blogs, setBlogs] = useState([]);

  //All Blogs Url
  const baseUrl = "https://localhost:7079/api/Blog/GetAll";

  function GetAllBlogs() {
    axios.get(baseUrl).then((response) => {
      setBlogs(response.data);
    });
  }

  useEffect(() => {
    GetAllBlogs();
  }, []);

  return (
    <div>
      {blogs.map((blog, i) => {
        let thumb = blog.blogImages.find((item) => item.isMain == true).image;
        return (
          <div className="blog-post-item" key={i}>
            <div className="blog-post-thumb">
              <a href="blog-details.html">
                <img src={`/images/blog/${thumb}`} alt="" />
              </a>
            </div>
            <div className="blog-post-content">
              <span className="date">
                <i className="far fa-clock" /> 10 Mar 2021
              </span>
              <h2 className="title">
                <a href="blog-details.html">{blog.name}</a>
              </h2>
              <p>{blog.description}</p>
              <div className="blog-post-meta">
                <ul>
                  <li>
                    <i className="far fa-user" /> by <a href="#">{blog.by}</a>
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
                  <Link to={`/blog/${blog.id}`}>
                    Read More <i className="fas fa-angle-double-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

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
