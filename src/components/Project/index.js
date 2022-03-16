import React from "react";

// Styles
import { Wrapper, Image, Content, Tech } from "./Project.styles";

const Project = ({ title, desc, img, techStack, link }) => {
  return (
    <a href={link}>
      <Wrapper className="proj">
        <Image src={img} alt=""></Image>
        <Content>
          <div className="title-container">
            <h1>{title}</h1>
          </div>
          <p>{desc}</p>
          <div className="logos">
            {techStack.map(([name, img]) => (
              <div className="tooltip" key={name} >
                <Tech src={img} alt="" />
                <span className="tooltip__text">{name}</span>
              </div>
            ))}
          </div>
        </Content>
      </Wrapper>
    </a>
  );
};

export default Project;
