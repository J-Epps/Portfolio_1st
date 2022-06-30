import React from "react";

import {
  SiPython,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDjango
} from "react-icons/si";

import styled from "styled-components";
import SectionTitle from "./styled_components/SectionTitle";
import SkillsItem from "./styled_components/SkillsItem";

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function Skills() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="" heading="SKILLS" />
        <br />

        <div className="services__allItems" style={{ paddingTop: "25px" }}>
          <SkillsItem
            icon={<SiHtml5 />}
            title="HTML"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <SkillsItem
            icon={<SiCss3 />}
            title="CSS"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <SkillsItem
            icon={<SiJavascript />}
            title="JavaScript"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div className="services__allItems" style={{ paddingTop: "50px" }}>
          <SkillsItem
            icon={<SiPython />}
            title="Python"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <SkillsItem
            icon={<SiDjango />}
            title="Django"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <SkillsItem
            icon={<SiReact />}
            title="React"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </ServicesItemsStyles>
  );
}
