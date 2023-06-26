import React from "react";
import ItemList from "./ItemList";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();

function SlideItemList() {
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
        <swiper-slide style={{ width: "320px" }}>
          <ItemList />
        </swiper-slide>
        <swiper-slide style={{ width: "320px" }}>
          <ItemList />
        </swiper-slide>
        <swiper-slide style={{ width: "320px" }}>
          <ItemList />
        </swiper-slide>
        <swiper-slide style={{ width: "320px" }}>
          <ItemList />
        </swiper-slide>
        <swiper-slide style={{ width: "320px" }}>
          <ItemList />
        </swiper-slide>
      </swiper-container>
    </div>
  );
}

export default SlideItemList;
