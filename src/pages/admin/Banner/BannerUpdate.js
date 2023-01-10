import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";


function BannerUpdate() {
  const { t } = useTranslation();
  const { id } = useParams();

  let token = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const url = "https://localhost:7079";

  const [banner, setbanner] = useState([]);
  const [image, setImage] = useState("");



  //banner for id
  async function Getbanner() {
    await axios.get(`${url}/api/Banner/Get?id=${id}`).then((res) => {
      setbanner(res.data);
      setImage(res.data.image);

    });
  }

  useEffect(() => {
    Getbanner();
  }, []);

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

  //Movie Update
  async function Updatebanner(e) {
    e.preventDefault();
    await axios
      .put(`${url}/api/Banner/Update/${id}`, {
        
        Image: image
      }, config)
      .then((res) => {      
        Success.fire({
          icon: "success",
          title: "Banner successfully updated",
        });
       
     
      })
      .catch(
        Reject.fire({
          icon: "error",
          title: "Something went wrong",
        })
      );
  }

  //Convert img to base
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.replace('data:', '')
        .replace(/^.+,/, ''))
      reader.onerror = error => reject(error);
    });
  }

  function base64Img(file) {
    var base64String = getBase64(file);
    base64String.then(function (result) {
      setImage(result)
    });
  }



  return (
    <div className="container">
      <Form onSubmit={(e) => Updatebanner(e)}>


        <Form.Group className="mb-3" controlId="formBasicDatetime">
         <h1>Banner Image</h1>
            <img
              style={{
                width: "200px",
                height: "100px",
                borderRadius: "unset",
              }}
              src={`data:image/jpeg;base64,${image}`}
              alt=""
            />
          <Form.Control

            type="file" onChange={(e) => base64Img(e.target.files[0])}
            defaultValue={image}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default BannerUpdate;
