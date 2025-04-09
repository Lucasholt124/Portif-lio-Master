import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      data-aos="fade-down-right"
      options={{
        strings: [
          "Desenvolvedor de software",
          "Freelancer",
          " Desenvolvedor FullStack",
          "Contribuidor de código aberto",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
