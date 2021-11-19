import React from "react";
import "./body.css";
import { testimonialText } from "./testimonialText";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import ButtonImp from "../../Common/ButtonImp/ButtonImp";
function Testimonials() {
  const [key, setKey] = React.useState(0);
  const handleTopScroll = () => {
    const minVal = 0;
    const maxVal = 3;
    if (key === maxVal) {
      setKey(minVal);
    } else {
      setKey(key + 1);
    }
  };
  const handleBottomScroll = () => {
    const minVal = 0;
    const maxVal = 3;
    if (key === minVal) {
      setKey(maxVal);
    } else {
      setKey(key - 1);
    }
  };
  return (
    <div className="testimonials">
      <div className="testimonial-container">
        <button className="testimonial-button" onClick={handleTopScroll}>
          <IoIosArrowUp />
        </button>

        {testimonialText.map((t, i) => {
          const style =
            key === i ? { display: "inline-block" } : { display: "none" };
          return (
            <div key={i} className="testimonial" style={style}>
              <div className="testimonail-top">
                <img
                  className="testimonial-img"
                  src={t.logo}
                  alt={t.companyName}
                />
                <span className="testimonial-seprator" />
                <div className="testimonial-company">
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-post">{t.post}</div>
                </div>
              </div>
              <div className="testimonial-bottom">
                <p className="testimonial-review">{t.review}</p>
              </div>
            </div>
          );
        })}
        <button className="testimonial-button" onClick={handleBottomScroll}>
          <IoIosArrowDown />
        </button>
      </div>
      <div className="testimonial-sep">
        <div className="testimonial-separator"></div>
        <div className="testimonial-separator-text">
          Trusted by 500+ businesses
        </div>
        <div className="testimonial-separator"></div>
      </div>
      <div className="testimonial-icons"></div>
    </div>
  );
}

export default Testimonials;
