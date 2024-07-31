import React, { useEffect, useState } from 'react';

function Pomodoro() {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        
                    }
                }
            })
        }
    });

    return (
        <div className='pomodoro-technique'>
            <div className='timer'>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>

            <button onClick={startTimer}>開始</button>
            <button onClick={stopTimer}>停止</button>
            <button onClick={resetTimer}>重置</button>
        </div>
    );
}

export default Pomodoro;