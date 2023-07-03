"use client"; 
import Image from 'next/image'
import Lottie from "lottie-react";
import animationData from "../assets/devanim.json"


export default function About(){
    return(
        <div className='py-16'>
            <div className='xl:px-[200px] lg:px-[150px] md:px-[50px] xs:mx-5'>
                <h1 className='font-medium lg:text-3xl xs:text-2xl' >
                    ¿Quién soy?
                </h1>
                <div className='xl:grid xl:grid-cols-2 xl:gap-24 xl:grid-flow-col-dense	'>
                    <div className='relative mx-auto xl:w-auto md:w-96 '>
                        <Lottie animationData={animationData} className="text-center"/>
                    </div>
                    <div>
                    <p className='leading-loose lg:text-xl lg:leading-loose xs:text-lg dark:text-gray-300 xl:mx-10 xl:mt-52  font-light
                    xs:leading-10
                    text-justify'>
                    Soy un <b className='font-medium'>Estudiante en Sistemas Computacionales</b> actualmente estudiando en el 
                    <b className='text-yellow-500 font-medium'> Instituto Tecnologico de Cd. Madero</b>. 
                    Con experiencia en el ámbito de desarrollo de software
                    y coordinación de equipos de desarrollo.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}