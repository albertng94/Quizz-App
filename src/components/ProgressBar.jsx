import { useState, useEffect } from "react";

export default function ProgressBar({ time, onTimeOut }) {
    
    const[remainingTime, setRemainingTime] = useState(time);

    useEffect(() => {
        const timer = setTimeout(onTimeOut, 10000);

        return () => {
            clearTimeout(timer);
        }
    }, [onTimeOut]);


    useEffect(() => {
        const interval = setInterval(() => {
                setRemainingTime((prevTime) => prevTime - 10);
        }, 10);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
    
    return (
        <progress id="question-time" value={remainingTime} max={time}></progress>
    );
}