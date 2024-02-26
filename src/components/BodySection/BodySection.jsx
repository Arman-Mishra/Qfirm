import React from "react";
import Intro from "./Intro/Intro";
import Choice from "./Choice/Choice";
import AreasOfPractises from "./AreasOfPractises/AreasOfPractises";
import ClientView from "./ClientViews/ClientView";
import Team from "./Team/Team";
import Faq from "./Faq/Faq";
import Subscribe from "./Subscribe/Subscribe";

const BodySection = () => {
  return (
    <>
      <Intro />
      <Choice />
      <AreasOfPractises />
      <ClientView />
      <Team />
      <Faq />
      <Subscribe />
    </>
  );
};

export default BodySection;
