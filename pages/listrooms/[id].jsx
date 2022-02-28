import React, { useEffect, useState } from "react";
import styles from "../../styles/ListRoom.module.css";
import ReactStars from "react-rating-stars-component";
import { FaMoneyBillAlt } from "react-icons/fa";
import Mymap from "../../components/Map";
import { useRouter } from "next/router";
import axios from "axios";
import NumberFormat from "react-number-format";

export default function ListRoom() {
  const router = useRouter();

  const [listroom, setListroom] = useState([]);
  const mystar = {
    size: 30,
    value: 4,
    edit: false,
  };

  useEffect(() => {
    axios
      .get("http://3.1.211.120:8081/rooms/all")
      .then(({ data }) => {
        setListroom(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err, "error bang");
      });
  }, []);

  function randomStart() {
    return Math.floor(Math.random() * 5) + 3;
  }

  return (
    <div className=" flex pl-8 container">
      {/* Section Left */}
      <div className=" w-1/2">
        <p className=" text-4xl font-bold mt-3 mb-1">Special For You :</p>

        {/* Card */}
        <div className={styles.overflow}>
          {listroom.map((el, i) => (
            <div
              onClick={() => router.push(`/rooms/${el.id}`)}
              className=" mb-7"
              key={i}
            >
              <div className={styles.separator}></div>
              <div className=" flex">
                <div className=" w-1/2">
                  <img
                    className={` rounded-xl drop-shadow-xl ${styles.imageCard}`}
                    src={el.description}
                  />
                </div>
                <div className=" w-1/2">
                  <p className=" cursor-pointer text-2xl font-bold mt-4">
                    {el.name}
                  </p>
                  <div className={styles.miniSeparator}></div>
                  <p
                    className={styles.facilities}
                  >{`${el.guest} Guest - ${el.bedroom} Bedroom - 2 Bed 1 Bathroom - Wifi - AC - Kitchen - Free Parking`}</p>
                  <ReactStars {...mystar} value={randomStart()} />
                  <div className="flex">
                    <p className=" text-4xl text-green-700">
                      <FaMoneyBillAlt />
                    </p>
                    <p className="ml-2 text-2xl">
                      Rp.{" "}
                      <NumberFormat
                        value={el.price}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Right */}
      <div className=" w-1/2 relative h-screen">
        <div className="">
          <Mymap />
        </div>
      </div>
    </div>
  );
}
