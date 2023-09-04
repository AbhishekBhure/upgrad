import { useState, useEffect } from "react";
import "./scrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  //Add event listener to hide/show the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    //clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button
        className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        scroll
      </button>
    </div>
  );
};

export default ScrollToTop;
