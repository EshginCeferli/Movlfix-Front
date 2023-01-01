import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
function MovieUpdateBtn(props) {
  const { t } = useTranslation();
  const { id } = useParams();
  const location = useLocation();
  const categories = location.state;

  

 
  const url = "https://localhost:7079";

  const [movie, setMovie] = useState([]);
  const [nameInput, setNameInput] = useState();
  const [descInput, setDescInput] = useState("");
  const [lengthInput, setLengthInput] = useState("");
  const [releaseInput, setReleaseInput] = useState("");
  const [posterInput, setPosterInput] = useState("");
  const [countryInput, setCountryInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

 

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
  async function UpdateMovie(e) {
    e.preventDefault();
    await axios
      .put(`${url}/api/Movie/Update/${id}`, {
        id : id,
        name: nameInput,
        description: descInput,
        length: lengthInput,
        poster: posterInput,
        releaseYear: releaseInput,
        country: countryInput,
        movieCategoryId: categoryInput,
      })
      .then((res) => {
        // setNameInput("");
        // setDescInput("");
        // setLengthInput("");
        // setReleaseInput("");
        // setCountryInput("");
        // setCategoryInput("");
        Success.fire({
          icon: "success",
          title: "Movie successfully updated",
        });
      })
      .catch(
        Reject.fire({
          icon: "error",
          title: "Something went wrong",
        })
      );
  }

  async function GetMovie(){
    await axios
    .get(`${url}/api/Movie/Get?id=${id}`)
    .then((res) =>{
        setMovie(res.data)
        setNameInput(res.data.name)
        setDescInput(res.data.description)
        setCountryInput(res.data.country)
        setLengthInput(res.data.length)
        setPosterInput(res.data.poster)
        setReleaseInput(res.data.releaseYear)   
        setCategoryInput(res.data.movieCategory.id) 
       
    })  
  }

  useEffect(() =>{
    GetMovie()
  },[])
console.log(categoryInput);
  return (
    <div className="container">
      <Form onSubmit={(e) => UpdateMovie(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Movie Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Movie Name"
            onChange={(e) => setNameInput(e.target.value)}
            defaultValue={nameInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDatetime">
          <Form.Label>Movie Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Movie Description"
            onChange={(e) => setDescInput(e.target.value)}
            defaultValue={descInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDatetime">
          <Form.Label>Movie length</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Movie Description"
            onChange={(e) => setLengthInput(e.target.value)}
            defaultValue={lengthInput} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDatetime">
          <Form.Label>Movie Release year</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Movie Release year"
            onChange={(e) => setReleaseInput(e.target.value)}
            defaultValue={releaseInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDatetime">
          <Form.Label>Movie Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Movie Country"
            onFocus={(e) => setCountryInput(e.target.value)}
            defaultValue={countryInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDatetime">
          <Form.Label>Movie Poster</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Movie Poster"
            onChange={(e) => setPosterInput(e.target.value)}
            defaultValue={posterInput}
          />
        </Form.Group>

        <Form.Group className='mt-2'>
          <Form.Select aria-label="Event Category" onChange={(e) => setCategoryInput(e.target.value)} >
    
            {categories.map((category =>
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default MovieUpdateBtn;
