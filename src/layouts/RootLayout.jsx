import React, { useContext } from "react";
import Navbar from "../pages/shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";
import Loader from "../pages/shared/Loader";

const RootLayout = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
          <Toaster />
        </>
      )}
    </div>
  );
};

export default RootLayout;
