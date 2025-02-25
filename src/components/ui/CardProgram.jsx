import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardProgram = ({ title, icon, link, image }) => {
  return (
    <Link
      to={link}
      className="relative w-full max-w-xs rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent transition-opacity duration-500 group-hover:opacity-0" />

      {/* Content Layer */}
      <div className="relative flex flex-col items-center justify-end p-6 h-64 text-center text-black hover:text-white hover:shadow-lg">
        {icon && <div className="mb-2">{icon}</div>}
        <span className="text-lg font-semibold">{title}</span>
      </div>
    </Link>
  );
};

CardProgram.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CardProgram;
