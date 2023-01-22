import "./header.css";
import { ReactComponent as Logo } from "../../svg/header/logo.svg";
import { ReactComponent as Location } from "../../svg/header/location.svg";
import { ReactComponent as Basket } from "../../svg/header/basket.svg";

export const Header = () => {
  return (
    <header className="header container">
      <Logo width="50" height="50" className="header_navigation-logo" />
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              PRODUCTS
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              EXPLORE
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">
              SHOPE
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__purchase">
        <Location />
        <p className="header__purchase-title">SHOWROOMS</p>
        <Basket />
      </div>
    </header>
  );
};
