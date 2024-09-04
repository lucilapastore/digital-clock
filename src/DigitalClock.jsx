import { useEffect, useState } from "react";
function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="clock-container">
        <div className="cover"></div>
        <p className="date">{time.toDateString()}</p>
        <div className="time">
          <span className="clock">
            {time.getHours().toString().padStart(2, "0")}:
          </span>
          <span className="clock">
            {time.getMinutes().toString().padStart(2, "0")}:
          </span>
          <span className="secs">
            {time.getSeconds().toString().padStart(2, "0")}
          </span>
        </div>
        <p className="date">{time.toLocaleTimeString()}</p>
      </div>
    </>
  );
}

export default DigitalClock;
