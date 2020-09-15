import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Hi, I'm Cornelius. I'm a full stack engineer with experience in React,
          Ionic, Node, Express, PostgreSQL, and MongoDB.
        </p>
        <p>
          I'm a big believer in being a forever learner. I'm currently getting
          my practice in with Typescript and GraphQL.
        </p>
        <p>
          Right now I'm working on a project called Uproot, which seeks to
          inform the public on how their local representatives vote. It's built
          in Typescript using the Ionic Framework. Keep an eye out, as we'll be
          releasing that soon!
        </p>
        <p>
          I was born in Germany to Vietnam War refugee parents, raised in
          California, and am now living in Hokkaido, Japan. In my free time I
          love to surf, be out in nature, and find ways to use software
          engineering for the greater good.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
