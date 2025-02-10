import React from "react";

function MainContent({ handleShowEmbed }) {
  return (
    <div
      id="main-content"
      className="w-full bg-gray-100 py-10 text-center px-6"
    >
      <h2 className="text-3xl font-bold mb-6 text-red-500">
        Mengapa Sleep Tourism Dibutuhkan?
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-300">
          <h3 className="text-xl font-semibold text-gray-800">Networking</h3>
          <p className="text-gray-600 mt-2">
            Meet students, lecturers, and professionals from various
            universities.
          </p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-300">
          <h3 className="text-xl font-semibold text-gray-800">Workshops</h3>
          <p className="text-gray-600 mt-2">
            Enhance your skills with interactive and insightful workshops.
          </p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-300">
          <h3 className="text-xl font-semibold text-gray-800">
            Career Opportunities
          </h3>
          <p className="text-gray-600 mt-2">
            Discover internship and job opportunities from top companies.
          </p>
        </div>
      </div>
      <button
        onClick={handleShowEmbed}
        className="mt-6 px-6 py-3 bg-gray-800 text-white text-lg font-semibold rounded-lg hover:bg-gray-700 transition"
      >
        Register Now
      </button>
    </div>
  );
}

export default MainContent;
