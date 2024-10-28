import { useState, useEffect } from "react"

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remaingTime, setRemaingTime] = useState(timeout);
    
    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

    return () => {
        clearInterval(timer);
    }
    }, [timeout, onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemaingTime(prevRemaingTime => prevRemaingTime - 100)
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <progress id="question-time" max={timeout} value={remaingTime}/>
}