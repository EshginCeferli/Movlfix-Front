import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";

import { useTranslation } from "react-i18next";

function BannerCreate() {
  const { t } = useTranslation();

  const url = "https://localhost:7079";

  const [banner, setBanner] = useState([]);
  const [image, setImage] = useState();


  let token = localStorage.getItem("token");

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

   //Get Banner from Api
   async function GetBanner() {
    await axios.get(`${url}/api/Banner/GetAll`,  config).then((res) => {
      setBanner(res.data);
    });
  }


  useEffect(() => {
    GetBanner();
   
  }, []);

  //Create Banner
  async function CreateBanner() {
    await axios
      .post(
        `${url}/api/Banner/Create`,
        {                   
          Image : image
        }        
      )
      .then((res) => {

       
        Success.fire({
          icon: "success",
          title: "Banner successfully created",
        });
        window.location.reload();
      }
      )
      .catch(
        Reject.fire({
          icon: "error",
          title: "Something went wrong",
        })
      );
      
  }


  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () =>
        resolve(reader.result.replace("data:", "").replace(/^.+,/, ""));
      reader.onerror = (error) => reject(error);
    });
  }

  function base64Img(file) {
    var base64String = getBase64(file);
    base64String.then(function (result) {
      setImage(result);
      
    });
  }
  return (
    <div className="create-btn-area">
      <div className="my-3 me-3">
        <button
          type="button"
          className="btn btn-outline-success create-btn"
          data-bs-toggle="modal"
          data-bs-target="#create-Banner"
        >
          +Add
        </button>
      </div>

      <div
        className="modal fade"
        id="create-Banner"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title create-header" id="exampleModalLabel">
                {t("please fill the blank")}:
              </h5>
              <button
                type="button"
                className="btn-close Banner-button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body container addition">
              <h6 className="addition-title">{t("Create your Banner")}</h6>
              <div className="row">
                <div className="col-6"></div>
                <div className="col-6"></div>
              </div>
              <div className="row mt-2">
                <div className="col-6"></div>
              </div>
              <h6 className="mt-4 addition-title">{t("contact")}</h6>
             
              <div className="row my-3">
              
                <input type="file"  onChange={(e) => base64Img(e.target.files[0])}></input>
               
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" onClick={() =>  CreateBanner()} data-bs-dismiss="modal" className="btn btn-outline-primary student-button">{t("save")}</button>
              <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning student-button">{t("cancel")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCreate;
