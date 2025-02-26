import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-3xl font-bold text-center">
        {" "}
        Program ini masih dalam pengembangan. Silakan cek kembali nanti.
      </h1>
      <Link to="/wellness-program" className="mt-4 text-blue-500">
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default NotFound;
