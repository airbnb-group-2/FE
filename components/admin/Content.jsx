import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getListRooms } from '../../store/actions/roomList'
import style from '../../styles/seller.module.css'
import RoomCards from './RoomCards'

const rooms = [
    {
        'id' : 1
        ,'name': "Joglo Koyo Loyo"
        ,'img': "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        ,'empty': 20
        ,'checkin': 20
        ,'booked': 20
    },
    {
        'id' : 5
        ,'name': "Joglo Koyo Loyo"
        ,'img': "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        ,'empty': 20
        ,'checkin': 20
        ,'booked': 20
    },
    {
        'id' : 4
        ,'name': "Joglo Koyo Loyo"
        ,'img': "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        ,'empty': 20
        ,'checkin': 20
        ,'booked': 20
    },
    {
        'id' : 3
        ,'name': "Joglo Koyo Loyo"
        ,'img': "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        ,'empty': 20
        ,'checkin': 20
        ,'booked': 20
    },
    {
        'id' : 2
        ,'name': "Joglo Koyo Loyo"
        ,'img': "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        ,'empty': 20
        ,'checkin': 20
        ,'booked': 20
    },
]

function Content(props) {
    const [tabs] = useState(props.content)
    if(tabs === 'guest'){
        return (
            <div className={style.content}>
                <div className={'grid grid-cols-4 gap-1 '+ style.summ}>
                    <div>
                        <b>55</b>
                        <p>Room Available</p>
                    </div>
                    <div>
                        <b>22</b>
                        <p>Customer Booked</p>
                    </div>
                    <div>
                        <b>62</b>
                        <p>Customer Check-in</p>
                    </div>
                    <div>
                        <b>69</b>
                        <p>Customer Canceled</p>
                    </div>
                </div>
                <hr />
                <div className={"flex flex-col my-5 "+style.table}>
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b  sm:rounded-lg">
                            <table className="min-w-full divide-y ">
                            <thead className="bg-blue-50">
                                <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">Reserve ID</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">Guest Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">Contact</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">Rooms Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-bold  uppercase tracking-wider">Status</th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                                </tr>
                            </thead>
                            <tbody className="bg-slate-50 divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm ">111.111.111</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm ">Muhammad Rizki Adiwiganda</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm ">081225419228</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm bg-yellow-100 text-yellow-800">19 Feb 2022</div>
                                            <hr/>
                                            <div className="text-sm bg-green-100 text-green-800">28 Feb 2022</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Check-In </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm ">111.111.111</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm ">Muhammad Rizki Adiwiganda</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm ">081225419228</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm bg-yellow-100 text-yellow-800">19 Feb 2022</div>
                                            <hr/>
                                            <div className="text-sm bg-green-100 text-green-800">28 Feb 2022</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800"> Booked </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm ">111.111.111</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm ">Muhammad Rizki Adiwiganda</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm ">081225419228</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm bg-yellow-100 text-yellow-800">19 Feb 2022</div>
                                            <hr/>
                                            <div className="text-sm bg-green-100 text-green-800">28 Feb 2022</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"> Canceled </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    </td>
                                </tr>

                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if( tabs === 'rooms') {
        return(
            <div className={style.content}>
                <h1 className='text-4xl my-1 font-semibold text-center'>Admin Dashboard</h1>
                <div className={'grid grid-cols-4 gap-5 '}>
                    {
                        rooms.map((e,i)=>(
                            <RoomCards 
                            id = {e.id}
                            name = {e.name}
                            img = {e.img}
                            empty = {e.empty}
                            checkin = {e.checkin}
                            booked = {e.booked}
                            key = {i} />
                        ))
                    }
                    <RoomCards type="add"/>
                </div>
            </div>
        )
    }

  return (
    <>
    </>
  )
}

export default Content