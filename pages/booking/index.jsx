import { useState, useEffect } from "react";
import styles from "../../styles/Booking.module.css";
import { FaCalendarAlt, FaCalendarMinus, FaMoneyBillAlt } from "react-icons/fa";
import ReactLoading from "react-loading";

function Booking() {
  const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     setLoading(true);

  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 1000);
  //   }, []);

  const data = [
    {
      name: "Deluxe Room Joglo",
      id: 1,
      value: 3,
      checkin: "Wed, 03 Feb 2022",
      checkout: "Wed, 04 Feb 2022",
      price: "350.000",
      img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Deluxe Room Limasan",
      id: 2,
      value: 4,
      checkin: "Wed, 24 Feb 2022",
      checkout: "Wed, 25 Feb 2022",
      facilities:
        "2 Guest - 1 Bedroom - 1 Bed 1 Bathroom - Wifi - AC - Kitchen - Free Parking",
      price: "280.000",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Deluxe Room Tugu",
      id: 3,
      value: 5,
      checkin: "Wed, 13 Mar 2022",
      checkout: "Wed, 24 Mar 2022",
      facilities:
        "2 Guest - 1 Bedroom - 1 Bed 1 Bathroom - Wifi - AC - Kitchen - Free Parking",
      price: "420.000",
      img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Deluxe Room Prambanan",
      id: 4,
      value: 2,
      checkin: "Wed, 27 Apr 2022",
      checkout: "Wed, 29 Apr 2022",
      facilities:
        "2 Guest - 1 Bedroom - 1 Bed 1 Bathroom - Wifi - AC - Kitchen - Free Parking",
      price: "350.000",
      img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  function Loading() {
    if (loading) {
      return (
        <div className=" ">
          <ReactLoading
            type={"cylon"}
            color={"#000000"}
            height={"10%"}
            width={"10%"}
          />
        </div>
      );
    } else {
      return <></>;
    }
  }

  return (
    <div className=" flex pl-8 container">
      {/* Section Left */}
      <div className=" w-1/2">
        {Loading()}
        <p className=" text-4xl font-bold mt-3 mb-1">Histories :</p>

        {/* Card */}
        <div className={styles.overflow}>
          {data.map((el, i) => (
            <div
              //   onClick={() => router.push(`/detail/${el.id}`)}
              className=" mb-7"
              key={i}
            >
              <div className={styles.separator}></div>
              <div className=" flex">
                <div className=" w-1/2">
                  <img
                    className={` rounded-xl drop-shadow-xl ${styles.imageCard}`}
                    src={el.img}
                  />
                </div>
                <div className=" w-1/2">
                  <p className=" cursor-pointer text-2xl font-bold p-0">
                    {el.name}
                  </p>
                  <div className={styles.miniSeparator}></div>
                  <p className=" font-semibold">Check in :</p>
                  <div className=" flex text-gray-600 mt-1 items-center">
                    <FaCalendarAlt /> <p className="ml-2">{el.checkin}</p>
                  </div>
                  <p className=" font-semibold mt-1">Check out :</p>
                  <div className=" flex text-gray-600 mt-1 items-center">
                    <FaCalendarMinus /> <p className="ml-2">{el.checkout}</p>
                  </div>

                  <p className=" font-semibold mt-1">Total price :</p>
                  <div className=" flex text-gray-600 mt-1 items-center">
                    <span className=" text-green-700 text-2xl">
                      <FaMoneyBillAlt />{" "}
                    </span>
                    <p className="ml-2">Rp. {el.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Right */}
      <div className={`w-1/2 relative h-screen ${styles.bgBooking}`}>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Booking;
