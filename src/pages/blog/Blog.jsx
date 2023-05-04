import React, { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const Blog = () => {
  const questions = useLoaderData();
  const ref = useRef();

  const generatePdf = () => {
    const doc = new jsPDF();
    doc.html(ref.current, {
      callback: function () {
        doc.save("code-example.pdf");
      },
      html2canvas: { scale: 0.5 },
    });
  };

  return (
    <>
      <div className="bg-rose-100">
        <Pdf targetRef={ref} filename="questions.pdf" pageSize="A4">
          {({ toPdf }) => (
            <button
              className="px-3 py-1 bg-rose-500 text-white font-semibold rounded-r-full shadow-md"
              onClick={toPdf}
            >
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>
      <div className="mb-10" ref={ref}>
        <div className="text-center bg-primary py-5">
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
    </>
  );
};

export default Blog;
