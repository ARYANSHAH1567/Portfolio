import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaDownload, FaLocationArrow } from "react-icons/fa";
import { FlipWords } from "./ui/FlipWords";
import "./Hero.css";
import { TypewriterEffectSmooth } from "./ui/TypeWriter";

const Hero = () => {
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I'm",
    },
    {
      text: "Aryan",
      className: "text-purple dark:text-purple",
    },
    {
      text: "Shah",
      className: "text-purple dark:text-purple",
    },
  ];

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10 hero">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
           <h2 className="uppercase tracking-widest  text-center text-[30px] md:text-5xl lg:text-6xl text-blue-100">
           <TypewriterEffectSmooth words={words} />
          </h2> 
          <div
            className="flex flex-col items-start  font-bold mobile:gap-1 text-center text-[40px] md:text-5xl lg:text-6xl"
            style={{ opacity: 1, transform: "none" }}
          >
            <div>I am a student at IIIT Gwalior</div>
            <div className="flex flex-row gap-2 flex-wrap max-w-[89vw] and">
              and a
              <div className="cycle-div relative">
                <span
                  className="tags block sm:inline"
                  style={
                    {
                      "--anim-length": "12000ms",
                      "--anim-delay": "0ms",
                    } as React.CSSProperties
                  }
                >
                  Programmer
                </span>
                <span
                  className="tags block sm:inline"
                  style={
                    {
                      "--anim-length": "12000ms",
                      "--anim-delay": "3000ms",
                    } as React.CSSProperties
                  }
                >
                  Full Stack Developer
                </span>
                <span
                  className="tags block sm:inline"
                  style={
                    {
                      "--anim-length": "12000ms",
                      "--anim-delay": "6000ms",
                    } as React.CSSProperties
                  }
                >
                  Programmer
                </span>
                <span
                  className="tags block sm:inline"
                  style={
                    {
                      "--anim-length": "12000ms",
                      "--anim-delay": "9000ms",
                    } as React.CSSProperties
                  }
                >
                  Full Stack Developer
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-3 my-5">
            <a href="/resume.pdf" download="Resume" className="work">
              <MagicButton
                title="Resume"
                icon={<FaDownload />}
                position="right"
              />
            </a>
            <a href="#projects" className="work">
              {" "}
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
