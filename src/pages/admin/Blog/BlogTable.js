import React, { useState, useEffect } from "react";
// import MovieCreateBtn from "./MovieCreateBtn";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import BlogCreateBtn from "./BlogCreateBtn";

function BlogTable() {
  let count = 0;
  const url = "https://localhost:7079";

  const [blogs, setBlogs] = useState([]);

  const [categories, setCategories] = useState([]);

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  //sweet alert
  const Success = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  const Reject = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  //Get Movies from Api
  async function GetBlogs() {
    await axios
      .get(`${url}/api/Blog/GetAll`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setBlogs(res.data);
      });
  }
  //Get Categories from Api
  //   async function GetCategories() {
  //     await axios.get(`${url}/api/MovieCategory/GetAll`).then((res) => {
  //       setCategories(res.data);
  //     });
  //   }

  useEffect(() => {
    GetBlogs();
    // GetCategories();
  }, []);

  //Delete Movie
  const DeleteBlog = async (id) => {
    await axios
      .delete(`${url}/api/Blog/Delete?id=${id}`, config)
      .then(function (response) {
        Swal.fire("", "Deleted", "success");
        console.log(response);
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
        console.log(error);
      });
    GetBlogs();
  };

  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title d-flex justify-content-between">
            Blogs
            <BlogCreateBtn />
          </h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th> Blog Image </th>
                <th> Blog Name </th>
                <th> Blog Author </th>
                <th> Blog Description </th>
                <th> Blog Create Date </th>

                <th> Settings </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, i) => (
                <tr key={i}>
                  <td>{++count}</td>
                  <td className="py-1">
                    <img
                      style={{
                        width: "100px",
                        height: "70px",
                        borderRadius: "unset",
                      }}
                      src={`data:image/jpeg;base64,${blog.photo}`}
                      alt=""
                    />
                  </td>
                  <td className="py-1">{blog.name}</td>
                  <td className="py-1">{blog.by}</td>
                  <td className="py-1">{blog.description} min</td>
                  <td className="py-1">{blog.createDate}</td>

                  <td>
                    <Link to={`/blogUpdate/${blog.id}`}>
                      <button className="btn btn-primary">Update</button>
                    </Link>
                    <button
                      onClick={() => DeleteBlog(blog.id)}
                      type="button"
                      className="btn btn-warning"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BlogTable;
