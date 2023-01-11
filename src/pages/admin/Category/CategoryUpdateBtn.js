import axios from "axios";
import React, { useEffect, useState } from "react";

import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

function CategoryUpdateBtn() {
  const { t } = useTranslation();

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const { id } = useParams();

  const url = "https://localhost:7079";

  const [category, setCategory] = useState([]);

  const [name, setName] = useState("");

  //Category for id
  async function getCategory() {
    await axios.get(`${url}/api/MovieCategory/Get?id=${id}`).then((res) => {
      setCategory(res.data);
      setName(res.data.name);      
    });
  }

  useEffect(() => {
    getCategory();
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

  //Category Update
  async function updateCategory(e) {
    e.preventDefault();
    await axios
      .put(
        `${url}/api/MovieCategory/Update/${id}`,
        {
          Name : name
        },
        config
      )
      .then((res) => {
        Success.fire({
          icon: "success",
          title: "Category successfully updated",
        });
      })
      .catch(
        Reject.fire({
          icon: "error",
          title: "Something went wrong",
        })
      );
  }

  return (
    <div className="container">
      <Form onSubmit={(e) => updateCategory(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Category Address"
            onChange={(e) => setName(e.target.value)}
            defaultValue={name}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CategoryUpdateBtn;
