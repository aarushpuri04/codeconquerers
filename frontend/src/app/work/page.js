import React from "react";
import HeroComponent from "@/components/heroComponent";
import CardSection from "@/components/cardSection";

function work() {
  return (
    <div>
      <HeroComponent
        imageSrc="work.webp"
        text="Kickstart Your Career with Startup Internships"
        btnText="Get Started"
      />
      <CardSection/>
    </div>
  );
}

export default work;
