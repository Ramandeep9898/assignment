import "./header.css";
import logo from "../../assets/images/logo.png";

export const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-wrapper">
          <div className="header-logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="header-items">
            <li className="header-item">
              <button className="btn btn-link">Sign In</button>
            </li>
            <li className="header-item">
              <button className="btn btn-ghost">Dukaan for PC</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
