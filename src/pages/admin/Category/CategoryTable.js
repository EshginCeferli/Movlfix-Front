import React, { useState, useEffect } from "react";
// import MovieCreateBtn from "./MovieCreateBtn";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import CategoryUpdateBtn from "./CategoryUpdateBtn";
import CategoryCreateBtn from "./CategoryCreateBtn";

function CategoryTable() {
  let count = 0;

  const url = "https://localhost:7079";

  const [category, setCategory] = useState([]);

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
  async function getCategory() {
    await axios.get(`${url}/api/MovieCategory/GetAll`).then((res) => {
      setCategory(res.data);
    });
  }

  useEffect(() => {
    getCategory();
  }, []);

    //Delete Category
    const DeleteCategory = async (id) => {
      await axios
        .delete(`${url}/api/MovieCategory/Delete?id=${id}`, config)
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
      getCategory();
    };
  

  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title d-flex justify-content-between">
            Category
            <CategoryCreateBtn/>
          </h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th> Name </th>

                <th> Settings </th>
              </tr>
            </thead>
            <tbody>
              {category?.map((cat, i) => (
                <tr key={i}>
                  <td>{++count}</td>

                  <td className="py-1">{cat.name}</td>

                  <td>
                    <Link to={`/categoryUpdate/${cat.id}`}>
                      <button className="btn btn-primary">Update</button>
                    </Link>

                    <button
                      onClick={() => DeleteCategory(cat.id)}
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

export default CategoryTable;
