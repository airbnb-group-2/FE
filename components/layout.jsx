import Navbar from "./navbar";
import { useRouter } from "next/router";
import Footer from "./footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import allStore from "../store/actions";

export default function Layout({ children }) {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(allStore.getListRooms());
  },[dispatch]);

  function ReturnNavbar() {
    const router = useRouter();
    const { asPath } = router;
    if (asPath === "/user/login" || asPath === "/user/register") {
      return <></>;
    } else {
      return <Navbar />;
    }
  }

  function returnFooter() {
    const router = useRouter();
    const { asPath } = router;
    if (asPath === "/user/login") {
      return <></>;
    } else if (asPath === "/user/register") {
      return <></>;
    } else {
      return <Footer />;
    }
  }

  function returnPage() {
    return <main>{children}</main>;
  }

  return (
    <>
      {ReturnNavbar()}
      {returnPage()}
      {returnFooter()}
    </>
  );
}
