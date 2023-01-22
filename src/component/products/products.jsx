import "./products.css";

import { imgPB, imgPB2x, imgPBWebp, imgPB2xWebp } from "../../images";
import { imgFR, imgFR2x, imgFRWebp, imgFR2xWebp } from "../../images";
import { imgMR, imgMR2x, imgMRWebp, imgMR2xWebp } from "../../images";
import { imgOMR, imgOMR2x, imgOMRWebp, imgOMR2xWebp } from "../../images";

export const Products = () => {
  return (
    <section className="section ">
      <ul className="products container">
        <li className="products__item">
          <picture>
            <source
              srcSet={`${imgPBWebp} 1x, ${imgPB2xWebp} 2x`}
              type="image/webp"
            />
            <source srcSet={`${imgPB} 1x, ${imgPB2x} 2x`} />
            <img src={imgPB} alt="Focus Room" className="products__image" />
          </picture>
          <h3 className="products__title">Phone Booth</h3>
        </li>

        <li className="products__item">
          <picture>
            <source
              srcSet={`${imgFRWebp} 1x, ${imgFR2xWebp} 2x`}
              type="image/webp"
            />
            <source srcSet={`${imgFR} 1x, ${imgFR2x} 2x`} />
            <img src={imgFR} alt="Focus Room" className="products__image" />
          </picture>
          <h3 className="products__title">Focus Room</h3>
        </li>

        <li className="products__item">
          <picture>
            <source
              srcSet={`${imgMRWebp} 1x, ${imgMR2xWebp} 2x`}
              type="image/webp"
            />
            <source srcSet={`${imgMR} 1x, ${imgMR2x} 2x`} />
            <img src={imgMR} alt="Meeting Room" className="products__image" />
          </picture>
          <h3 className="products__title">Meeting Room</h3>
        </li>

        <li className="products__item">
          <picture>
            <source
              srcSet={`${imgOMRWebp} 1x, ${imgOMR2xWebp} 2x`}
              type="image/webp"
            />
            <source srcSet={`${imgOMR} 1x, ${imgOMR2x} 2x`} />
            <img
              src={imgOMR}
              alt="Open Meeting Room"
              className="products__image"
            />
          </picture>
          <h3 className="products__title">Open Meeting Room</h3>
        </li>
      </ul>
    </section>
  );
};
