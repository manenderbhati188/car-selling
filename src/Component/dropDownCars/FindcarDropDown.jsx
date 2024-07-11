import React, { useEffect, useState } from "react";
import listData from '../../Assests/listdata';
import headernames from "../../Assests/headerList";
const FindcarDropDown = () => {
  const [MouseHover, setMouseHover] = useState("");
  const mouseenter = (header) => {
    setMouseHover(header);
  };

  const mouseexit = () => {
    setMouseHover("");
  };

  return (
    <>
      <div className="dropdowncars flex justify-evenly mobile:hidden w-full">
        <div className="flex gap-32 p-2 w-full pl-24">
          {headernames.map((header, index) => {
            return (
              <div
                className="flex justify-center items-center cursor-pointer flex-col "
                key={index}
                onMouseEnter={() => mouseenter(header)}
                onMouseLeave={() => mouseexit()}
              >
                <div className="flex items-center">
                  <h5 className="pr-3">
                    {header}
                    </h5>
                  <i class="fa-sharp fa-solid fa-caret-down drop"></i>
                </div>
                {MouseHover === header && (
                  <div className="absolute top-24 text-left text-lg  w-60 animate-mymove">
                    <ul className="pt-4 p-8">
                      {listData[header].map((item, idx) => {
                        return (
                          <li
                            key={idx}
                            className="border-2 pt-3 w-full font-thin hover:bg-gray-200 pl-4 text-base"
                          >
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="location flex justify-center items-center gap-3 mr-28 cursor-pointer">
          <i class="fa-solid fa-location-dot "></i>
          <h3 className="">Gurgaon</h3>
        </div>
      </div>
    </>
  );
};

export default FindcarDropDown;
