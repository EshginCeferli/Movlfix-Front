import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

function BlogComp() {
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
  
   <ReactPaginate
        breakLabel="..."
        nextLabel="next>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
        breakClassName="test"
      />

      {/* <div className="pagination-wrap mt-60">
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
      </div> */}
    </div>
  );
}

export default BlogComp;
