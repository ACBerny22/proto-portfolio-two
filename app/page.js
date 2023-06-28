"use client"; 

import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link';

import { BsFacebook, BsTwitter, BsTelegram } from 'react-icons/bs';
import {  IoIosCloudyNight, IoIosSunny, IoMdCloseCircle } from 'react-icons/io';
import { FaArrowUp } from 'react-icons/fa';
import Lottie from "lottie-react";

import { useState, useEffect, useRef} from 'react';

import prof from './images/me.jpg';
import prof2 from './images/Aaron3.png';
import webIcon from './images/html-5.png';
import movileIcon from './images/aplicacion-movil.png';
import deskIcon from './images/java.png';
import docNote from './images/DocNote.png'
import tweets from './images/Tweets.png'
import Contact from '@/app/Contact';
import Desarrollador from './images/Desarrollador.png';

import animationData from "./assets/devanim.json"

function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-600 text-center py-10 dark:bg-gray-800 dark:text-gray-400">
      <p className=" mb-5">Creado por Mauricio Bernabe Fortuna Lopez®</p>
      <p className="">Powered by</p>
      <p className="">H A R M O N Y</p>
    </footer>
  );
}



export default function Home() {

  //States and Shit
  const [darkMode, setDarkMode] = useState(false); 
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);
  //This is from the up arrow
  const [isVisible, setIsVisible] = useState(false);
  const [isShownCartoon, setIsShownCartoon] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [isMobile, setIsMobile] = useState(false);

  
  //Scroll Refs
  const aboutRef = useRef(null);
  const skillRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth'});
    setIsMenuOpen(false);
  };

  const scrollToHabilities = () => {
    skillRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust the breakpoint as needed
    };

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = (event) => {
    // Calculate the position of the menu relative to the clicked button
    const buttonRect = event.target.getBoundingClientRect();
    const menuTop = buttonRect.bottom;
    const menuLeft = buttonRect.left;

    // Update the menu position and toggle the menu open state
    setMenuPosition({ top: menuTop, left: menuLeft });
    setIsMenuOpen(!isMenuOpen);
  };


  const IsClosed = (childdata) => {
    setIsDesktopOpen(childdata)
  }

  function UpButton() {
    return(
      <button
      className={`fixed flex z-50 animate-bounce bottom-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-400 text-white rounded-full p-3 shadow-md ${
        isVisible ? 'hidden' : 'block'
      }`}
      onClick={scrollToTop}
      >
      <FaArrowUp className='text-2xl'/>

    </button>
  
    )
  }

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop === 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add event listener to check scroll position
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={darkMode ? "dark bg-gray-900" : ""}>

      {/*Aqui pondre los overlays, por si las dudas JAJA*/}

      {isDesktopOpen ? <Contact childToParent={IsClosed} parentToChild={darkMode}/> : null}
      <UpButton></UpButton>

      <main className='font-mon sm:px-10 lg:px-[200px] dark:bg-gray-900'>
        <section>
          <div className='flex justify-between items-center p-10 text-black dark:text-white'>
            <div>
              {isMobile ?
              <h1 className='transition ease-in-out text-2xl hover:scale-110'
              onClick={handleMenuClick}><label>ConleyDev</label></h1> 
              :
              <div className='flex gap-2'>
                <p className='px-3 py-2 hover:bg-gradient-to-r from-cyan-500 to-purple-400 transition-all ease-linear hover:text-white  rounded-lg' onClick={scrollToAbout}><label>Acerca de Mi</label></p>
                <p className='px-3 py-2 hover:bg-gradient-to-r from-cyan-500 to-purple-400 hover:text-white  rounded-lg  transition-all ease-out' onClick={scrollToHabilities}><label>Habilidades</label></p>
                <p className='px-3 py-2 hover:bg-gradient-to-r from-cyan-500 to-purple-400 hover:text-white  rounded-lg  transition-all ease-out'><label>Proyectos</label></p>
              </div>
              } 
            </div>     
            <div className='flex gap-10'>
              <a className='transition ease-in-out hover:scale-125'>
                {darkMode ? <IoIosSunny className='text-3xl' onClick={() => setDarkMode(!darkMode)}/> : 
                <IoIosCloudyNight className='text-3xl' onClick={() => setDarkMode(!darkMode)}/>}
                </a>
              <a className='transition ease-out hover:scale-125' onClick={() => setIsDesktopOpen(!isDesktopOpen)}>
                <label className='bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-xl text-white   
                '>Contacto</label>
              </a>
            </div>
          </div>
          {isMenuOpen && (
            <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex 
            items-center justify-center transition-opacity duration-300 z-50 overflow-auto font-mon"
            >
              <div className='flex-col p-10 gap-5 bg-sky-500 text-white xs:mx-5 rounded-3xl
                justify-start dark:bg-gray-600 content text-lg'>
                <IoMdCloseCircle className='text-3xl mb-3' onClick={() => setIsMenuOpen(!isMenuOpen)}/>
                <p className='p-6 hover:bg-slate-300 transition-all ease-in-out' onClick={scrollToAbout}>Acerca de mi</p>
                <p className='p-6 hover:bg-slate-300 transition-all ease-in-out' onClick={scrollToHabilities}>Habilidades</p>
                <p className='p-6 hover:bg-slate-300 transition-all ease-in-out'>Proyectos</p>
              </div>
            </div>
          )}
        </section>
        <section className=''> 
          <div className='flex-col text-center items-center'>
            <h1 className='mt-20 xl:text-8xl font-bold text-sky-500 md:text-6xl bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent	
             bg-clip-text	xs:mx-5 xs:text-6xl font-alata'>
              Mauricio B. Fortuna Lopez
            </h1>
            <p className='mt-10 text-2xl font-bold text-gray-600 sm:mx-5 md:text-3xl dark:text-gray-400'>
              Desarrollador y programador.
            </p>
            <p className='mt-5 text-lg xl:text-xl leading-loose xl:leading-loose dark:text-white xl:mx-48 lg:mx-20 xs:mx-10'>
              Soy un desarrollador especializado en desarrollo de aplicaciones de escritorio y 
              aplicaciones web del lado del cliente-servidor y manejo de bases de datos.
            </p>
          </div>
            <div className='flex justify-center my-10 gap-20 text-gray-600 dark:text-white'>
              <a href="https://www.facebook.com/Mauricio Fortuna"><BsFacebook className='text-4xl hover:scale-125 hover:text-sky-700 transition ease-in-out md:text-5xl'/></a>
              <a href="https://twitter.com/MauBfortuna"><BsTwitter className='text-4xl hover:scale-125  hover:text-sky-500 transition ease-in-out md:text-5xl'/></a>
              <a href="https://www.w3schools.com"><BsTelegram className='text-4xl hover:scale-125 hover:text-sky-400 transition ease-in-out md:text-5xl'/></a>
            </div>
          <div className='flex-col justify-center mb-24'>
            <div className='relative mx-auto bg-gradient-to-b from-sky-800 rounded-full overflow-hidden w-80 h-80
            hover:brightness-75 transition ease-out'
            onClick={() => setIsShownCartoon(!isShownCartoon)}>
            <Image
            src={isShownCartoon ? prof2 : prof}
            alt={"This is me perros"}    
            />
            </div>
          </div>
        </section>
        <section  className='mx-5 dark:text-white mb-48' ref={aboutRef}>
          <h1 className='lg:text-3xl font-bold xs:text-2xl' >
            ¿Quién soy?
          </h1>
          <div className='xl:grid xl:grid-cols-2 xl:gap-24 xl:grid-flow-col-dense	'>
            <div className='relative mx-auto xl:w-auto md:w-96 '>
             <Lottie animationData={animationData} className="text-center"/>
            </div>
            <div>
              <p className='leading-loose lg:text-xl lg:leading-loose md:text-lg dark:text-gray-300 xl:mx-10 xl:mt-52 text-justify'>
              Soy un <b>Ingeniero en Sistemas Computacionales</b> egresado del <b className='text-yellow-500'>Instituo Tecnologico de Cd. Madero</b>. Con experiencia en el ámbito de desarollo de software
              y coordinación de equipos de desarrollo.
              
              </p>
            </div>
          </div>
        </section>
        <section  className='mx-5 dark:text-white' ref={skillRef} >
          <h1 className='lg:text-3xl font-bold xs:text-2xl'>
            Mis Habilidades
          </h1>
          <p className='leading-loose lg:text-xl lg:leading-loose mt-2 md:text-lg dark:text-gray-300 text-justify'>
          A lo largo de mi carrera, me he especializado en el uso de diversas tecnologías, lo cual ha sido fundamental para construir una 
          sólida base de conocimientos y habilidades en el campo del desarrollo. Estas tecnologías han abarcado diferentes áreas, desde <b>desarrollo web 
          y móvil hasta análisis de datos</b>.
          </p>
        </section>
        <section className='mx-5 dark:text-white mb-48'>
          <div className='text-center lg:flex gap-10 justify-center'>
            <div className='flex-col  p-10 bg-white drop-shadow-xl rounded-2xl my-10 dark:bg-gray-700 transition ease-all hover:scale-110 hover:rounded-xl'>
              <div className='relative mx-auto w-40 h-40 mb-3'>
                <Image 
                src={webIcon}
                alt={""}
                />   
              </div>
              <h3 className='text-xl font-bold'>Proyectos Web</h3>
              <p className='mt-2 dark:text-gray-300'>Especialzado en crear aplicaciones y sistemas hechos a la medida </p>
              <p className='my-5 text-sky-500 text-lg'>Tecnologías</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>NodeJS</p>
            </div>
            <div className='flex-col  p-10 bg-white drop-shadow-xl rounded-2xl my-10 dark:bg-gray-700 transition ease-all hover:scale-110 hover:rounded-xl' >
              <div className='relative mx-auto w-40 h-40 mb-3'>
                <Image 
                src={deskIcon}
                alt={""}
                />   
              </div>
              <h3 className='text-xl font-bold'>Proyectos de Escritorio y Análisis de Datos</h3>
              <p className='mt-2 dark:text-gray-300'>Especialzado en crear aplicaciones y sistemas hechos a la medida </p>
              <p className='my-5 text-sky-500 text-lg'>Tecnologías</p>
              <p>Java</p>
              <p>C#</p>
              <p>MySQL</p>
              <p>Python</p>
              <p>R</p>
            </div>
            <div className='flex-col p-10 bg-white drop-shadow-xl rounded-2xl my-10 dark:bg-gray-700 transition ease-all hover:scale-110 hover:rounded-xl'>
              <div className='relative mx-auto w-40 h-40 mb-3'>
                <Image 
                src={movileIcon}
                alt={""}
                />   
              </div>
              <h3 className='text-xl font-bold '>Programación Móvil</h3>
              <p className='mt-2 dark:text-gray-300'>Especialzado en crear aplicaciones y sistemas hechos a la medida </p>
              <p className='my-5 text-sky-500 text-lg'>Tecnologías</p>
              <p>React Native</p>
              <p>Android Studio - Java</p>
            </div>
          </div>
        </section>
        <section className='mb-10 xs:mx-5'>
          <h1 className='text-3xl font-bold dark:text-white'>Mis Proyectos</h1>
          <p className='leading-loose lg:text-xl mt-2 mb-9 md:text-lg lg:leading-loose dark:text-gray-300'>
            Así como he aprendido diversas tencologías, he aplicado dichos conocimientos para construir varios proyectos, 
            desde Desarrollo Web hasta aplicaciones de gestión de información y análisis de datos.
          </p>
          <div className='xl:grid xl:grid-cols-2 xl:gap-4'>
            <div className='mb-5 transition ease-out hover:brightness-75 '>
              <Link href="/docnote">
              <Image
              src={docNote}
              alt={"This is me perros"}
              />
              </Link>
            </div>
            <div className='mb-5 transition ease-out hover:brightness-75'>
              <Image
              src={tweets}
              alt={"This is me perros"}
              />
            </div>
            <div className='mb-5 transition ease-out hover:brightness-75'>
              <Image
              src={tweets}
              alt={"This is me perros"}
              />
            </div>
            <div className='mb-5 transition ease-out hover:brightness-75'>
              <Image
              src={tweets}
              alt={"This is me perros"}
              />
            </div>
          </div>
        </section>
        <div className='xs:mx-5'>
        </div>
      </main>
   
      <Footer />
    </div>
  )
}
