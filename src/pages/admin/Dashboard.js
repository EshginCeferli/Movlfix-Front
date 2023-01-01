import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import MovieTable from "./Movie/MovieTable";

export default function Dashboard() {
  return (

<>

    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Choose the component </th>
          <th scope="col">Settings </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td><h3>Movies</h3></td>
          <td>
            <Link to="/movieTable">
              <button type="button" className="btn btn-primary">
                Manage
              </button>
            </Link>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Blog</td>
          <td>
            <Link to="/">
              <button type="button" className="btn btn-primary">
                Manage
              </button>
            </Link>
          </td>
        </tr>
      </tbody>
     
    </table>
  
 </>

  );
}
