import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Homepage from "./homepage.jsx"

export default function Home() {
  return (
    <div>
      <Homepage />
    </div>
  );
}
