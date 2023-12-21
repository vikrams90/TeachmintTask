import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Time = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState();
  const [intervalId, setIntervalID] = useState(null);
  const { currentTime } = useSelector((state) => state.time);

  // useEffect to set time
  useEffect(() => {
    setTime(new Date(`${currentTime.date} ${currentTime.time}`).getTime());
  }, [currentTime]);

  // useEffect for handling setinterval and clearinterval to stop clock
  useEffect(() => {
    if (isRunning) {
      let interId = setInterval(() => {
        console.log("Interval started:", intervalId);
        setTime((prevTime) => prevTime + 100);
      }, 100);
      setIntervalID(interId);
    } else {
      clearInterval(intervalId);
    }
  }, [isRunning]);

  // handling stop/start clock click to set local state isRunning
  const handleClick = () => {
    setIsRunning(!isRunning);
  };

  // Time formatting logic
  const formattedTime = new Date(time);
  const newtime = `${formattedTime.getHours()}:${formattedTime.getMinutes()}:${formattedTime.getSeconds()}`;

  return (
      <div className="flex gap-5">
          
          <div className="flex flex-col items-center">
          <div className="flex gap-1 text-xs">
          <span><p>{currentTime.date}</p></span>
          <span><p>{currentTime.day}</p></span>
          </div>
          <h1 className="text-lg">{newtime}</h1>
        </div>
      <button className="bg-red-400 px-3" onClick={handleClick}>{isRunning ? "Stop" : "Start"}</button>
    </div>
  );
};

export default Time;
