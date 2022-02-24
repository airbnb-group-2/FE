import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <h1 className="text-blue-700"> Semangat Gan !</h1>
      <Footer />
    </div>
  );
}
