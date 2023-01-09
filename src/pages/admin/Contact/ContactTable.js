import React, { useState, useEffect } from "react";
// import MovieCreateBtn from "./MovieCreateBtn";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import ContactUpdateBtn from "./ContactUpdateBtn";

function ContactTable() {
  let count = 0;
  
  const url = "https://localhost:7079";

  const [contact, setContact] = useState([]);

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
  async function getContact() {
    await axios.get(`${url}/api/Contact/GetAll`, config).then((res) => {
      setContact(res.data);
    });
  }

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title d-flex justify-content-between">Contact</h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th> Address </th>
                <th> Contact Number </th>
                <th> Email </th>

                <th> Settings </th>
              </tr>
            </thead>
            <tbody>
              {contact?.map((cont, i) => (
                <tr key={i}>
                  <td>{++count}</td>

                  <td className="py-1">{cont.address}</td>
                  <td className="py-1">{cont.phone}</td>
                  <td className="py-1">{cont.email} </td>

                  <td>
                    <Link to={`/contactUpdate/${cont.id}`}>
                      <button className="btn btn-primary">Update</button>
                    </Link>
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

export default ContactTable;
