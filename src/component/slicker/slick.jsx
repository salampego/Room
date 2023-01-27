import Slider from "react-slick";
import { useRef } from "react";

import "./slick.css";
import {
  imgHeroJpg,
  imgHeroWebp,
  imgHeroWebp2x,
  imgHeroJpg2x,
} from "../../images";
import {
  imgSlicker1,
  imgSlicker1_2x,
  imgSlicker1Webp,
  imgSlicker1Webp2x,
} from "../../images";
import { ReactComponent as ArrowLeft } from "../../svg/slick/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../svg/slick/arrowRight.svg";

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  adaptiveHeight: true,
  appendDots: (dots) => <ul className="slick__dots--list">{dots}</ul>,
  customPaging: () => <div className="slick__dots--item"></div>,
};

export const Slick = () => {
  const arrowRef = useRef(null);

  return (
    <section className="section">
      <div className="slick__container container">
        <Slider ref={arrowRef} {...settings}>
          <div>
            <picture>
              <source
                srcSet={`${imgSlicker1} 1x, ${imgSlicker1_2x} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`${imgSlicker1Webp} 1x, ${imgSlicker1Webp2x} 2x`}
              />
              <img
                src="../../images/hero/hero.jpg"
                alt=""
                className="slick__picture"
              />
              <source />
            </picture>
          </div>
          <div>
            <picture>
              <source
                srcSet={`${imgHeroWebp} 1x, ${imgHeroWebp2x} 2x`}
                type="image/webp"
              />
              <source srcSet={`${imgHeroJpg} 1x, ${imgHeroJpg2x} 2x`} />
              <img
                src="../../images/hero/hero.jpg"
                alt=""
                className="slick__picture"
              />
              <source />
            </picture>
          </div>
          <div>
            <picture>
              <source
                srcSet={`${imgHeroWebp} 1x, ${imgHeroWebp2x} 2x`}
                type="image/webp"
              />
              <source srcSet={`${imgHeroJpg} 1x, ${imgHeroJpg2x} 2x`} />
              <img
                src="../../images/hero/hero.jpg"
                alt=""
                className="slick__picture"
              />
              <source />
            </picture>
          </div>
        </Slider>

        <div className="slick__arrow">
          <button
            onClick={() => arrowRef.current.slickNext()}
            className="slick__arrow-btn back-btn"
            type="button"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => arrowRef.current.slickPrev()}
            className="slick__arrow-btn next-btn"
            type="button"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};
