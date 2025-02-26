import React from "react";

function MainContent1({ title, highlight, description }) {
  return (
    <section
      id="main"
      className="mx-4 md:mx-auto max-w-4xl my-10 flex flex-col-reverse md:flex-row items-stretch"
    >
      <div className="w-full p-6 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed text-center">
          {title} <span className="text-pink-600 text-3xl">{highlight}</span>
        </h3>
        <p className="text-gray-700 text-md md:text-lg mt-4 leading-relaxed text-center">
          {description}
        </p>
      </div>
    </section>
  );
}

export default MainContent1;
