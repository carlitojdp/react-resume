import React from "react";
import TypeWriter from "typewriter-effect";

const TextAnimation = () => {
  return (
    <TypeWriter
      options={{ loop: true }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Web Developer.")
          .pauseFor(1500)
          .deleteAll()
          .typeString("Software Developer.")
          .pauseFor(1500)
          .deleteAll()
          .typeString("console.log('Hello World.');")
          .pauseFor(1000)
          .deleteAll()
          .pauseFor(500)
          .start();
      }}
    />
  );
};

export default TextAnimation;
