import React, { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;
    if (span[videoId]) {
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {},
        onComplete: () => {},
      });
    }
  }, [videoId, startPlay]);

  return (
    <div className="flex items-center">
      {hightlightsSlides.map((item, i) => (
        <div key={item.id} id="slider" className="sm:pr-20 p-10">
          <div className="video-carousel_container">
            <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
              <video id="video" playsInline={true} preload="auto" muted>
                <source src={item.video} type="video/mp4" />
              </video>
            </div>
            <div className="absolute top-12 left-[5%] z-10">
              {item.textLists.map((text) => (
                <p className="md:text-2xl text-xl font-medium" key={text}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCarousel;
