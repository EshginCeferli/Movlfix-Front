import React, { useEffect, useState } from "react";
import BlogDetailComp from "../../components/BlogDetailComp";
import Categories from "../../components/Categories";
import Recent from "../../components/Recent";
import SideSearch from "../../components/SideSearch";
import Tag from "../../components/Tag";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function BlogDetail() {
  const { id } = useParams();

  const getBlog = `https://localhost:7079/api/Blog/Get?id=${id}`;

  const [blog, setBlog] = useState([]);

  async function getBlogById() {
    await axios.get(getBlog).then((response) => {
      setBlog(response.data);
    });
  }

  useEffect(() => {
    getBlogById();
  }, []);

  return (
    <>
      <Navbar />
      <section
        className="blog-area blog-bg"
        style={{ backgroundImage: "url(/images/bg/blog_bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <BlogDetailComp blog={blog} />
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
      <Footer />
    </>
  );
}

export default BlogDetail;
