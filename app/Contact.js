"use client"; 
import { useState } from 'react';
import Image from 'next/image'


import programmer from './images/programador.png'

export default function DesktopApps({childToParent, parentToChild}){

    return(
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex 
        items-center justify-center transition-opacity duration-300 z-50 overflow-auto font-mon">
            <div className={parentToChild ? "dark dark:text-white" : ""}>  
                <div className="bg-white lg:py-[200px] lg:px-[200px] md:py-[100px] md:px-[100px] xs:py-[50px] xs:mx-5 rounded-3xl
                lg:flex justify-start dark:bg-gray-600 content text-lg">
                    <div className='lg:relative lg:w-80 mb-3 md:w-40 sm:w-40 xs:w-40 xs:mx-auto md:mx-0'>
                        <Image 
                        src={programmer}
                        alt={""}
                        /> 
                    </div>
                    <div className='xs:mx-5'>
                    <h1 className='text-5xl font-bold text-sky-600'>¿Quieres hablar conmigo?</h1>
                    <p className='my-5'>
                        Puedes contactarme para hablar de negocios, o solo tomar un cafe.<br/>
                        Sería genial escuchar de ti.
                    </p>
                    <div className='my-5'>   
                        <p className='text-sky-600'>No. Telefono:</p>
                        <p className='mb-5'>+51 833 301 9932</p>
                        <p className='text-sky-600'>Email:</p>
                        <p>mau221201@gmail.com</p>
                        <p>mau221201@hotmail.com</p>
                    </div>
                    <button onClick={() => childToParent(false)}
                    
                    className="p-3 bg-sky-600 rounded-xl transition ease-in-out hover:bg-transparent text-white hover:text-sky-600
                    hover:border-solid border-2 border-sky-600">
                        Cerrar
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );

}