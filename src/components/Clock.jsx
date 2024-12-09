import React, { useState, useEffect } from "react";
import"./clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format the time for better display
  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="clock">
      <h2>{formattedTime}</h2>
    </div>
  );
}

export default Clock;
