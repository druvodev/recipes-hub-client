import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
  const questions = useLoaderData();
  console.log(questions);

  return (
    <div className="mb-10">
      <div className="text-center bg-primary py-5 sm:pt-10">
        <Link to={"/"} className="sm:hidden">
          <h2 className="text-xl font-bold tracking-wide">JobHunter</h2>
        </Link>
        <h2 className="text-xl sm:text-2xl font-semibold">
          Find Your Question
        </h2>
      </div>
      <div className="px-5 sm:px-10 grid sm:grid-cols-2 gap-5 gap-y-8">
        {questions.map((question) => (
          <div
            key={question.id}
            className="bg-gray-100 rounded-md overflow-hidden shadow shadow-violet-300"
          >
            <h2 className="text-lg sm:text-xl px-5 pt-2 font-semibold tracking-wide bg-gray-400 text-white bg-gradient">
              {question.question}
            </h2>
            <p className="px-5 pt-1 pb-5 text-gray-600">{question.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
