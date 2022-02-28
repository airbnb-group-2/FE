import React, { useEffect, useState } from 'react'
import style from '../../styles/seller.module.css'
import Content from '../../components/admin/Content'
import {FiUsers, FiHome} from 'react-icons/fi'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

function admin() {
    const [active, setActive] = useState("rooms")
    const reroute = useRouter();

    useEffect(()=>{
        console.log(active);
    },[active])

    function handleTabs(e) {
        if (e === 1) {
            setActive('guest');
            console.log(active,'clicked 1');
        } else if (e === 2){
            setActive('rooms');
            console.log(active,'clicked 2');
        }
    }

    function showContent() {
        if (active === 'guest' || active === ' '){
           return  <Content content ='guest'/>
        } else if (active === 'rooms'){
            return <Content content ='rooms'/>
        }
    }
    if (typeof window !== "undefined") {
        if(!localStorage.getItem('is_renter')){
            Swal.fire("Access Denied", "You must be an admin", "error")
            setTimeout(() => {
                Swal.close();
                reroute.push('/');
            }, 2000);
        }
    }
  return (
      <div className={style.container+" "}>
        <div className='grid grid-cols-6 gap-4 '>
            <div>
                <div className={style.tabs}>
                    <h4 className={style.active} onClick={()=>handleTabs(1)}><FiUsers/>Guest List</h4>
                    <h4 onClick={()=>handleTabs(2)}><FiHome/>Room List</h4>
                </div>
            </div>
            <div className='col-span-5'>
                {showContent()}
            </div>
        </div>
      </div>
  )
}

export default admin