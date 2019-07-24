import React from "react";
import { NavLink } from "react-router-dom";
import AboutHeader from "./bio/AboutHeader";

const About = () => {
  return (
    <div>
      <div className="App">
        <AboutHeader />
        <div>
          <NavLink exact to="/Bio1">
            Bio #1
          </NavLink>

          <NavLink exact to="/Bio2">
            Bio #2
          </NavLink>

          <NavLink exact to="/Bio3">
            Bio #3
          </NavLink>

          <NavLink exact to="/Bio4">
            Bio #4
          </NavLink>

          <NavLink exact to="/Bio5">
            Bio #5
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default About;
