import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo__container">
        <img src={LOGO_URL} alt="company logo" className="logo" />
      </div>
      <nav>
        <ul className="nav__list">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
