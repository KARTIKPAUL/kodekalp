"use client";

import React, { useState, useEffect } from "react";

const SchedulePopup = ({ showAfter = 1500 }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Delay the popup by the specified time
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, showAfter);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [showAfter]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 ">
            <h2 className="text-lg font-semibold mb-4">Schedule Your Demo</h2>
            <iframe
              src="https://calendly.com/kodekalp/get-connect-with-kodekalp"
              style={{ border: 0 }}
              width="100%"
              height="400"
              frameBorder="0"
            ></iframe>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SchedulePopup;
