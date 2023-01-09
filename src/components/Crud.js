import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getSkeletonUtilityClass } from "@mui/material";

function Crud() {

  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [by, setBy] = useState("");
  const [name, setName] = useState("");
  const [movies, setBlogs] = useState([]);


  const createMovie = async (e) => {
    e.preventDefault();
    await axios.post(`https://localhost:7079/api/Blog/Create`, {
      Name: name,
      Description: desc,
      By: by,
      BlogImage: [{
    
      }]

    })
      .then((res) => {
        console.log(res)
      })
      .catch(error => {
        console.log(error);
      })
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
      setImage(result)
    });
  }
  //Get Movies from Api
  async function GetMovies() {
    await axios.get(`https://localhost:7079/api/Blog/GetAll`).then((res) => {
      setBlogs(res.data);
    });
  }

  useEffect(() => {
    GetMovies()
  }, [])
  console.log(movies);
  return (
    <div>

    </div>
   

  );
}

export default Crud;
