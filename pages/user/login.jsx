import Image from "next/image";
import React, { useState } from "react";
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";
import style from "../../styles/Login.module.css";
import logo from "../../assets/Logo-black.png";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import allStore from "../../store/actions";
import Swal from "sweetalert2";

function login() {
  const dispatch = useDispatch();
  const reRoute = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const body = {
    email,
    password,
  };

  function handelSubmit() {
    dispatch(allStore.submitLogin(body))
      .then(({ data }) => {
        Swal.fire(
          "Welcome..! Happy Planing! ",
          "You will be directed to homepage",
          "success"
        );
        localStorage.setItem("token", data);
        setTimeout(() => {
          Swal.close();
          reRoute.push("/");
        }, 3000);
        setTimeout(() => {
          window.location.reload(true);
        }, 4000);
      })
      .catch((err) => {
        if (email === "" && password === "") {
          Swal.fire("Sign In Failed!", "Field Can`t Be Empty!", "error");
        } else if (
          email === "" ||
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
        ) {
          Swal.fire("Sign In Failed!", "Email is Invalid!", "error");
        } else if (password === "" || !/^\S*$/.test(password)) {
          Swal.fire("Sign In Failed!", "Password is Invalid!", "error");
        }
        setTimeout(() => {
          Swal.close();
        }, 2000);
      })
      .finally(() => {
        console.log("dispatch Finally");
      });
  }

  return (
    <div className={"mx-0 flex justify-end " + style.background}>
      <div className="h-4/5">
        <Image
          src="/assets/login/bg-login.png"
          alt="login background"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          className=" z-0"
        />
      </div>
      <div
        className={
          style.content +
          " z-1 w-[50vw] h-[100vh] py-10 flex flex-col justify-between items-center "
        }
      >
        <div className="self-start">
          <Image
            src={logo}
            height="100px"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <div className={"drop-shadow " + style.form}>
          <h2>Welcome Back.</h2>
          <h1>Sign In Your Account</h1>
          <p>Start planing your journey !</p>
          <div className={style.formCard}>
            <div className={style.input}>
              <FiMail />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label>Email</label>
            </div>
            <div className={style.input}>
              <FiLock />
              <input
                type="Password"
                id="Password"
                name="Password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label>Password</label>
            </div>
            <div className="grid grid-cols-2 mx-[0.5rem]">
              <div className="text-left text-[0.875rem]">
                <p>Don’t have an account ?</p>
                <p>
                  <Link href="/user/register">
                    <u>Sign Up Here!</u>
                  </Link>
                </p>
              </div>
              <div className="text-right">
                <button className="rounded-lg" onClick={handelSubmit}>
                  Sign In <FiLogIn />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>© 2022 Beta BnB, Inc. All rights reserved</h3>
        </div>
      </div>
    </div>
  );
}

export default login;
