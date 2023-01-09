import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import MovieDetail from "./pages/movieDetail/MovieDetail";
import Pricing from "./pages/pricing/Pricing";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import ForgotPassword from "./pages/login/ForgotPassword";
import BlogDetail from "./pages/blogDetail/BlogDetail";
import Dashboard from "./pages/admin/Dashboard";
import MovieTable from "./pages/admin/Movie/MovieTable";
import MovieUpdateBtn from "./pages/admin/Movie/MovieUpdateBtn";
import PrivateRoutes from "./components/PrivateRoutes";
import Login from "./pages/login/Login";
import UpdatePassword from "./pages/login/UpdatePassword";
import Profile from "./pages/profile/Profile";
import Crud from "./components/Crud"
import BlogTable from "./pages/admin/Blog/BlogTable";
import BlogUpdateBtn from "./pages/admin/Blog/BlogUpdateBtn";
import ContactTable from "./pages/admin/Contact/ContactTable";
import ContactUpdateBtn from "./pages/admin/Contact/ContactUpdateBtn";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/movie" element={<Movie />} />
        <Route exact path="/movie/:id" element={<MovieDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route exact path="/forgotpassword/:email/*" element={<ForgotPassword />} />
        <Route path="/updatePassword" element={<UpdatePassword/>} />
        <Route path="/profile" element={<Profile/>} />


        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/movieTable" element={<MovieTable />} />
          <Route path="/movieUpdate/:id" element={<MovieUpdateBtn />} />
          <Route exact path="/blogTable" element={<BlogTable/>} />
          <Route path="/blogUpdate/:id" element={<BlogUpdateBtn/>} />
          <Route exact path="/contactTable" element={<ContactTable/>} />
          <Route path="/contactUpdate/:id" element={<ContactUpdateBtn/>} />

        </Route>
      </Routes>
      <Crud/>
    </div>
  );
}

export default App;
