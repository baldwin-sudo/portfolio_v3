import Typewriter from "typewriter-effect";

const TyperWriterEffect = ({ text, pause }) => (
  <Typewriter
    onInit={(typewriter) => {
      typewriter
        .changeDelay(50) // move this before typeString
        .typeString(text)
        .pauseFor(pause)
        .deleteAll()
        .start();
    }}
    options={{
      autoStart: true,
      loop: true,
    }}
  />
);

export default TyperWriterEffect;
