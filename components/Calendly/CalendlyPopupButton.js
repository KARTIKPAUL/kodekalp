'use client'
// components/CalendlyButton.js

import React, { useEffect, useState } from 'react';
import { PopupButton } from 'react-calendly';

const CalendlyPopupButton = ({ text }) => {
  const [rootElement, setRootElement] = useState(null);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setRootElement(document.body); // or document.getElementById('__next') if using Next.js
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null on the server
  }

  return (
    <PopupButton
      url="https://calendly.com/kodekalp/get-connect-with-kodekalp"
      rootElement={rootElement}
      text={text|| "Book a Call"}
    />
  );
};

export default CalendlyPopupButton;