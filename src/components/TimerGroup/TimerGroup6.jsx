import React, { useState, useEffect } from "react";
import timerStyle from "./timerStyle.module.css";

const TimerGroup6 = () => {
  const [seconds, setSeconds] = useState(0);
  const [minuets, setMinuets] = useState(0);

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinuets(minuets + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  return (
    <section className={timerStyle.sectionTimer}>
      <h1 className={timerStyle.timer}>
        Timer:{minuets > 10 ? `0${minuets}` : `${minuets}`}:
        {seconds < 10 ? `0${seconds}` : `${seconds}`}
      </h1>
      <h1 className={timerStyle.bestTime}>Best Time:</h1>
    </section>
  );
};

export default TimerGroup6;
