/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, useEffect, useState } from "react";
import CollectionList from "./CollectionList";
import { register } from "swiper/element/bundle";

register();

function SlideCollectionList({ collection }) {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
      console.log(swiper);
    });

    swiperElRef.current.addEventListener("slidechange", () => {
      console.log("slide changed");
    });
  }, []);

  return (
    <div>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="auto"
        speed="500"
        scrollbar="true"
        mousewheel-force-to-axis="true"
        mousewheel-sensitivity="50"
      >
        {collection.map((el) => {
          console.log(el.name);
          return (
            <swiper-slide key={el.name} style={{ width: "320px" }}>
              <CollectionList name={el.name} />
            </swiper-slide>
          );
        })}
      </swiper-container>
    </div>
  );
}

export default SlideCollectionList;
