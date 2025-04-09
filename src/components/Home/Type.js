import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Type() {
  return (
    <span data-aos="fade-down-right" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
      <Typewriter
        words={[
          "Desenvolvedor de software",
          "Freelancer",
          "Desenvolvedor FullStack",
          "Contribuidor de código aberto"
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
}

export default Type;
