import Navbar from "./navbar";
import { useRouter } from "next/router";
import Footer from "./footer";

export default function Layout({ children }) {
  function ReturnNavbar() {
    const router = useRouter();
    const { asPath } = router;
    if (asPath === "/user/login" || asPath === "/user/create") {
      return <></>;
    } else {
      return <Navbar />;
    }
  }

  function returnFooter() {
    const router = useRouter();
    const { asPath } = router;
    if (asPath === "/user/login" || asPath === "/user/create") {
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
