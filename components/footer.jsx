import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import footerLogo from "../public/footerLogo.png";

function Footer() {
  return (
    <div>
      <footer>
        <div className="flex">
          {/* Section Left */}

          <div className="w-1/4 flex justify-center items-center">
            <div className={styles.logoFotoer}>
              <Image src={footerLogo} layout="fill" />
            </div>
          </div>

          {/* Section Right */}

          <div
            className={`w-3/4 ${styles.bgFooter} grid justify-center items-center content-evenly justify-items-center`}
          >
            <div className="text-white flex">
              <h3 className="mx-3 text-2xl">
                <a href="">About</a>
              </h3>
              <h3 className="mx-3 text-2xl">
                <a href="">Community </a>
              </h3>
              <h3 className="mx-3 text-2xl">
                <a href="">Help</a>
              </h3>
              <h3 className="mx-3 text-2xl">
                <a href="">Careers</a>
              </h3>
            </div>

            <div className="flex text-white">
              <h2 className="text-3xl mx-3">
                <a href="">
                  <FaFacebook />
                </a>
              </h2>
              <h2 className="text-3xl mx-3">
                <a href="">
                  <FaTwitter />
                </a>
              </h2>

              <h2 className="text-3xl mx-3">
                <a href="">
                  <FaInstagram />
                </a>
              </h2>
              <h2 className="text-3xl mx-3">
                <a href="">
                  <FaTelegramPlane />
                </a>
              </h2>
              <h2 className="text-3xl mx-3">
                <a href="">
                  <FaWhatsapp />
                </a>
              </h2>
            </div>
            <div className="flex text-white">
              <h2>© 2022 Beta BnB, Inc. All rights reserved</h2>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
