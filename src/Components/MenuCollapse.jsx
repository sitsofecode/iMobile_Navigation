import React from "react";

import { IoIosArrowForward } from "react-icons/io";

const MenuCollapse = ({ menuItem }) => {
  return (
    <div className=" w-full cursor-pointer ">
      {menuItem?.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex my-2 items-center justify-between">
              <div className="flex items-center">
                <span className="p-2 bg-gray-200 rounded-lg mx-2 ">
                  {item.icon}
                </span>
                <span className="text-sm font-bold">{item.title}</span>
              </div>
              <span>
                <IoIosArrowForward className="text-sm" />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCollapse;
