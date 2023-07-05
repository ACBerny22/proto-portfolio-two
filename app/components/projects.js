"use client"; 

import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect, useRef} from 'react';

import docNote from '../images/DocNote.png';
import tweets from '../images/tweetsApi.png';
import port from '../images/port.png';
import loteria from '../images/loteria.png';
import reciclaje from '../images/reciclaje.jpg';
import food from '../images/food.png';

import {  DiJava, DiMysql, DiReact } from 'react-icons/di';
import { FaRProject } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import {SiTailwindcss} from 'react-icons/si';

export default function Projects() {

    const animatronic = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animationSt'); // Add the animation class when the element is in view
            } else {
              entry.target.classList.remove('animationSt'); // Remove the animation class when the element is out of view
              entry.target.classList.add('animationStAnti'); // Remove the animation class when the element is out of view
            }
          });
        });
    
        const elements = animatronic.current.querySelectorAll('.pledge');
        elements.forEach((el) => observer.observe(el));
    
        return () => observer.disconnect(); // Cleanup the observer on component unmount
      }, []);
    
    
    return( 
        <div >
            <div className='xl:px-[200px] lg:px-[150px] md:px-[50px] xs:mx-7' ref={animatronic}>
                <div className='pledge'>
                    <h1 className='mb-10 text-3xl font-medium dark:text-white'>Mis Proyectos</h1>
                    <p className='lg:text-xl mt-2 xs:text-lg dark:text-gray-300 text-justify font-light lg:leading-loose xs:leading-10 mb-9'>
                        Así como he aprendido diversas tecnologías, he aplicado dichos conocimientos para construir varios proyectos, 
                        desde Desarrollo Web hasta aplicaciones de gestión de información y análisis de datos.
                    </p>
                </div>
                <div className='xl:grid xl:grid-cols-2 xl:gap-10'>
                    <div>
                        <div className='mb-5 relative hover:scale-105 transition-all ease-in-out pledge mx-5'>    
                                <div className="absolute inset-0 z-10 bg-gradient-to-r from-cyan-600/75 to-purple-500/75 text-white text-center flex flex-col 
                                items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                                    <p className="mx-auto font-semibold text-3xl">DocNote</p>
                                    <p className="mx-auto font-light text-xl">Sistema de Gestión de Pacientes y Consultas</p>
                                    <div className='flex gap-10 mt-10'>
                                        <DiJava className='text-7xl'></DiJava>
                                        <DiMysql className='text-7xl'></DiMysql>
                                    </div>
                                </div>
                                <div>          
                                    <Image
                                    src={docNote}
                                    alt={"This is me perros"}
                                    className=""
                                    />
                                </div>  
                        </div>
                        <div className='mb-5 relative hover:scale-105 transition-all ease-in-out pledge mx-5'>    
                                <div className="absolute inset-0 z-10 bg-gradient-to-r from-cyan-600/75 to-purple-500/75 text-white text-center flex flex-col 
                                items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                                    <p className="mx-auto font-semibold text-3xl">Social Tweet Comparer</p>
                                    <p className="mx-auto font-light text-xl">App para analisis de sentimientos</p>
                                    <div className='flex gap-10 mt-10'>
                                        <FaRProject className='text-7xl'></FaRProject>
                                    </div>
                                </div>
                                <div>          
                                    <Image
                                    src={tweets}
                                    alt={"This is me perros"}
                                    className=""
                                    />
                                </div>  
                        </div>
                        <div className='mb-5 relative hover:scale-105 transition-all ease-in-out pledge mx-5'>    
                                <div className="absolute inset-0 z-10 bg-gradient-to-r from-cyan-600/75 to-purple-500/75 text-white text-center flex flex-col 
                                items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                                    <p className="mx-auto font-semibold text-3xl">Portafolio</p>
                                    <p className="mx-auto font-light text-xl">Gracias por visitarme</p>
                                    <div className='flex gap-10 mt-10'>
                                        <DiReact className='text-7xl'></DiReact>
                                        <SiTailwindcss className='text-7xl'></SiTailwindcss>
                                    </div>
                                </div>
                                <div>          
                                    <Image
                                    src={port}
                                    alt={"This is me perros"}
                                    className=""
                                    />
                                </div>  
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-10 justify-center'>
                            <div className='mb-5 relative hover:scale-105 transition-all ease-in-out w-72 pledge mx-5'>
                                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-cyan-600/75 to-purple-500/75 text-white text-center flex flex-col 
                                    items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                                        <p className="mx-auto font-semibold text-3xl">Lotería</p>
                                        <p className="mx-auto font-light text-xl">Baraja Virtual</p>
                                        <div className='flex gap-10 mt-10'>
                                            <TbBrandReactNative className='text-7xl'></TbBrandReactNative>
                                        </div>
                                    </div>
                                    <div>          
                                        <Image
                                        src={loteria}
                                        alt={"This is me perros"}
                                        className=""
                                        />
                                    </div>  
                            </div>
                            <div className='mb-5 relative hover:scale-105 transition-all ease-in-out w-72 pledge mx-5'>
                                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-cyan-600/75 to-purple-500/75 text-white text-center flex flex-col 
                                    items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                                        <p className="mx-auto font-semibold text-3xl">Recycler App</p>
                                        <p className="mx-auto font-light text-xl">Concepto de Interfáz</p>
                                        <div className='flex gap-10 mt-10'>
                                            <TbBrandReactNative className='text-7xl'></TbBrandReactNative>
                                        </div>
                                    </div>
                                    <div>          
                                        <Image
                                        src={reciclaje}
                                        alt={"This is me perros"}
                                        className=""
                                        />
                                    </div>  
                            </div>
                        </div>
                        <div className='mb-5 relative hover:scale-105 transition-all ease-in-out pledge mx-5'>    
                                <div className="absolute inset-0 z-10 bg-gradient-to-r from-cyan-600/75 to-purple-500/75 text-white text-center flex flex-col 
                                items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                                    <p className="mx-auto font-semibold text-3xl">No Waste List</p>
                                    <p className="mx-auto font-light text-xl">Lista de Compras Virtual</p>
                                    <p className="mx-auto font-medium text-xl">ft. VDBA</p>
                                    <div className='flex gap-10 mt-10'>
                                        <DiReact className='text-7xl'></DiReact>
                                    </div>
                                </div>
                                <div>          
                                    <Image
                                    src={food}
                                    alt={"This is me perros"}
                                    className=""
                                    />
                                </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


