import React from "react";
import BlogComp from "../../components/BlogComp";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Recent from "../../components/Recent";
import SideSearch from "../../components/SideSearch";
import Tag from "../../components/Tag";

function Blog() {
  return (<>
    <Navbar/>
    <section
      className="blog-area blog-bg"
      style={{ backgroundImage: "url(/images/bg/blog_bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <BlogComp />
          </div>
          <div className="col-lg-4">
            <aside className="blog-sidebar">
              <SideSearch />
              <Categories />
              <Recent />
              <Tag />
            </aside>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}

export default Blog;
