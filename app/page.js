"use client"; 

import Image from 'next/image'

import { BsFacebook, BsTwitter, BsTelegram, BsGithub } from 'react-icons/bs';
import {  IoIosCloudyNight, IoIosSunny, IoMdCloseCircle } from 'react-icons/io';
import { FaHamburger } from 'react-icons/fa';

import { FaArrowUp } from 'react-icons/fa';
import { GiBee } from 'react-icons/gi';

import { useState, useEffect, useRef, useLayoutEffect} from 'react';
import { useDarkStore } from './themeContext';

import prof from './images/me.jpg';
import prof2 from './images/Aaron3.png';
import Contact from '@/app/Contact';

import Projects from './components/projects';
import About from './components/about';
import Skills from './components/skills';

export default function Home() {

  function Footer() {
    return (
      <footer className="bg-gray-300 text-gray-600 py-10 dark:bg-gray-800 dark:text-gray-400">
        <div className='mx-5 flex flex-col items-center text-center'>
            <p className=" mb-5 font-bold">Creado por Mauricio Bernabe Fortuna López - 2023®</p>
            <p className="">Powered by</p>
            <p className="text-yellow-600 font-bold"> - My Little Bee - </p>
            <p className="text-yellow-600 font-bold"> VDBA</p>
            <GiBee className='text-5xl mt-10 hover:text-yellow-600 hover:scale-125 transition-all duration-300'/>
        </div>
      </footer>
    );
  }

  function NavBarButton({scrollTo, caps}){
    return(
      <div className="relative text-center transition-all ease-in-out " onClick={scrollTo}>
        <button className="bg-transparent text-black py-2 px-4 rounded transition-all ease-in-out  dark:text-white">
          {caps}
        </button> 
        <button className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-400 rounded opacity-0 hover:opacity-100
      hover:text-white transition-opacity ease-in-out  py-2 px-4">
        {caps}
        </button>
      </div>
    );
  }

  function HamburgerButton({scrollTo, caps}){
    return(
      <div className="relative text-center py-5 my-2 " onClick={scrollTo}>
        <button className="bg-transparent text-black py-2 px-4 rounded transition-all duration-300 dark:text-white">
          {caps}
        </button>
        <button className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-400 rounded opacity-0 hover:opacity-100
       hover:text-white transition-opacity duration-300 py-2 px-4">
        {caps}
        </button>
      </div>
    );
  }

  // States and Shit
  const [darkMode, setDarkMode] = useState(false); 

  const {isDark, setIsDark} = useDarkStore();
  console.log(isDark);
  // State for conact window
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);
  // This is from the up arrow
  const [isVisible, setIsVisible] = useState(false);
  const [isShownCartoon, setIsShownCartoon] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [isMobile, setIsMobile] = useState(false);


  // useLayoutEffect(() => {
  //   if (sessionStorage.getItem('state')) {
  //     if(sessionStorage.getItem('state') === 'true'){
  //       setIsDark(true);
  //     }
  //     else{
  //       setIsDark(false);
  //     }
  //   } else {
  //     sessionStorage.setItem('state', darkMode.toString())
  //   }
  // }, [])


  // useEffect(() => {
  //   sessionStorage.setItem('state', isDark.toString())
  // }, [isDark])


  //Scroll Refs
  


  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth'});
    setIsMenuOpen(false);
  };

  const scrollToHabilities = () => {
    skillRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
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


  // Recieve if contact is closed
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
    <div className={isDark ? "dark bg-gray-900" : ""}>

      {/*Aqui pondre los overlays, por si las dudas JAJA*/}

      {isDesktopOpen ? <Contact childToParent={IsClosed}/> : null}
      <UpButton></UpButton>
      <main className='font-mon dark:bg-gray-900'>
        <section className='xl:px-[200px] lg:px-[150px] md:px-[50px]'>
          <div className='flex justify-between items-center p-10 text-black dark:text-white'>
            <div>
              {isMobile ?
              <div>
                <FaHamburger className='text-4xl text-slate-500 hover:text-amber-400 hover:rotate-[360deg] hover:scale-125 transition-all duration-500' onClick={handleMenuClick}/> 
              </div>
              :
              <div className='flex gap-2 font-light'>
                <NavBarButton scrollTo={scrollToAbout} caps={"Acerca de Mi"}></NavBarButton>
                <NavBarButton scrollTo={scrollToHabilities} caps={"Mis Habilidades"}></NavBarButton>
                <NavBarButton scrollTo={scrollToProjects} caps={"Mis Proyectos"}></NavBarButton>
              </div>
              } 
            </div>     
            <div className='flex gap-10 font-medium'>
              <a className='transition-all duration-300 hover:scale-150'>
                {isDark ? <IoIosSunny className='text-3xl text-white' onClick={() => setIsDark(!isDark)}/> : 
                <IoIosCloudyNight className='text-3xl text-slate-500' onClick={() => setIsDark(!isDark)}/>}
                </a>
              <a className='text-center'  onClick={() => setIsDesktopOpen(!isDesktopOpen)}>
                <label className='bg-gradient-to-r transition-all ease-out  hover:px-10 from-cyan-500 to-purple-500 p-3 rounded-xl text-white
                '>Contacto</label>
              </a>
            </div>
          </div>
          {isMenuOpen && (
            <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex 
            items-center justify-center transition-opacity duration-300 z-50 overflow-auto font-mon"
            >
              <div className='flex-col p-10 bg-white text-black xs:mx-5 rounded-3xl dark:text-white
                 dark:bg-gray-600 content text-lg  font-light'>
                <IoMdCloseCircle className='text-3xl mb-3 hover:text-red-500 transition-all ease-in-out' onClick={() => setIsMenuOpen(!isMenuOpen)}/>                
                <HamburgerButton scrollTo={scrollToAbout} caps={"Acerca de Mi"}></HamburgerButton>
                <HamburgerButton scrollTo={scrollToHabilities} caps={"Mis Habilidades"}></HamburgerButton>
                <HamburgerButton scrollTo={scrollToProjects} caps={"Mis Proyectos"}></HamburgerButton>
              </div>
            </div>
          )}
        </section>
        <section className='lg:px-[200px]'> 
          <div className='flex-col text-center items-center'>
            <h1 className='mt-20 xl:text-8xl font-bold text-sky-500 md:text-6xl bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent	
             bg-clip-text	xs:mx-5 xs:text-6xl font-alata'>
              Mauricio B. Fortuna Lopez
            </h1>
            <p className='mt-10 text-2xl font-medium text-gray-600 sm:mx-5 md:text-3xl dark:text-gray-400'>
              Desarrollador y programador.
            </p>
            <p className='mt-5 text-lg xl:text-xl leading-loose xl:leading-loose dark:text-white xl:mx-48 lg:mx-20 xs:mx-10 font-light'>
              Soy un desarrollador especializado en desarrollo de aplicaciones de escritorio y 
              aplicaciones web del lado del cliente-servidor y manejo de bases de datos.
            </p>
          </div>
            <div className='flex justify-center my-10 gap-20 text-gray-600 dark:text-white'>
              <a href="https://www.facebook.com/Mauricio Fortuna"><BsFacebook className='text-4xl hover:scale-125 hover:text-sky-700 transition ease-in-out md:text-5xl'/></a>
              <a href="https://twitter.com/MauBfortuna"><BsTwitter className='text-4xl hover:scale-125  hover:text-sky-500 transition ease-in-out md:text-5xl'/></a>
              <a href="https://github.com/ACBerny22"><BsGithub className='text-4xl hover:scale-125 hover:text-sky-400 transition ease-in-out md:text-5xl'/></a>
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
        <section  className=' dark:text-white mb-36' ref={aboutRef}>
         <About></About>
        </section>
        <section  className=' dark:text-white py-8' ref={skillRef} >
         <Skills></Skills>
        </section>
        <section className='mb-10 py-8' ref={projectsRef}>
          <Projects></Projects>
        </section>
        <Footer />
      </main>
    </div>
  )
}
