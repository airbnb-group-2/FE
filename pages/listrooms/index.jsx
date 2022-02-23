import React from "react";
import styles from "../../styles/ListRoom.module.css";
import ReactStars from "react-rating-stars-component";
import { FaMoneyBillAlt } from "react-icons/fa";

function Listroom() {
  const mystar = {
    size: 30,
    value: 4,
    edit: false,
  };
  return (
    <div className=" flex px-8 mt-3">
      {/* Section Left */}
      <div className=" w-1/2">
        <p className=" text-4xl font-bold">Stays :</p>

        {/* Card */}
        <div className={styles.separator}></div>
        <div className=" flex">
          <div className=" w-1/2">
            <img
              className={` rounded-xl drop-shadow-xl ${styles.imageCard}`}
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className=" w-1/2">
            <p className=" text-2xl font-bold mt-7">Deluxe Room Joglo </p>
            <div className={styles.miniSeparator}></div>
            <p className={styles.facilities}>
              2 Guest - 1 Bedroom - 1 Bed 1 Bathroom - Wifi - AC - Kitchen -
              Free Parking
            </p>
            <ReactStars {...mystar} />
            <div className="flex">
              <p className=" text-4xl text-green-700">
                <FaMoneyBillAlt />
              </p>
              <p className="ml-2 text-2xl"> Rp. 350.000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Right */}
      <div className=" w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        quod consequuntur corrupti. Optio ipsum accusamus veniam alias, ea quo
        inventore quas praesentium! Eligendi adipisci amet illum enim vel eius
        magnam!
      </div>
    </div>
  );
}

export default Listroom;
