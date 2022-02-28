import Image from 'next/image'
import React from 'react'
import style from '../../styles/seller.module.css'
import {FiXOctagon} from 'react-icons/fi'

function RoomCards(props) {

    if (props.type === 'add') {
        return (
            <div id={props.id} className={style.card+" rounded-lg my-2 flex justify-center items-center flex-col"}>
                <div className={'flex justify-center items-center flex-col h-[95%] w-[90%] '+ style.inner}>
                    <FiXOctagon/>
                </div>
            </div>
        )
    }
  return (
    <div id={props.id} className={style.card+" rounded-lg my-2"}>
        <div>
            <Image
                src={props.img}
                layout='responsive'
                objectFit='cover'
                width={'100%'}
                height={'100%'}
                className={style.cardimg}
            />
        </div>
        <div className='text-left my-4 mx-2'> 
            <p className='font-bold text-lg'>{props.name}</p>
            <span className=' text-sm'>Rooms Info:</span>
            <hr />
            <div className='grid grid-cols-2 text-sm my-2'>
                <div className='font-bold flex justify-between mx-1 py-1'><span>Empty</span><span className='bg-red-200 text-red-900 px-1 rounded-md'>{props.empty}</span></div>
                <div className='font-bold flex justify-between mx-1 py-1'><span>Booked</span><span className='bg-yellow-200 text-yellow-900 px-1 rounded-md'>{props.booked}</span></div>
                <div className='font-bold flex justify-between mx-1 py-1'><span>Checked-In</span><span className='bg-teal-200 text-teal-900 px-1 rounded-md'>{props.checkin}</span></div>
            </div>
        </div>
    </div>
  )
}

export default RoomCards