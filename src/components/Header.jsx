import profilePicture from "../assets/alya.png";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "../styles/Header.css";
function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>ALYA AULIA SYAFITRI</h3>
        <div className="socialMedia">
          <a href="https://www.instagram.com/alyong_20/?utm_source=qr&igsh=bHphNXB3Mncwa2gz#">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@alyong2011?_t=ZS-8xiABhBopiD&_r=1">
            <FaTiktok />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/alya.syafitri.14268?mibextid=rS40aB7S9Ucbxw6v">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
