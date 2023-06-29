import Image from 'next/image'

import prof from '../images/me.jpg';
import prof2 from '../images/Aaron3.png';
import webIcon from '../images/html-5.png';
import movileIcon from '../images/aplicacion-movil.png';
import deskIcon from '../images/java.png';
import Contact from '@/app/Contact';

export default function Skills(){
    return(
        <div className=''>
            <div className='lg:px-[200px] sm:mx-5'>
            <h1 className='lg:text-3xl font-bold xs:text-2xl'>
              Mis Habilidades
            </h1>
            <p className='leading-loose lg:text-xl lg:leading-loose mt-2 md:text-lg dark:text-gray-300 text-justify'>
            A lo largo de mi carrera, me he especializado en el uso de diversas tecnologías, lo cual ha sido fundamental para construir una 
            sólida base de conocimientos y habilidades en el campo del desarrollo. Estas tecnologías han abarcado diferentes áreas, desde <b>desarrollo web 
            y móvil hasta análisis de datos</b>.
            </p>
          </div>
        <div className='mx-5 dark:text-white mb-36 lg:px-[200px] sm:mx-5'>
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
        </div>
        </div>
    );
}