import React from "react";
import styles from "../../styles/ListRoom.module.css";
import ReactStars from "react-rating-stars-component";
import { FaMoneyBillAlt } from "react-icons/fa";
import Mymap from "../map";

function Listroom() {
  const data = [
    {
      name: "Deluxe Room Joglo",
      id: 1,
      facilities:
        "2 Guest - 1 Bedroom - 1 Bed 1 Bathroom - Wifi - AC - Kitchen - Free Parking",
      price: "350.000",
      img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Deluxe Room Limasan",
      id: 2,
      facilities:
        "2 Guest - 1 Bedroom - 1 Bed 1 Bathroom - Wifi - AC - Kitchen - Free Parking",
      price: "280.000",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Deluxe Room Tugu",
      id: 3,
      facilities:
        "2 Guest - 1 Bedroom - 1 Bed 1 Bathroom - Wifi - AC - Kitchen - Free Parking",
      price: "420.000",
      img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Deluxe Room Prambanan",
      id: 4,
      facilities:
        "2 Guest - 1 Bedroom - 1 Bed 1 Bathroom - Wifi - AC - Kitchen - Free Parking",
      price: "350.000",
      img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  console.log(data);
  const mystar = {
    size: 30,
    value: 4,
    edit: false,
  };
  return (
    <div className=" flex pl-8 container">
      {/* Section Left */}
      <div className=" w-1/2">
        <p className=" text-4xl font-bold mt-3">Stays :</p>

        {/* Card */}
        {data.map((el, i) => (
          <div key={i}>
            <div className={styles.separator}></div>
            <div className=" flex">
              <div className=" w-1/2">
                <img
                  className={` rounded-xl drop-shadow-xl ${styles.imageCard}`}
                  src={el.img}
                  alt=""
                />
              </div>
              <div className=" w-1/2">
                <p className=" text-2xl font-bold mt-4">{el.name}</p>
                <div className={styles.miniSeparator}></div>
                <p className={styles.facilities}>{el.facilities}</p>
                <ReactStars {...mystar} />
                <div className="flex">
                  <p className=" text-4xl text-green-700">
                    <FaMoneyBillAlt />
                  </p>
                  <p className="ml-2 text-2xl"> Rp. {el.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
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

export default Listroom;
