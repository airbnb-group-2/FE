import React from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import Navbarlogo from "../assets/navbarLogo.png";
import styles from "../styles/Navbar.module.css";
import {
  FaSearch,
  FaUserCircle,
  FaListUl,
  FaRegPlusSquare,
} from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useRouter } from "next/router";

function Navbar() {
  const Swal = require("sweetalert2");
  const router = useRouter();

  function handleLogout() {
    return Swal.fire({
      title: "Are you sure?",
      text: "You want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Thank you!", "See you next time:) Beta BnB", "success");
        router.push("/");
        localStorage.clear();
      }
    });
  }

  function stateLogin() {
    if (typeof window !== "undefined") {
      // token = true
      if (
        localStorage.getItem("token") &&
        localStorage.getItem("is_renter") == "false"
      ) {
        return (
          <div
            className={`flex items-center mb-1 text-white text-2xl border-2 rounded-full p-2 hover: w-12 ${styles.loginDisplay2}`}
          >
            <a>
              <FaUserCircle className=" ml-0.5 mt-0.5 hover:text-gray-800 transition duration-100" />
            </a>

            {/* Booking List */}
            <a href="/booking">
              <FaListUl
                className={` mt-0.5 hover:text-gray-800 transition duration-100 ml-2 border-l-2 pl-1 hidden ${styles.textLogin}`}
              />
            </a>
            <p
              className={`${styles.textLogin} px-2 mt-1 text-xl hidden hover:text-gray-800 transition duration-100`}
            >
              <a href="/booking">Booking List</a>
            </p>

            {/* Log Out */}
            <a
              onClick={() => {
                handleLogout();
              }}
            >
              <FiLogIn
                className={` mt-0.5 hover:text-gray-800 transition duration-100 border-l-2 pl-1 hidden ${styles.textLogin}`}
              />
            </a>
            <p
              className={`${styles.textLogin} px-2 mt-1 text-xl hidden hover:text-gray-800 transition duration-100`}
            >
              <a onClick={() => handleLogout()}>Log Out</a>
            </p>
          </div>
        );
      }
      // token = false
      if (!localStorage.getItem("token")) {
        return (
          <div
            className={`flex  items-center mb-1 text-white text-2xl border-2 w-12 rounded-full p-2 ${styles.loginDisplay}`}
          >
            <p
              className={`${styles.textLogin} px-2 text-xl hidden hover:text-gray-800 transition duration-100`}
            >
              <a href="/user/login">Login</a>
            </p>

            <a href="/user/login">
              <FaUserCircle className=" mt-0.5 mr-0.5 hover:text-gray-800  transition duration-100" />
            </a>
          </div>
        );
      }
      // isRenter = true
      if (
        localStorage.getItem("is_renter") == "true" &&
        localStorage.getItem("token")
      ) {
        return (
          <div
            className={`flex items-center mb-1 text-white text-2xl border-2 rounded-full p-2 hover: w-12 ${styles.loginDisplay2}`}
          >
            <a>
              <FaUserCircle className=" ml-0.5 mt-0.5 hover:text-gray-800 transition duration-100" />
            </a>

            {/* Booking List */}
            <a href="#">
              <FaRegPlusSquare
                className={` mt-0.5 hover:text-gray-800 transition duration-100 ml-2 border-l-2 pl-1 hidden ${styles.textLogin}`}
              />
            </a>
            <p
              className={`${styles.textLogin} px-2 mt-1 text-xl hidden hover:text-gray-800 transition duration-100`}
            >
              <a href="#">Add Rooms</a>
            </p>

            {/* Log Out */}
            <a onClick={() => handleLogout()}>
              <FiLogIn
                className={` mt-0.5 hover:text-gray-800 transition duration-100 border-l-2 pl-1 hidden ${styles.textLogin}`}
              />
            </a>
            <p
              className={`${styles.textLogin} px-2 mt-1 text-xl hidden hover:text-gray-800 transition duration-100`}
            >
              <a onClick={() => handleLogout()}>Log Out</a>
            </p>
          </div>
        );
      }
    }
  }

  return (
    <div
      className={`flex justify-between items-center px-20 py-2 shadow-md sticky top-0 z-10 ${styles.bgNav}`}
    >
      {/* Icon */}
      <div>
        <div className={` ${styles.navLogo} `}>
          <Image
            onClick={() => router.push("/homepage")}
            src={Navbarlogo}
            layout="fill"
          ></Image>
        </div>
      </div>
      {/* Toggle Nav */}
      <div className="flex justify-start items-center">
        <div className={`flex ${styles.input}`}>
          <i className=" text-white ml-4 z-20 hover:text-gray-500">
            <FaSearch />
          </i>
          <input
            className={`${styles.inputSearch}`}
            type="search"
            id="text"
            name="text"
            placeholder="City"
          />
        </div>
        <div className={`mx-6 overflow-hidden hover:overflow-hidden`}>
          {stateLogin()}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
