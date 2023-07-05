"use client"; 

import Image from 'next/image'

import {  IoIosCloudyNight, IoIosSunny } from 'react-icons/io';
import { useState, useEffect} from 'react';
import { useSearchParams } from 'next/navigation'
import { useDarkStore } from '../../themeContext';


export default function DocNote({params}) {

  const {isDark, setIsDark} = useDarkStore();

  console.log(params.DocNote)

  return (
    <div className={isDark ? 'dark bg-gray-900 text-white' : ''}>
      <div className='font-mon sm:px-10 lg:px-[200px]'>
        <section>
            <div className='flex justify-between items-center p-10 text-black dark:text-white'>
              <h1 className='transition ease-in-out text-2xl hover:scale-110'><label>ConleyDev</label></h1>
              <div className='flex gap-10'>
                <a className='transition ease-in-out hover:scale-125'>
                  {isDark ? <IoIosSunny className='text-3xl' onClick={() => {setIsDark(!isDark)}}/> : 
                  <IoIosCloudyNight className='text-3xl' onClick={() => {setIsDark(!isDark)}}/>}
                  </a>
                <a className='transition ease-out hover:scale-125' onClick={() => setIsDark(!isDark)}>
                  <label className='bg-gradient-to-r from-cyan-500 to-sky-600 p-3 rounded-xl text-white   
                  '>Contacto</label>
                </a>
              </div>
            </div>
          </section>
      <h1 className='text-5xl text-center mt-36 font-mon font-bold'>Social Tweet App</h1>
      <div className='flex justify-center my-10 transition ease-out hover:brightness-75'>
        </div>
      </div>
    </div>
  )
}