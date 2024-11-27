import { useState } from "react";
import "./App.css";
import Divider from "./Components/Divider";
import MenuCollapse from "./Components/MenuCollapse";
import { FaChartLine, FaUserFriends, FaUsers } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { IoIosNotifications, IoMdMail } from "react-icons/io";
import { IoMailOutline, IoSettingsSharp } from "react-icons/io5";
import { CiHome, CiUser } from "react-icons/ci";

const accountMenu = [
  { id: "1", title: "Personal Data", icon: <FaUserFriends /> },
  { id: "2", title: "Messages", icon: <IoMdMail /> },
  { id: "3", title: "Notifications", icon: <IoIosNotifications /> },
  { id: "4", title: "Location", icon: <FaLocationDot /> },
  { id: "5", title: "Community", icon: <FaUsers /> },
];

const setting = [
  { id: "1", title: "FAQs", icon: <FaUserFriends /> },
  { id: "2", title: "Setting", icon: <IoSettingsSharp /> },
];

const icons = [
  { id: 1, icon: <CiHome className="text-xl" /> },
  { id: 2, icon: <FaChartLine className="text-xl" /> },
  { id: 3, icon: <IoMailOutline className="text-xl" /> },
  { id: 4, icon: <CiUser className="text-xl" /> },
];

function App() {
  return (
    <main className="bg-gray-200 w-full h-screen flex justify-center items-center">
      <section className="bg-white shadow-xl w-80 rounded-3xl p-4">
        <div className="flex items-center">
          <div>
            <img
              src="https://pbs.twimg.com/profile_images/1680987786227200003/RTE-Twf0_400x400.jpg"
              alt="profile"
              className="rounded-xl h-16"
            />
          </div>
          <div className="ml-4">
            <h1 className="font-bold">Samuel Senouvo</h1>
            <p className="font-semiBold text-gray-400">Frontend Engineer</p>
          </div>
        </div>
        <Divider />
        <div>
          <MenuCollapse menuItem={accountMenu} />
          <Divider />
          <MenuCollapse menuItem={setting} />
        </div>
        <div className="mt-[25%] flex justify-around">
          {icons.map((item) => (
            <div
              key={item.id}
              className={`text-xl p-2 rounded-lg text-gray-300 ${
                item.id === 4 ? " bg-blue-900/20 text-gray-800  " : ""
              }`}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
