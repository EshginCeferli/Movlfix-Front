import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

function BlogUpdateBtn() {
  const { t } = useTranslation();

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const { id } = useParams();

  const url = "https://localhost:7079";

  const [contact, setContact] = useState([]);

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  //Contact for id
  async function getContact() {
    await axios.get(`${url}/api/Contact/Get?id=${id}`).then((res) => {
      setContact(res.data);
      setAddress(res.data.address);
      setEmail(res.data.email);
      setPhone(res.data.phone);
    });
  }

  useEffect(() => {
    getContact();
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
  async function updateContact(e) {
    e.preventDefault();
    await axios
      .put(
        `${url}/api/Contact/Update/${id}`,
        {
          Address: address,
          Phone: phone,
          Email: email,
        },
        config
      )
      .then((res) => {
        Success.fire({
          icon: "success",
          title: "Contact successfully updated",
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
      <Form onSubmit={(e) => updateContact(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Contact Address"
            onChange={(e) => setAddress(e.target.value)}
            defaultValue={address}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDatetime">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Contact Number"
            onChange={(e) => setPhone(e.target.value)}
            defaultValue={phone}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDatetime">
          <Form.Label>Contact email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Contact Email"
            onFocus={(e) => setEmail(e.target.value)}
            defaultValue={email}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default BlogUpdateBtn;
