import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./UI/Button";
import UpcomingSessions from "./UpcomingSessions";

function Header() {
  const [showUpcomingSessions, setShowUpcomingSessions] =
    useState<boolean>(false);

  function openUpcomingSessions() {
    setShowUpcomingSessions(true);
  }
  function closeUpcomingSessions() {
    setShowUpcomingSessions(false);
  }
  return (
    <>
      {showUpcomingSessions && (
        <UpcomingSessions onClose={closeUpcomingSessions} />
      )}
      <header id="main-header">
        <h1>ReactMentoring</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                end
              >
                Our Mision
              </NavLink>
            </li>
            <li>
              <NavLink
                to="sessions"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Browse Sessions
              </NavLink>
            </li>
            <li>
              <Button onClick={openUpcomingSessions}>Upcoming Sessions</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
