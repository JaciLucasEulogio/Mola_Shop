import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarousel = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4.5 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0, 10).map((item) => (
    <HomeSectionCard key={item.id} product={item} />
  ));

  return (
    <div className="relative px-4 lg:px-8">
      <h2 className="flex justify-start text-2xl font-extrabold text-gray-800 py-5 w-full max-w-7xl">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
          ref={carouselRef}
          itemClass="p-4" // Add padding to each item for spacing
        />
        {activeIndex < items.length - Math.floor(responsive[1024].items) && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
          </Button>
        )}
        {activeIndex !==0 && (
            <Button
                onClick={slidePrev}
                variant="contained"
                className="z-50 bg-white"
                sx={{
                position: "absolute",
                top: "8rem",
                left: "0rem",
                transform: "translateX(-50%) rotate(-90deg)",
                bgcolor: "white",
                }}
                aria-label="prev"
            >
                <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
            </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;

