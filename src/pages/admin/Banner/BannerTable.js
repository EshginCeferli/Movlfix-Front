import React, { useState, useEffect } from "react";
// import MovieCreateBtn from "./MovieCreateBtn";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import BannerCreate from "./BannerCreate"

function BannerTable() {
  let count = 0;
  const url = "https://localhost:7079";

  const [banner, setbanner] = useState([]);

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
  async function GetBanner() {
    await axios
      .get(`${url}/api/Banner/GetAll`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setbanner(res.data);
      });
  }

  useEffect(() => {
    GetBanner();
    
  }, []);

  //Delete Banner
  const DeleteBanner = async (id) => {
    await axios
      .delete(`${url}/api/Banner/Delete?id=${id}`, config)
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
    GetBanner();
  };

  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title d-flex justify-content-between">
            Banner
            <BannerCreate />
          </h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th> Banner Image </th>
                <th> Banner Create Date </th>
                <th> Settings </th>
              </tr>
            </thead>
            <tbody>
              {banner.map((Banner, i) => (
                <tr key={i}>
                  <td>{++count}</td>
                  <td className="py-1">
                    <img
                      style={{
                        width: "100px",
                        height: "70px",
                        borderRadius: "unset",
                      }}
                      src={`data:image/jpeg;base64,${Banner.image}`}
                      alt=""
                    />
                  </td>         
                  <td className="py-1">{Banner.createDate}</td>
                  <td>
                    <Link to={`/bannerUpdate/${Banner.id}`}>
                      <button className="btn btn-primary">Update</button>
                    </Link>
                    <button
                      onClick={() => DeleteBanner(Banner.id)}
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

export default BannerTable;
