import React from "react";

function EventLocation() {
  return (
    <div className="w-full bg-gray-100 py-10 text-center place-items-center">
      <h2 className="text-2xl text-gray-800 font-bold mb-4">Event Location</h2>
      <div className="w-full max-w-5xl place-items-center h-96 ">
        <iframe
          title="Campus Connect Location"
          className="w-[80%] h-[80%] md:w-full md:h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2105.227117034069!2d112.72841557665461!3d-7.313911388228693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1738537833627!5m2!1sen!2sid"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default EventLocation;
