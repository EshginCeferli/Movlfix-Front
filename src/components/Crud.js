import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import StarRatings from "react-star-ratings";
import ReactStars from "react-stars";
import { useState } from "react";

function Crud() {


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
     console.log(result);
    });
  }

  return (
    <div>
      <input type="file"
      onChange={(e) => base64Img(e.target.files[0])}></input>
    </div>
  );
}

export default Crud;
