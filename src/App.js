import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
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
import Crud from "./components/Crud";
import BlogTable from "./pages/admin/Blog/BlogTable";
import BlogUpdateBtn from "./pages/admin/Blog/BlogUpdateBtn";
import ContactTable from "./pages/admin/Contact/ContactTable";
import ContactUpdateBtn from "./pages/admin/Contact/ContactUpdateBtn";
import BannerTable from "./pages/admin/Banner/BannerTable";
import BannerUpdate from "./pages/admin/Banner/BannerUpdate";
import ServiceTable from "./pages/admin/Service/ServiceTable";
import ServiceUpdate from "./pages/admin/Service/ServiceUpdate";
import PricingTable from "./pages/admin/Pricing/PricingTable";
import PricingUpdateBtn from "./pages/admin/Pricing/PricingUpdateBtn";
import CategoryTable from "./pages/admin/Category/CategoryTable";
import CategoryUpdateBtn from "./pages/admin/Category/CategoryUpdateBtn";
import About from "./pages/about/About";
import Terms from "./pages/terms/Terms";
import Privacy from "./pages/privacy/Privacy";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie" element={<Movie />} />
        <Route exact path="/movie/:id" element={<MovieDetail />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog/:id" element={<BlogDetail />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgotpassword/:email/*" element={<ForgotPassword />} />
        <Route exact path="/updatePassword" element={<UpdatePassword />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/privacy" element={<Privacy />} />

        <Route element={<PrivateRoutes />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/movieTable" element={<MovieTable />} />
          <Route exact path="/movieUpdate/:id" element={<MovieUpdateBtn />} />
          <Route exact path="/blogTable" element={<BlogTable />} />
          <Route exact path="/blogUpdate/:id" element={<BlogUpdateBtn />} />
          <Route exact path="/contactTable" element={<ContactTable />} />
          <Route exact path="/contactUpdate/:id" element={<ContactUpdateBtn />} />
          <Route exact path="/bannerTable" element={<BannerTable />} />
          <Route exact path="/bannerUpdate/:id" element={<BannerUpdate />} />
          <Route exact path="/serviceTable" element={<ServiceTable />} />
          <Route exact path="/serviceUpdate/:id" element={<ServiceUpdate />} />
          <Route exact path="/pricingTable" element={<PricingTable />} />
          <Route exact path="/pricingUpdate/:id" element={<PricingUpdateBtn />} />
          <Route exact path="/categoryTable" element={<CategoryTable />} />
          <Route exact path="/categoryUpdate/:id" element={<CategoryUpdateBtn />} />
        </Route>
      </Routes>
      <Crud />
    </div>
  );
}

export default App;
