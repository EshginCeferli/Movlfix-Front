import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import ServiceCreateBtn from "../Service/ServiceCreateBtn";

function ServiceTable() {
  let count = 0;
  const url = "https://localhost:7079";

  const [service, setservice] = useState([]);

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

  //Get Service from Api
  async function GetService() {
    await axios
      .get(`${url}/api/Servise/GetAll`)
      .then((res) => {
        setservice(res.data);
      });
  }

  useEffect(() => {
    GetService();
    
  }, []);

  //Delete Service
  const DeleteService = async (id) => {
    await axios
      .delete(`${url}/api/Servise/Delete?id=${id}`, config)
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
    GetService();
  };

  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title d-flex justify-content-between">
            Service
            <ServiceCreateBtn/> 
          </h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th> Service Image </th>
                <th> Service Create Date </th>
                <th> Settings </th>
              </tr>
            </thead>
            <tbody>
              {service.map((Service, i) => (
                <tr key={i}>
                  <td>{++count}</td>
                  <td className="py-1">
                    <img
                      style={{
                        width: "100px",
                        height: "70px",
                        borderRadius: "unset",
                      }}
                      src={`data:image/jpeg;base64,${Service.image}`}
                      alt=""
                    />
                  </td>         
                  <td className="py-1">{Service.createDate}</td>
                  <td>
                    <Link to={`/serviceUpdate/${Service.id}`}>
                      <button className="btn btn-primary">Update</button>
                    </Link>
                    <button
                      onClick={() => DeleteService(Service.id)}
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

export default ServiceTable;
