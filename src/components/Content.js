import React from "react";
import "./Content.scss";
import { VscDebugRestart } from "react-icons/vsc";
import { IoMdPause, IoMdPlay } from "react-icons/io";

function Content() {
    return (
        <article className="content">
            <main>
                <section className="content-header">
                    <p className="title">讀書</p>
                </section>
                <section className="content-reciprocal">
                    <div className="circle">45:00</div>
                </section>
                <section className="content-function">
                    <figure className="function-reload fun">
                        <VscDebugRestart className="icon-reload icon" />
                    </figure>
                    <figure className="function-start fun">
                        <IoMdPlay className="icon-start icon" />
                    </figure>
                    <figure className="function-pause fun">
                        <IoMdPause className="icon-pause icon" />
                    </figure>
                </section>
            </main>
            <footer>
                <p className="attribution">© 2023 Pomodoro Technique Developed by WeiHu</p>
            </footer>
        </article>
    );
}
export default Content;