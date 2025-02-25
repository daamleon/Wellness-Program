import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardProgram = ({ title, icon, link }) => {
  return (
    <Link
      to={link}
      className="bg-white bg-opacity-90 text-black px-6 py-4 rounded-lg shadow-lg flex flex-col items-center justify-center gap-3 text-lg font-semibold hover:bg-opacity-100 transition"
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};

CardProgram.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
};

export default CardProgram;
