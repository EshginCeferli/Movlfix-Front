import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";


function BlogComp() {
  
  const { t } = useTranslation();
  
  const [blogs, setBlogs] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

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


  useEffect(() => {
 
    const endOffset = itemOffset + itemsPerPage;   
    setCurrentItems(blogs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(blogs.length / itemsPerPage));
  }, [itemOffset, itemsPerPage ,blogs]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length;
    
    setItemOffset(newOffset);
  };

  return (
    <div>
      {currentItems.map((blog, i) => {
        let thumb = blog.blogImages?.find((item) => item.isMain == true).image;
        return (
          <div className="blog-post-item" key={i}>
            <div className="blog-post-thumb">
              <Link to={`/blog/${blog.id}`}>
                <img src={`/images/blog/${thumb}`} alt="" />
              </Link>
            </div>
            <div className="blog-post-content">
              <span className="date">
                <i className="far fa-clock" /> {blog.createDate}
              </span>
              <h2 className="title">
                <Link to={`/blog/${blog.id}`}>{blog.name}</Link>
              </h2>
              <p>{blog.description}</p>
              <div className="blog-post-meta">
                <ul>
                  <li>
                    <i className="far fa-user" />  {t(`by`)} <a href="#">{blog.by}</a>
                  </li>
                  <li>
                    <i className="far fa-thumbs-up" /> 63
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">12  {t(`comments`)}</a>
                  </li>
                </ul>
                <div className="read-more">
                  <Link to={`/blog/${blog.id}`}>
                  {t(`read more`)} <i className="fas fa-angle-double-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
  
   <ReactPaginate
        breakLabel="..."
        nextLabel= {t(`next>`)}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel= {t(`<previous`)}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
        breakClassName="test"
      />

    </div>
  );
}

export default BlogComp;
