"use client"; 


import Image from 'next/image'
import Lottie from "lottie-react";
import animationData from "../assets/devanim.json"
import { useEffect, useRef } from 'react';


export default function About(){

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
        <div className='py-16' ref={animatronic}>
            <div className='xl:px-[200px] lg:px-[150px] md:px-[50px] xs:mx-5 pledge'>
                <h1 className='font-medium lg:text-3xl xs:text-2xl' >
                    ¿Quién soy?
                </h1>
                <div className='xl:grid xl:grid-cols-2 xl:gap-24 xl:grid-flow-col-dense	'>
                    <div className='relative mx-auto xl:w-auto md:w-96 '>
                        <Lottie animationData={animationData} className="text-center xl:mt-40 2xl:mt-0"/>
                    </div>
                    <div>
                    <p className='leading-loose lg:text-xl lg:leading-loose xs:text-lg dark:text-gray-300 xl:mx-10 2xl:mt-52  font-light
                    xs:leading-10 xl:mt-40
                    text-justify'>
                    Soy un <b className='font-medium'>Estudiante en Sistemas Computacionales</b> actualmente estudiando en el 
                    <b className='text-yellow-500 font-medium'> Instituto Tecnologico de Cd. Madero</b>. 
                    Con experiencia en el ámbito de desarrollo de software
                    y coordinación de equipos de desarrollo.
                    </p>
                    </div>
                </div>
                <div>
                    <p className='leading-loose lg:text-xl lg:leading-loose xs:text-lg dark:text-gray-300 xl:mx-10 xs:mt-20 font-light
                    xs:leading-10
                    text-justify pledge'>
                    Soy un <b className='font-medium'>Estudiante en Sistemas Computacionales</b> actualmente estudiando en el 
                    <b className='text-yellow-500 font-medium'> Instituto Tecnologico de Cd. Madero</b>. 
                    Con experiencia en el ámbito de desarrollo de software
                    y coordinación de equipos de desarrollo.
                    </p>      
                </div>
            </div>
        </div>
    );
}