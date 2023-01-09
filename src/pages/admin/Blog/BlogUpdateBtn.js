import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";


function BlogUpdateBtn() {
    const { t } = useTranslation();
    const { id } = useParams();

    let token = localStorage.getItem("token");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const url = "https://localhost:7079";

    const [blog, setblog] = useState([]);
    const [nameInput, setNameInput] = useState("");
    const [descInput, setDescInput] = useState("");
    const [byInput, setByInput] = useState("");
    const [photo, setPhoto] = useState("");


    //Blog for id
    async function GetBlog() {
        await axios.get(`${url}/api/Blog/Get?id=${id}`).then((res) => {
            setblog(res.data);
            setNameInput(res.data.name);
            setDescInput(res.data.description);
            setByInput(res.data.by);          
            setPhoto(res.data.photo);
           
        });
    }

    useEffect(() => {
        GetBlog();
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
    async function UpdateBlog(e) {
        e.preventDefault();
        await axios
            .put(`${url}/api/Blog/Update/${id}`, {
                id: id,
                name: nameInput,
                description: descInput,
                by: byInput,
                photo: photo
            },config)
            .then((res) => {

                Success.fire({
                    icon: "success",
                    title: "Blog successfully updated",
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
            setPhoto(result)
        });
    }



    return (
        <div className="container">
            <Form onSubmit={(e) => UpdateBlog(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Blog Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Blog Name"
                        onChange={(e) => setNameInput(e.target.value)}
                        defaultValue={nameInput}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDatetime">
                    <Form.Label>Blog Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Blog Description"
                        onChange={(e) => setDescInput(e.target.value)}
                        defaultValue={descInput}
                    />
                </Form.Group>
              
                <Form.Group className="mb-3" controlId="formBasicDatetime">
                    <Form.Label>Blog Author</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Blog Author"
                        onFocus={(e) => setByInput(e.target.value)}
                        defaultValue={byInput}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDatetime">
                    <Form.Label>Movie Thumb</Form.Label>
                    <Form.Control


                        type="file" onChange={(e) => base64Img(e.target.files[0])}
                        defaultValue={photo}
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
