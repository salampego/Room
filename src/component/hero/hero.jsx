import "./hero.css";
import {
  imgHeroJpg,
  imgHeroWebp,
  imgHeroWebp2x,
  imgHeroJpg2x,
} from "../../images";

export const Hero = () => {
  return (
    <section className="section container">
      <picture className="hero">
        <source
          srcSet={`${imgHeroWebp} 1x, ${imgHeroWebp2x} 2x`}
          type="image/webp"
        />
        <source srcSet={`${imgHeroJpg} 1x, ${imgHeroJpg2x} 2x`} />
        <img src={imgHeroJpg} alt="Hero" className="hero__picture" />
        <source />
      </picture>
      <div className="hero__block">
        <h2 className="hero__block-title">
          Design that inspires a better to work.
        </h2>
        <p className="hero__block-description">
          We've developed a series of purpose-built rooms that offer companies
          looking for change an affordable, sustainable, and flexible
          alternative to fixed construction and traditional office design.
        </p>
      </div>
    </section>
  );
};
