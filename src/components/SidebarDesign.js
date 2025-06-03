import React from 'react';
import './SidebarDesign.scss';
import LOGO from '../assets/images/tomato.png';
import { FaHome, FaRegUser } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";

function SidebarDesign() {
    return (
        <article className="sidebar-design">
            <section className="sidebar-logo">
                <figure className="logo">
                    <img src={LOGO} alt="Logo" />
                </figure>
                <p className='logo-text'>POMODORO TECHNIQUE</p>
            </section>

            <hr className='hr' />

            <section className="sidebar-home menu-item">
                <figure className='home-icon icon'>
                    <FaHome className='home-icon icon' />
                </figure>
                <p className='home-text text'>
                    <p>首</p>
                    <p>頁</p>
                </p>
            </section>

            <section className="sidebar-record menu-item">
                <figure className='record-icon icon'>
                    <IoMdTime className='record-icon icon' />
                </figure>
                <p className='record-text text'>
                    <p>紀</p>
                    <p>錄</p>
                </p>
            </section>

            <hr className='hr' />

            <section className="sidebar-plus menu-item">
                <figure className='plus-icon icon'>
                    <FiPlusCircle className='plus-icon icon' />
                </figure>
                <p className='plus-text text'>
                    <p>新</p>
                    <p>增</p>
                </p>
            </section>

            <section className="sidebar-bottom">
                <hr className='hr' />

                <section className="sidebar-user menu-item">
                    <figure className='user-icon icon'>
                        <FaRegUser className='user-icon icon' />
                    </figure>
                    <p className='user-text text'>
                        <p>使</p>
                        <p>用</p>
                        <p>者</p>
                    </p>
                </section>
            </section>
        </article>
    );
}

export default SidebarDesign;