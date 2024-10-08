import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      scrollTrigger: {
        trigger: ".link",
        toggleActions: "restart none none none",
      },
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      scrollTrigger: {
        trigger: ".link",
        toggleActions: "restart none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      className="w-screen overflow-hidden common-padding bg-zinc"
      id="highlights"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-center justify-between">
          <h1 id="title" className="section-heading">
            Get The Highlights
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="" className="ml-2" />{" "}
            </p>
            <p className="link">
              Watch the events
              <img src={rightImg} alt="" className="ml-2" />
            </p>
          </div>
        </div>
        <>
          <VideoCarousel />
        </>
      </div>
    </section>
  );
};

export default Highlights;
