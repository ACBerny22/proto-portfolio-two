"use client"; 

import Image from 'next/image'

import docNote from '../images/DocNote.png'
import {  IoIosCloudyNight, IoIosSunny } from 'react-icons/io';
import { useState, useEffect} from 'react';


export default function DocNote() {


  const [darkMode, setDarkMode] = useState(false); 


  return (

    <div className='font-mon sm:px-10 lg:px-[200px]'>
       <section>
          <div className='flex justify-between items-center p-10 text-black dark:text-white'>
            <h1 className='transition ease-in-out text-2xl hover:scale-110'><label>ConleyDev</label></h1>
            <div className='flex gap-10'>
              <a className='transition ease-in-out hover:scale-125'>
                {darkMode ? <IoIosSunny className='text-3xl' onClick={() => setDarkMode(!darkMode)}/> : 
                <IoIosCloudyNight className='text-3xl' onClick={() => setDarkMode(!darkMode)}/>}
                </a>
              <a className='transition ease-out hover:scale-125' onClick={() => setIsDesktopOpen(!isDesktopOpen)}>
                <label className='bg-gradient-to-r from-cyan-500 to-sky-600 p-3 rounded-xl text-white   
                '>Contacto</label>
              </a>
            </div>
          </div>
        </section>
    <h1 className='text-5xl text-center mt-36 font-mon font-bold'>DocNote Page</h1>
    <div className='flex justify-center my-10 transition ease-out hover:brightness-75'>
      <Image
      src={docNote}
      alt={"This is me perros"}
      />
      </div>
    </div>
  )
}