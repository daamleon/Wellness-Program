import React from "react";

function AgendaItem({ title, description, image }) {
  return (
    <div className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 text-center">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h4 className="text-xl font-semibold mb-3 text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default AgendaItem;
