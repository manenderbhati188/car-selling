import React, { useState } from "react";
import "./navbar.css";
import carlogo from "../../Assests/cars logo.png";
import headernames from "../../Assests/headerList";
const Navbar = () => {
  const [Dashboard, SetDashboard] = useState(true);

  const openDashboard = () => {
    SetDashboard((prevState) => !prevState);
  };

  const openlist=(item)=>{
    console.log("open list");
  }

  return (
    <div className="flex flex-col">
      <div className="navbar flex">
        {/* -----------------humburger------------------- */}
        <div className="menu-icon" onClick={() => openDashboard()}>
          <i class="fa-solid fa-bars"></i>
        </div>
        {/* --------------------------logo---------------- */}
        <div className="logo_img">
          <img src={carlogo} className="logo_img"></img>
        </div>
        {/* -------------------search box------------------ */}
        <div className="search flex mobile:hidden">
          <div className="search_box">
            <input
              type="text"
              placeholder="Search Cars eg Maruti 800 "
              className="search_input"
            />
          </div>
          <div className="search_icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        {/* ---------------------Nav Right------------------ */}
        <div className="flex nav_right">
          <div className="bell_icon">
            <i class="fa-regular fa-bell"></i>
          </div>
          <div className="mobile:hidden">
            <select id="language ">
              <option value="English">English</option>
              <option value="हिन्दी">हिन्दी</option>
              <option value="தமிழ்">தமிழ்</option>
              <option value="తెలుగు">తెలుగు</option>
              <option value="മലയാളം">മലയാളം</option>
            </select>
          </div>
          <div className="flex favorite">
            <i class="fa-regular fa-star"></i>
          </div>
          <div className="flex login">
            <i class="fa-regular fa-user"></i>
            <h4 className="mobile:hidden">Login / Register</h4>
          </div>
        </div>
      </div>
      { Dashboard && (
           <div className="dashboard">
            {headernames.map((item, id)=>{
             return(
              <div className="text-left p-4 font-bold border-2 flex items-center" onClick={()=>openlist()}>
                 <h3 key={id}>{item}</h3>
                 <i class="fa-sharp fa-solid fa-caret-down drop text-right absolute left-36"></i>
              </div>
             )
               
            })}
         </div>
      )}
    </div>
  );
};

export default Navbar;
