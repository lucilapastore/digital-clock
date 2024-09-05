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
        <div className="clock">
          <p className="date">
            {time.toLocaleTimeString("es-ES", { hour12: false })}
          </p>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
