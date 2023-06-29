import React, { useRef, useEffect, useState } from "react";
import CollectionList from "./CollectionList";
import { register } from "swiper/element/bundle";
import axios from "axios";

register();

function SlideCollectionList() {
  const swiperElRef = useRef(null);
  const [collection, setCollection] = useState([]); // eslint-disable-line no-unused-vars

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

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/collections",
    }).then((res) => setCollection([...res.data]));
    console.log(collection[0].name);
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
          <CollectionList />
        </swiper-slide>
        <swiper-slide style={{ width: "320px" }}>
          <CollectionList />
        </swiper-slide>
        <swiper-slide style={{ width: "320px" }}>
          <CollectionList />
        </swiper-slide>
        <swiper-slide style={{ width: "320px" }}>
          <CollectionList />
        </swiper-slide>
        <swiper-slide style={{ width: "320px" }}>
          <CollectionList />
        </swiper-slide>
      </swiper-container>
    </div>
  );
}

export default SlideCollectionList;
