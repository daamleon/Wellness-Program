import React from "react";

function MainContent2({ title, description, image, highlights }) {
  return (
    <section id="main-content" className="mx-4 md:mx-auto max-w-6xl my-2 mb-10">
      <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        {title}
      </h3>

      <p className="text-gray-600 text-md md:text-xl text-justify md:text-center max-w-3xl mx-auto leading-relaxed mb-6 px-6">
        {description}
      </p>

      <div className="flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-xl overflow-hidden">
        {image && (
          <div className="md:w-2/5 h-56 md:h-auto">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl"
            />
          </div>
        )}

        <div className="md:w-3/5 p-6 md:p-12 space-y-6 flex flex-col justify-center">
          <div className="space-y-8">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                {item.icon && <item.icon className="text-red-500 text-3xl" />}
                <p className="text-gray-800 font-semibold text-sm md:text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent2;
