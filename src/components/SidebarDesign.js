import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiHome, HiClock, HiOutlineClipboardList, HiUser } from "react-icons/hi";

function SidebarDesign() {
    return (
        <Sidebar aria-label="Sidebar" className="bg-orange-500">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiHome}>
                        首頁
                    </Sidebar.Item>

                    <Sidebar.Item href="#" icon={HiClock}>
                        管理時間
                    </Sidebar.Item>

                    <Sidebar.Item href="#" icon={HiOutlineClipboardList}>
                        時間表
                    </Sidebar.Item>

                    <Sidebar.Item href="#" icon={HiUser}>
                        使用者
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

export default SidebarDesign;