import React, { useEffect, useState } from "react";
// import Sidebar from "./SidebarDesign";
import './Pomodoro.scss';

function Pomodoro() {
    const [time, setTime] = useState(1500); // 設定初始時間 1500秒(25分鐘)
    const [isActive, setIsActive] = useState(false); // 計時是否啟動
    const [isWork, setIsWork] = useState(true); // true: 工作時間， false： 休息時間
    const [cycle, setCycle] = useState(0); // 循環次數

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }

        if (time === 0) {
            clearInterval(interval);
            if (isWork) {
                setTime(300);
                setIsWork(false);
            } else {
                setTime(1500);
                setIsWork(true);
                setCycle((prevCycle) => prevCycle + 1);
            }
        }
        return () => clearInterval(interval);
    }, [isActive, time, isWork]);

    const toggleTimer = () => {
        setIsActive(!isActive); // 切換計時狀態
    }

    const resetTimer = () => {
        setTime(isWork ? 1500 : 300);
        setIsActive(false); // 停止計時
    }

    return (
        <article className="pomodoro-timer">
            {/* <div className="timer-siderbar">
                <Sidebar />
            </div> */}

            <section className="timer-content">
                <h1 className="title">POMODORO 番茄鐘</h1>

                <section className="timer-display">
                    <span className="time">
                        {Math.floor(time/60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}
                    </span>
                </section>

                <section className="buttons">
                    <button className="start-button" onClick={toggleTimer}>
                        {isActive ? '暫停 PAUSE' : '開始 START'}
                    </button>
                    <button className="reset-button" onClick={resetTimer}>重設 RESET</button>
                </section>

                <section className="cycle-count">
                    <p className="completed">
                        已完成：{cycle}
                    </p>
                </section>
            </section>
        </article>
    );
}

export default Pomodoro;