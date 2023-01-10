import React from "react";
import BlogComp from "../../components/BlogComp";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Recent from "../../components/Recent";
import SideSearch from "../../components/SideSearch";
import Tag from "../../components/Tag";
import Trial from "../../components/Trial"

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
            
            </aside>
          </div>
        </div>
      
      </div>
    </section>
    <Trial/>
    <Footer/>
    </>
  );
}

export default Blog;
