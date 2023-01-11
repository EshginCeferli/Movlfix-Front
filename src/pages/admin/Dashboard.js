import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import MovieTable from "./Movie/MovieTable";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

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
            <td>
              <h3>Movies</h3>
            </td>
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
            <td>
              <h3>Blogs</h3>
            </td>
            <td>
              <Link to="/blogTable">
                <button type="button" className="btn btn-primary">
                  Manage
                </button>
              </Link>
            </td>
          </tr>

          <tr>
            <th scope="row">3</th>
            <td>
              <h3>Contact</h3>
            </td>
            <td>
              <Link to="/contactTable">
                <button type="button" className="btn btn-primary">
                  Manage
                </button>
              </Link>
            </td>
          </tr>

          <tr>
            <th scope="row">4</th>
            <td>
              <h3>Banner</h3>
            </td>
            <td>
              <Link to="/bannerTable">
                <button type="button" className="btn btn-primary">
                  Manage
                </button>
              </Link>
            </td>
          </tr>

          
          <tr>
            <th scope="row">5</th>
            <td>
              <h3>Service</h3>
            </td>
            <td>
              <Link to="/serviceTable">
                <button type="button" className="btn btn-primary">
                  Manage
                </button>
              </Link>
            </td>
          </tr>

    
          <tr>
            <th scope="row">6</th>
            <td>
              <h3>Pricing</h3>
            </td>
            <td>
              <Link to="/pricingTable">
                <button type="button" className="btn btn-primary">
                  Manage
                </button>
              </Link>
            </td>
          </tr>

          <tr>
            <th scope="row">7</th>
            <td>
              <h3>Category</h3>
            </td>
            <td>
              <Link to="/categoryTable">
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
