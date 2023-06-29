"use client"; 
import Image from 'next/image'
import Lottie from "lottie-react";
import animationData from "../assets/devanim.json"


export default function About(){
    return(
        <div className='py-16'>
            <div className='lg:px-[200px] sm:mx-5'>
                <h1 className='lg:text-3xl font-bold xs:text-2xl' >
                    ¿Quién soy?
                </h1>
                <div className='xl:grid xl:grid-cols-2 xl:gap-24 xl:grid-flow-col-dense	'>
                    <div className='relative mx-auto xl:w-auto md:w-96 '>
                        <Lottie animationData={animationData} className="text-center"/>
                    </div>
                    <div>
                    <p className='leading-loose lg:text-xl lg:leading-loose md:text-lg dark:text-gray-300 xl:mx-10 xl:mt-52 
                    text-justify'>
                    Soy un <b>Ingeniero en Sistemas Computacionales</b> egresado del <b className='text-yellow-500'>Instituo Tecnologico de Cd. Madero</b>. 
                    Con experiencia en el ámbito de desarollo de software
                    y coordinación de equipos de desarrollo.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}