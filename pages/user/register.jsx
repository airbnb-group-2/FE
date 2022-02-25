import Image from 'next/image'
import React from 'react'
import {FiUser, FiLock, FiLogIn, FiMail} from 'react-icons/fi'
import style from '../../styles/Login.module.css'
import logo from '../../assets/login/Logo.png'
import Link from 'next/link'

function register() {
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
                <form>
                    <div className={style.input}>
                        <FiUser/>
                        <input type="Email" id='Email' name='Email' placeholder='Email' required />
                        <label>Email</label>
                    </div>
                    <div className={style.input}>
                        <FiMail/>
                        <input type="Username" id='Username' name='Username' placeholder='Username' required />
                        <label>Username</label>
                    </div>
                    <div className={style.input}>
                        <FiLock/>
                        <input type="Password" id='Password' name='Password' placeholder='Password' required />
                        <label>Password</label>
                    </div>
                    <div className='grid grid-cols-2 mx-[0.5rem]'>
                        <div className='text-left text-[0.875rem]'>
                            <p>Already have an account ?</p>
                            <p><Link href="/user/login"><u>Sign Up Here!</u></Link></p>
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

export default register