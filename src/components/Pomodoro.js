import React from "react";
import Sidebar from "./SidebarDesign";
import './Pomodoro.scss';

function pomodoro() {
    return (
        <div className="pomodoro-timer">
            <div className="timer-siderbar">
                <Sidebar />
            </div>

            <div className="timer-content">
                content
            </div>
        </div>
    );
}

export default pomodoro;