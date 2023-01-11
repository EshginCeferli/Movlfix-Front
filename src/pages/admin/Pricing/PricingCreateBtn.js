import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";

import { useTranslation } from "react-i18next";

function PricingCreateBtn() {

  const { t } = useTranslation();

  const url = "https://localhost:7079";

  const [pricings, setpricings] = useState([]);
  const [nameInput, setNameInput] = useState();
  const [priceInput, setPriceInput] = useState();
  const [qualityInput, setQualityInput] = useState();
  const [resolutionInput, setResolutionInput] = useState();
  const [screenInput, setScreenInput] = useState();

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

  //Get pricings from Api
  async function GetPricings() {
    await axios.get(`${url}/api/Pricing/GetAll`, config).then((res) => {
      setpricings(res.data);
    });
  }

  useEffect(() => {
    GetPricings();
  }, []);

  //Create Pricing
  async function CreatePricing() {
    await axios
      .post(
        `${url}/api/Pricing/Create`,
        {
          name: nameInput,
          price: priceInput,
          quality: qualityInput,
          resolution: resolutionInput,
          screen : screenInput
        },
        config
      )
      .then((res) => {
        window.location.reload();
        if(res.data.status === "success" || res.status === 200){
          Success.fire({
            icon: "success",
            title: "Pricing successfully created",
          });          
        }    
       
      })
      .catch(
        Reject.fire({
          icon: "error",
          title: "Something went wrong",
        })
      );
  }

 
  return (
    <div className="create-btn-area">
      <div className="my-3 me-3">
        <button
          type="button"
          className="btn btn-outline-success create-btn"
          data-bs-toggle="modal"
          data-bs-target="#create-Pricing"
        >
          +Add
        </button>
      </div>

      <div
        className="modal fade"
        id="create-Pricing"
        tabIndex="-1"
        aria-labelledquality="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              
              <button
                type="button"
                className="btn-close Pricing-button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body container addition">
              {/* <h6 className="addition-title">{t("Create your Pricing")}</h6> */}
              <div className="row">
               
                  <TextField
                    onChange={(e) => setNameInput(e.target.value)}
                    value={nameInput}
                    className="student-input"
                    id="outlined-basic"
                    label={t("Name")}
                    variant="outlined"
                  />
                  <TextField
                    onChange={(e) => setQualityInput(e.target.value)}
                    value={qualityInput}
                    className="student-input"
                    id="outlined-basic"
                    label={t("Quality")}
                    variant="outlined"
                  />
              

           
              </div>
              <div className="row mt-2">
             
                  <TextField
                    onChange={(e) => setPriceInput(e.target.value)}
                    value={priceInput}
                    className="student-input"
                    id="outlined-basic"
                    type="number"
                    label={t("Price")}
                    variant="outlined"
                    step="0.1"
                    min='0'
                    max='20'
                  />
                </div>
            
             
              <div className="row">
              
                  <TextField
                    onChange={(e) => setResolutionInput(e.target.value)}
                    value={resolutionInput}
                    className="student-input"
                    id="outlined-basic"
                    label={t("Resolution")}
                    variant="outlined"
                  />
                  <TextField
                    onChange={(e) => setScreenInput(e.target.value)}
                    value={screenInput}
                    className="student-input"
                    type="number"
                    id="outlined-basic"
                    label={t("Screen count")}
                    variant="outlined"
                  />
              

              </div>

            
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={() => CreatePricing()}
                data-bs-dismiss="modal"
                className="btn btn-outline-primary student-button"
              >
                {t("save")}
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-outline-warning student-button"
              >
                {t("cancel")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCreateBtn;
