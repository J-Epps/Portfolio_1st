import React, { Component } from "react";
import Jay from "../assets/images/Jay.jpg";

import "../assets/css/hero.css";

/* Renders the most important, "at a glance" information about the user.
 * Styled to be attention grabbing for the viewer
 */
export default function Hero(props) {
  const heroData = props.heroData;

  return (
    <div className="hero-container">
      <div className="hero">
        <div className="profile-header">
          <img src={Jay} className="profile-picture" alt="Profile" />
          <div className="profile-name">Jeremy Epps</div>
          <div className="profile-tagline">
            Hello, my name is Jeremy and I am studying to become a Front End Web
            Developer. I am a hard-working individual who always strive to
            acquire more knowledge to better myself each day. At work I would be
            considered a team player that works well with others as well as
            working by myself. I have been studying & coding roughly a year now
            within this time I have learned 4 different programming languages.
          </div>
          <div className="profile-links">
            <a href="https://" target="_blank" rel="noopener noreferrer">
              {heroData.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
