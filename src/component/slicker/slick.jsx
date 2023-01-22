import "./slick.css";
import Slider from "react-slick";
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
import { useRef } from "react";

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
};

export const Slick = () => {
  const arrowRef = useRef(null);

  return (
    <section className="section">
      <div className="slick__container container">
        <Slider ref={arrowRef} {...settings}>
          <div style={{ width: 1200 }}>
            <picture>
              <source
                srcSet={`${imgSlicker1} 1x, ${imgSlicker1_2x} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`${imgSlicker1Webp} 1x, ${imgSlicker1Webp2x} 2x`}
              />
              <img src="../../images/hero/hero.jpg" alt="" />
              <source />
            </picture>
          </div>
          <div style={{ width: 1200 }}>
            <picture>
              <source
                srcSet={`${imgHeroWebp} 1x, ${imgHeroWebp2x} 2x`}
                type="image/webp"
              />
              <source srcSet={`${imgHeroJpg} 1x, ${imgHeroJpg2x} 2x`} />
              <img src="../../images/hero/hero.jpg" alt="" />
              <source />
            </picture>
          </div>
          <div style={{ width: 1200 }}>
            <picture>
              <source
                srcSet={`${imgHeroWebp} 1x, ${imgHeroWebp2x} 2x`}
                type="image/webp"
              />
              <source srcSet={`${imgHeroJpg} 1x, ${imgHeroJpg2x} 2x`} />
              <img src="../../images/hero/hero.jpg" alt="" />
              <source />
            </picture>
          </div>
        </Slider>
        <div className="slick__arrow">
          <button
            onClick={() => arrowRef.current.slickPrev()}
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
