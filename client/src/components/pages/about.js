import React from "react";
import "./about.css";
export default function About() {
  return (
    <div className="aboutContainer">
      <div className="about">
        <div className="header">
          <h2>How Can we help you ?</h2>
          <br />
          <img src="/images/help1.png" alt="logo" />
        </div>
        <div className="items">
          <div className="groupItem">
            <h3>
              Titles and perspectives will <span>inspire</span> you to make your own project
              idea{" "}
            </h3>
            <h3>We give you the resources, You <span>search</span> for the information</h3>
          </div>
          <div className="groupItem">
            <h3> Help you to <span>Get in touch</span> with the projects' realisers</h3>
            <h3> Have the idea, get you <span>resouces</span>? Now time to do your best</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
