import "./footer.css";
import logo from "../../assets/images/logo.png";
import india from "../../assets/images/india.png";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-wrapper mb-48">
          <div className="">
            <img src={logo} alt="dukaan logo" />
          </div>
          <ul className="footer-list">
            <li className="footer-list-item">Contact</li>
            <li className="footer-list-item">FAQ's</li>
          </ul>

          <ul className="footer-list">
            <li className="footer-list-item">Tutorials</li>
            <li className="footer-list-item">Blog</li>
          </ul>

          <ul className="footer-list">
            <li className="footer-list-item">Privacy</li>
            <li className="footer-list-item">Banned Items</li>
          </ul>

          <ul className="footer-list">
            <li className="footer-list-item">About</li>
            <li className="footer-list-item ">
              Jobs
              <div className="counter">3</div>
            </li>
          </ul>

          <ul className="footer-list">
            <li className="footer-list-item">Facebook</li>
            <li className="footer-list-item">Twitter </li>
            <li className="footer-list-item">Linkedin</li>
          </ul>
        </div>
        <div className="footer-divder mb-24"></div>

        <div className="flex space-between ">
          <p className="footer-heading">Dukaan 2020, All rights reserved.</p>
          <p className="footer-heading flex-center gap-8">
            Made in
            <img src={india} alt="indian flag" />
          </p>
        </div>
      </div>
    </>
  );
};
