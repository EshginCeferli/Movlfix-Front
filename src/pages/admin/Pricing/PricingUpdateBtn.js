import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

function PricingUpdateBtn() {
  const { t } = useTranslation();
  const { id } = useParams();

  let token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const url = "https://localhost:7079";

  const [pricings, setpricings] = useState([]);
  const [nameInput, setNameInput] = useState();
  const [priceInput, setPriceInput] = useState();
  const [qualityInput, setQualityInput] = useState();
  const [resolutionInput, setResolutionInput] = useState();
  const [screenInput, setScreenInput] = useState();

  //Pricing for id
  async function GetPricing() {
    await axios.get(`${url}/api/Pricing/Get?id=${id}`).then((res) => {
      setpricings(res.data);
      setNameInput(res.data.name);
      setPriceInput(res.data.price);
      setQualityInput(res.data.quality);
      setResolutionInput(res.data.resolution);
      setScreenInput(res.data.screen);
    });
  }

  useEffect(() => {
    GetPricing();
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
  async function UpdatePricing(e) {
    e.preventDefault();
    await axios
      .put(
        `${url}/api/Pricing/Update/${id}`,
        {
          name: nameInput,
          price: priceInput,
          quality: qualityInput,
          resolution: resolutionInput,
          screen: screenInput,
        },
        config
      )
      .then((res) => {
        Success.fire({
          icon: "success",
          title: "Pricing successfully updated",
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
      <Form onSubmit={(e) => UpdatePricing(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Subscription Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Pricing Name"
            onChange={(e) => setNameInput(e.target.value)}
            defaultValue={nameInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDatetime">
          <Form.Label>Subscription price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Subscription Price"
            onChange={(e) => setPriceInput(e.target.value)}
            defaultValue={priceInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDatetime">
          <Form.Label>Pricing Quality</Form.Label>
          <Form.Control
           
            placeholder="Enter Pricing Quality"
            onFocus={(e) => setQualityInput(e.target.value)}
            defaultValue={qualityInput}
            step="0.1"
            min="0"
            max="20"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDatetime">
          <Form.Label>Pricing Resolution</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Pricing Resolution"
            onFocus={(e) => setResolutionInput(e.target.value)}
            defaultValue={resolutionInput}
          />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="formBasicDatetime">
          <Form.Label>Screen Count</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Screen Count"
            onFocus={(e) => setScreenInput(e.target.value)}
            defaultValue={screenInput}           
            min="0"           
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default PricingUpdateBtn;
