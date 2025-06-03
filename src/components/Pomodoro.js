import React from "react";
import "./Pomodoro.scss";
import SidebarDesign from "./SidebarDesign";
import Content from "./Content";

function Pomodoro() {
    return (
        <article className="pomodoro">
            <section className="sidebar">
                <SidebarDesign />
            </section>

            <section className="content">
                <Content />
            </section>
        </article>
    );
};
export default Pomodoro;