import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { FaHome, FaRegDizzy } from "react-icons/fa";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <FaRegDizzy className="text-6xl sm:text-9xl text-gray-600" />
        <div className=" text-center">
          <h2 className="mb-8 font-extrabold text-6xl sm:text-9xl text-gray-600">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="flex items-center mx-auto gap-2 w-fit px-8 py-3 font-semibold gradient text-white bg-gray-600"
          >
            <FaHome className="text-xl" /> Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
