import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useTranslation } from "react-i18next";
function Recent() {
  const { t } = useTranslation();

  const url = "https://localhost:7079";

  const [blogs, setBlogs] = useState([]);

  async function GetBlogs() {
    await axios.get(`${url}/api/Blog/GetRecentBlogs`).then((res) => {
      setBlogs(res.data);
    });
  }

  useEffect(() => {
    GetBlogs();
  }, []);

  return (
    <div className="widget blog-widget">
      <div className="widget-title mb-3">
        <h5 className="title">{t(`recent posts`)}</h5>
      </div>
      <div className="rc-post">
        <ul>
          {blogs.map((blog, i) => {
            return (
              <li className="rc-post-item" key={i}>
                <div className="thumb">
                <Link to={`/blog/${blog.id}`}>
              <img src={`data:image/jpeg;base64,${blog.photo}`} alt="" />
              </Link>
                </div>
                <div className="content">
                  <h5 className="title">
                    <Link to={`/blog/${blog.id}`} >{blog.name}</Link>
                  </h5>
                  <span className="date">
                    <i className="far fa-clock" /> {blog.createDate}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Recent;
