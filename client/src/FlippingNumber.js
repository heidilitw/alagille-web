import React, { useState, useEffect } from 'react';
import './FlippingNumber.css'; // Import the CSS for styling

function FlippingNumber({ targetNumber, intervalSpeed = 50 }) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prevNumber => {
        if (prevNumber < targetNumber) {
          return prevNumber + 1;
        } else {
          clearInterval(interval); // Stop the interval when the target is reached
          return prevNumber;
        }
      });
    }, intervalSpeed);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [targetNumber, intervalSpeed]);

  return (
    <div className="flip-number">
      {number}
    </div>
  );
}

export default FlippingNumber;
