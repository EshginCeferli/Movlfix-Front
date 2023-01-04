import React from 'react'
import {Navigate, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';


function PrivateRoutes() {
 

    let currentToken = localStorage.getItem('token');
    let currentUser;
    let userRole
  
    if (currentToken === null){
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'You need to login first',
        showConfirmButton: true,
        
      }) ;      
    }
    else{
      function parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));    
        return JSON.parse(jsonPayload);
      };

       userRole = parseJwt(currentToken)["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    }      
    
      if(userRole === "Admin"){
        currentUser = currentToken;
      }    
     
  
    return currentUser ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes