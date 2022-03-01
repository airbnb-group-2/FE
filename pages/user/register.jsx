import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {FiUser, FiLock, FiLogIn, FiMail} from 'react-icons/fi'
import style from '../../styles/Login.module.css'
import logo from '../../assets/login/Logo.png'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import allStore from "../../store/actions";
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

function register() {
  const dispatch = useDispatch();
  const reRoute = useRouter();
  const [email, setEmail] = useState("")
  const [name, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const body ={
    email, name, password
  }

  function handelSubmit(){
      dispatch(allStore.submitRegister(body))
      .then((data)=>{
          console.log(data, "Dipatch Success");
          Swal.fire("Congratulations..!", "Sign Up Succes", 'success')
          setTimeout(() => {
              Swal.close();
              reRoute.push("/user/login");
          }, 5000);
      })
      .catch((err)=>{
        Swal.fire('Ooops.. Somethings Wrong', 'Invalid Data !', 'error');
        console.log(err);
  
        if (name === ''  && email === '' && password === '') {
          Swal.fire('Sign Up Failed!', 'Field Can`t Be Empty!', 'error')
        }
        else if ( name === ''|| name.match(/^$|\s+/)) {
          Swal.fire('Sign Up Failed!','Name is Invalid!','error')
        }
        else if ( email === ''|| !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
          Swal.fire('Sign Up Failed!','Email is Invalid!','error')
        }
        else if ( password === '' || !/^\S*$/.test(password)) {
          Swal.fire('Sign Up Failed!','Password is Invalid!', 'error')
        }
      })
      .finally(()=>{
          console.log("dispatch Finally");
      })
  }

  return (
    <div className={'mx-0 flex justify-start '+ style.background}>
        <div className='h-4/5'>
            <Image 
            src="/assets/login/bg-register.png"
            alt='login background'
            layout='fill'
            objectFit='cover'
            objectPosition='bottom'
            className="z-0"
            />
        </div>
        <div className={style.content + " z-1 w-[50vw] h-[100vh] py-10 flex flex-col justify-between items-center "}>
            <div className='self-end'>
                <Image src = {logo}  height="100px" objectFit='contain' objectPosition="center" />
            </div>
            <div className={'drop-shadow '+style.form}>
                <h2>Ready to Travel?</h2>
                <h1>Let's Sign You Up.</h1>
                <p>Start planing your journey !</p>
                <div className={style.formCard}>
                    <div className={style.input}>
                        <FiUser/>
                        <input type="Username" id='Username' name='Username' placeholder='Username' onChange={(e) => {setUsername(e.target.value)}} />
                        <label>Username</label>
                    </div>
                    <div className={style.input}>
                        <FiMail/>
                        <input type="Email" id='Email' name='Email' placeholder='Email'  autoComplete='off' onChange={(e) => {setEmail(e.target.value)}} />
                        <label>Email</label>
                    </div>
                    <div className={style.input}>
                        <FiLock/>
                        <input type="Password" id='Password' name='Password' placeholder='Password' onChange={(e) => {setPassword(e.target.value)}} />
                        <label>Password</label>
                    </div>
                    <div className='grid grid-cols-2 mx-[0.5rem]'>
                        <div className='text-left text-[0.875rem]'>
                            <p>Already have an account ?</p>
                            <p><Link href="/user/login"><u>Sign In Here!</u></Link></p>
                        </div>
                        <div className='text-right'>
                            <button className='rounded-lg' onClick={handelSubmit}>Sign In <FiLogIn/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
              <h3>© 2022 Beta BnB, Inc. All rights reserved</h3>

            </div>
        </div>
    </div>
  )
}

export default register