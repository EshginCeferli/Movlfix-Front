import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';

function ForgotPassword() {
  const [password, setPassword] = useState();
  const [checkpass, setCheckpass] = useState();
  const { email } = useParams();
  let route = window.location.href;
  let token = route.split('token=')[1];

  function reset(e) {
    debugger
    let obj = {
      Password: password,
      Email: email,
      Token: token
    }
    e.preventDefault()
    if (password === checkpass) {
      axios.post(`https://localhost:7079/api/Account/ResetPassword`, obj
        , { 'Content-Type': 'multipart/form-data' })
        .then(function (response) {

          Swal.fire(
            "Şifrəniz Yeniləndi",
            'Updated',
            'success'
          )
        })
        .catch(function (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })

        });
    }
  }

  const { t } = useTranslation();
  return (
    <div className='row justify-content-between container'>
      <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
        <h2 className='mt-5'>{t("shifreyenile")}</h2>
        <div className='passwords mt-5'>
          <Form onSubmit={(e) => reset(e)}>
            <div className='mt-4 updatepassw'>
              <Form.Group className="mb-3" onChange={(e) => setPassword(e.target.value)} controlId="formBasicPassword">
                <Form.Label className='labtext'>{t("newpass")}</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" onChange={(e) => setCheckpass(e.target.value)} controlId="formBasicConfirmPassword">
                <Form.Label className='labtext'>{t("confirmnewpass")}  </Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>
            </div>
            <div className='mt-4 '>
              <div className='passbut'>
                <Button className='passbutton' type="submit">
                  {t("savechanges")}
                </Button>
              </div>

            </div>
          </Form>
        </div>
      </div>

    </div>
  )
}

export default ForgotPassword