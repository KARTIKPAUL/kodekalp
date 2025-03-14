'use client'
import React, { useEffect } from 'react';

const CalendlyWidget = ({ event }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const calendlyUrl = `https://calendly.com/kodekalp${event}`;

  return (
    <div 
      className="calendly-inline-widget" 
      data-url={calendlyUrl} 
      style={{ minWidth: '320px', height: '700px' }}>
    </div>
  );
};

export default CalendlyWidget;
