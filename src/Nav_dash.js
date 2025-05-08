import {
  IoHomeOutline,
  IoPersonOutline,
  IoBriefcaseOutline,
  IoDocumentTextOutline,
  IoBusinessOutline,
  IoStatsChartOutline,
  IoSettingsOutline,
  IoArrowBackOutline,
  IoArrowForwardOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";

export default function Nav() {
  const navPanelRef = useRef(null);

  const scrollLeft = () => {
    if (navPanelRef.current) {
      navPanelRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (navPanelRef.current) {
      navPanelRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="big-nav">
      <div className="nav-panel" ref={navPanelRef}>
        <NavButton icon={<IoHomeOutline />} path="/dashboard">
          Dashboard
        </NavButton>
        <NavButton icon={<IoPersonOutline />} path="/accounts">
          Accounts
        </NavButton>
        <NavButton icon={<IoBriefcaseOutline />} path="/brokers">
          Brokers
        </NavButton>
        <NavButton icon={<IoDocumentTextOutline />} path="/submissions">
          Submissions
        </NavButton>
        <NavButton icon={<IoBusinessOutline />} path="/organisation">
          Organisation
        </NavButton>
        <NavButton icon={<IoStatsChartOutline />} path="/goals">
          Goals & Rules
        </NavButton>
        <NavButton icon={<IoSettingsOutline />} path="/admin">
          Admin
        </NavButton>
        <NavButton icon={<IoSettingsOutline />} path="/admin">
          Admin
        </NavButton>
        <NavButton icon={<IoSettingsOutline />} path="/admin">
          Admin
        </NavButton>
        <NavButton icon={<IoSettingsOutline />} path="/admin">
          Admin
        </NavButton>
        <NavButton icon={<IoSettingsOutline />} path="/admin">
          Admin
        </NavButton>
      </div>
      <div className="arrow-buttons">
        <button className="arrow-button" onClick={scrollLeft}>
          <IoArrowBackOutline />
        </button>
        <button className="arrow-button" onClick={scrollRight}>
          <IoArrowForwardOutline />
        </button>
      </div>
    </div>
  );
}

function NavButton({ children, icon, path }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (children === "Accounts") {
      navigate(-1); // 👈 Повертає на попередню сторінку
    } else {
      navigate(path);
    }
  };

  return (
    <button
      className={`button_nav ${path === "/dashboard" ? "clicked" : ""}`}
      onClick={handleClick}
    >
      {icon} {children}
    </button>
  );
}
