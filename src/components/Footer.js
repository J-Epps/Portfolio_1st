import React from "react";

import { MdEmail } from "react-icons/md";
import { SiCodesandbox } from "react-icons/si";

import "../assets/css/styles.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footerLeft">
        <ul>
          <a href="https://goo.gl/maps/WAVwYZ4CaPHcAZPr5">
            1600 Pennsylvania Ave, Washington DC
          </a>
          <a href="tel:+2022002000">(202)-200-2000</a>
        </ul>
      </div>

      <div className="footerRight">
        <a href="mailto:j.eppsprograms@gmail.com?subject">
          <MdEmail />
        </a>
        <a href="https://codesandbox.io/dashboard/home?workspace=5d919593-aae2-4cf9-a7e0-2ac275ae153f">
          <SiCodesandbox />
        </a>
      </div>
    </div>
  );
}

export default Footer;
