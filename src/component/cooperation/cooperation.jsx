import "./cooperation.css";
import {
  Amazon,
  Angel,
  Apple,
  Asana,
  BuzzFeed,
  Google,
  GreenPeace,
  Harrys,
  Hulu,
  JpMorgan,
  Knotel,
  Nasa,
  Nike,
  Reddit,
  SalesForce,
  Samsung,
  Uber,
  Walmart,
} from "../../svg";

export const Cooperation = () => {
  return (
    <section className="section container">
      <div className="cooperation__text">
        <h3 className="cooperation__text-title">
          The world's leading brands choose ROOM.
        </h3>
        <p className="cooperation__text-description">
          Over 3,000 and counting.
        </p>
      </div>
      <ul className="cooperation__list">
        <li className="cooperation__item">
          <Nike className="cooperation__item-svg" />
          <Hulu className="cooperation__item-svg" />
          <BuzzFeed className="cooperation__item-svg" />
        </li>
        <li className="cooperation__item">
          <Nasa className="cooperation__item-svg" />
          <Reddit className="cooperation__item-svg" />
          <Apple className="cooperation__item-svg" />
        </li>
        <li className="cooperation__item">
          <Google className="cooperation__item-svg" />
          <Knotel className="cooperation__item-svg" />
          <Harrys className="cooperation__item-svg" />
        </li>
        <li className="cooperation__item">
          <Uber className="cooperation__item-svg" />
          <Samsung className="cooperation__item-svg" />
          <Asana className="cooperation__item-svg" />
        </li>
        <li className="cooperation__item">
          <Walmart className="cooperation__item-svg" />
          <Amazon className="cooperation__item-svg" />
          <JpMorgan className="cooperation__item-svg" />
        </li>
        <li className="cooperation__item">
          <SalesForce className="cooperation__item-svg" />
          <Angel className="cooperation__item-svg" />
          <GreenPeace className="cooperation__item-svg" />
        </li>
      </ul>
    </section>
  );
};
