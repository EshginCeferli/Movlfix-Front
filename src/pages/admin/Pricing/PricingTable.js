import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import PricingCreateBtn from "./PricingCreateBtn";

function PricingTable() {
  let count = 0;
  const url = "https://localhost:7079";

  const [pricings, setPricings] = useState([]);


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

  //Get Pricings from Api
  async function GetPricings() {
    await axios
      .get(`${url}/api/Pricing/GetAll`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setPricings(res.data);
      });
  }

  useEffect(() => {
    GetPricings();
    // GetCategories();
  }, []);

  //Delete Movie
  const DeletePricing = async (id) => {
    await axios
      .delete(`${url}/api/Pricing/Delete?id=${id}`, config)
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
    GetPricings();
  };

  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title d-flex justify-content-between">
            Pricings
            <PricingCreateBtn />
          </h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
               
                <th> Subscription type </th>
                <th> Price </th>
                <th> Quality </th>
                <th> Resolution </th>
                <th> Screen count </th>
                <th> Create date</th>

                <th> Settings </th>
              </tr>
            </thead>
            <tbody>
              {pricings.map((pricing, i) => (
                <tr key={i}>
                  <td>{++count}</td>
                  
                  <td className="py-1">{pricing.name}</td>
                  <td className="py-1">{pricing.price} $</td>
                  <td className="py-1">{pricing.quality} </td>
                  <td className="py-1">{pricing.resolution}</td>
                  <td className="py-1">{pricing.screen}</td>
                  <td className="py-1">{pricing.createDate}</td>

                  <td>
                    <Link to={`/pricingUpdate/${pricing.id}`}>
                      <button className="btn btn-primary">Update</button>
                    </Link>
                    <button
                      onClick={() => DeletePricing(pricing.id)}
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

export default PricingTable;
