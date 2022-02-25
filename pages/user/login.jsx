import Image from 'next/image'
import React from 'react'
import {FiUser, FiLock, FiLogIn} from 'react-icons/fi'
import style from '../../styles/Login.module.css'
import logo from '../../assets/login/Logo.png'
import Link from 'next/link'

function login() {
  return (
    <div className={'mx-0 flex justify-end '+ style.background}>
        <div className='h-4/5'>
            <Image 
            src="/assets/login/bg-login.png"
            alt='login background'
            layout='fill'
            objectFit='cover'
            objectPosition='bottom'
            className=" z-0"
            />
        </div>
        <div className={style.content + " z-1 w-[50vw] h-[100vh] py-10 flex flex-col justify-between items-center "}>
            <div className='self-start'>
                <Image src = {logo}  height="100px" objectFit='contain' objectPosition="center" />
            </div>
            <div className={'drop-shadow '+style.form}>
                <h2>Welcome Back.</h2>
                <h1>Sign In Your Account</h1>
                <p>Start planing your journey !</p>
                <form>
                    <div className={style.input}>
                        <FiUser/>
                        <input type="email" id='email' name='email' placeholder='Email' required />
                        <label>Email</label>
                    </div>
                    <div className={style.input}>
                        <FiLock/>
                        <input type="Password" id='Password' name='Password' placeholder='Password' required />
                        <label>Password</label>
                    </div>
                    <div className='grid grid-cols-2 mx-[0.5rem]'>
                        <div className='text-left text-[0.875rem]'>
                            <p>Don’t have an account ?</p>
                            <p><Link href="/user/register"><u>Sign Up Here!</u></Link></p>
                        </div>
                        <div className='text-right'>
                            <button className='rounded-lg'>Sign In <FiLogIn/></button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
              <h3>© 2022 Beta BnB, Inc. All rights reserved</h3>

            </div>
        </div>
    </div>
  )
}

export default login