"use client";

import { useState, useRef, useEffect } from 'react';

import Image from 'next/image'

import prof from '../images/me.jpg';
import prof2 from '../images/Aaron3.png';
import webIcon from '../images/html-5.png';
import movileIcon from '../images/aplicacion-movil.png';
import deskIcon from '../images/java.png';
import Contact from '@/app/Contact';

import {  DiAndroid, DiCss3, DiHtml5, DiJava, DiJsBadge, DiMysql, DiNodejs, DiNodejsSmall, DiPython, DiRasberryPi, DiReact } from 'react-icons/di';
import { FaRProject } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import WebSkills from './webskills';


export default function Skills(){

  const[isWebSkillsOpen, setIsWebSkillsOpen] = useState(false);

  const animatronic = useRef(null);

  // Recieve if WebSkills is closed
  const IsWebSkillsOpen = (childdata) => {
  setIsWebSkillsOpen(childdata)
  }


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
      
        <div className='xl:px-[200px] lg:px-[150px] md:px-[50px] xs:mx-5' ref={animatronic}>
            {isWebSkillsOpen ? <WebSkills isOpen={IsWebSkillsOpen}/> : null}
            <div className='pledge'>
            <h1 className='mb-10 lg:text-3xl font-medium xs:text-2xl'>
              Mis Habilidades
            </h1>
            <p className='lg:text-xl mt-2 xs:text-lg dark:text-gray-300 text-justify font-light lg:leading-loose xs:leading-10'>
            A lo largo de mi trayectoria, me he especializado en el uso de diversas tecnologías, lo cual ha sido fundamental para construir una 
            sólida base de conocimientos y habilidades en el campo del desarrollo. Estas tecnologías han abarcado diferentes áreas, desde <b className='font-medium'>desarrollo web 
            y móvil hasta análisis de datos</b>.
            </p>
          </div>
        <div className='mx-5 dark:text-white mb-36'>
          <div className='text-center lg:flex gap-10 justify-center'>
            <div className='flex-col  p-10 bg-white drop-shadow-xl rounded-2xl my-10 dark:bg-gray-700 transition ease-all hover:scale-105 hover:rounded-xl pledge'
            onClick={() => {setIsWebSkillsOpen(true)}} ref={animatronic}>
              <div className='relative mx-auto w-40 h-40 mb-3'>
                <Image 
                src={webIcon}
                alt={""}
                />   
              </div>
              <h3 className='text-xl font-medium'>Proyectos Web</h3>
              <p className='mt-2 dark:text-gray-300 font-light'>Especializado en crear aplicaciones y sistemas hechos a la medida </p>
              <p className='my-5 text-sky-500 text-lg'>Tecnologías</p>
              <div className='text-6xl flex justify-center gap-5 text-slate-500 dark:text-white'>
                <DiHtml5/>
                <DiCss3/>
                <DiJsBadge/>
              </div>
              <div className='text-6xl flex justify-center gap-5 text-slate-500 dark:text-white my-5'>
                <DiReact/>
                <DiNodejsSmall/>
              </div>
            </div>
            <div className='flex-col  p-10 bg-white drop-shadow-xl rounded-2xl my-10 dark:bg-gray-700 transition ease-all hover:scale-105 hover:rounded-xl pledge'>
              <div className='relative mx-auto w-40 h-40 mb-3'>
                <Image 
                src={deskIcon}
                alt={""}
                />   
              </div>
              <h3 className='text-xl font-medium'>Proyectos de Escritorio y Análisis de Datos</h3>
              <p className='mt-2 dark:text-gray-300 font-light'>Especializado en crear aplicaciones y sistemas hechos a la medida </p>
              <p className='my-5 text-sky-500 text-lg'>Tecnologías</p>
              <div className='text-6xl flex justify-center gap-5 text-slate-500 dark:text-white'>
                <DiJava/>
                <DiMysql/>
                <FaRProject/>
              </div>
              <div className='text-6xl flex justify-center gap-5 text-slate-500 dark:text-white my-5'>
                <DiPython/>
              </div>
            </div>
            <div className='flex-col p-10 bg-white drop-shadow-xl rounded-2xl my-10 dark:bg-gray-700 transition ease-all hover:scale-105 hover:rounded-xl pledge'>
              <div className='relative mx-auto w-40 h-40 mb-3'>
                <Image 
                src={movileIcon}
                alt={""}
                />   
              </div>
              <h3 className='text-xl font-medium '>Programación Móvil</h3>
              <p className='mt-2 dark:text-gray-300 font-light'>Especializado en crear aplicaciones y sistemas hechos a la medida </p>
              <p className='my-5 text-sky-500 text-lg'>Tecnologías</p>
              <div className='text-6xl flex justify-center gap-5 text-slate-500 dark:text-white my-5'>
                <TbBrandReactNative/>
                <DiAndroid/>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}