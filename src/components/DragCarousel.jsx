import { useEffect, useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import slide1 from "../images/img1.jpg";
import slide2 from "../images/img2.jpg";

const images = [slide1, slide1, slide2, slide1, slide1, slide2, slide2];

const DragCarousel = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      setActiveSlideIndex((activeSlideIndex + 1) % 10);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeSlideIndex]);

  const handleClick = (slideIndex) => {
    setActiveSlideIndex(slideIndex);
    clearInterval(interval);
  };

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={(index) => setActiveSlideIndex(index)}
        itemsToShow={images.length}
        itemsToScroll={1}
        // centerMode={true}

        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 790,
          },
        ]}
        speed={500}
        easing="ease-out"
        updateOnItemClick={true}
        draggable={true}

        // autoplayDirection="forward"
        // autoPlay={true}
        // interval={2000}
        // infiniteLoop={true}
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        {images.map((image, index) => (
          <img
            src={image}
            style={{ width: 300 }}
            key={index}
            className={
              activeSlideIndex === index ? "active-slide image" : "image"
            }
          />
        ))}
      </ReactSimplyCarousel>
      <div className="btn">
        {images.map((image, index) => (
          <button
            onClick={() => handleClick(index)}
            key={index}
            style={{
              backgroundColor: activeSlideIndex === index ? "blue" : "white",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DragCarousel;
