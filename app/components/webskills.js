"use client";

import {useState} from 'react';
import { useDarkStore } from '../themeContext';

export default function WebSkills({isOpen}){

    const {isDark} = useDarkStore();

    return(
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex 
        items-center justify-center transition-opacity duration-300 z-50 overflow-auto font-mon">
            <div className={isDark ? "dark dark:text-white" : ""}>  
                <div className="bg-white lg:py-[200px] lg:px-[200px] md:py-[100px] md:px-[100px] xs:py-[50px] xs:mx-5 rounded-3xl
                lg:flex justify-start dark:bg-gray-600 content text-lg">
                        <div className='xs:mx-5'>
                        <h1 className='text-5xl font-bold bg-gradient-to-r from-cyan-500 to-purple-400 bg-clip-text text-transparent'>Programación Web</h1>
                        <p className='my-5'>
                            Mis habilidades web son las siguientes
                        </p>
                        <button onClick={() => isOpen(false)}
                        
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