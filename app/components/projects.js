"use client"; 

import Link from 'next/link';
import Image from 'next/image'


import docNote from '../images/DocNote.png'
import tweets from '../images/Tweets.png'
import port from '../images/port.png';
import loteria from '../images/loteria.png';
import reciclaje from '../images/reciclaje.jpg';
import food from '../images/food.png';

export default function Projects() {
    return(
        <div>
            <div className='lg:px-[200px] sm:mx-5'>
            <h1 className='text-3xl font-bold dark:text-white'>Mis Proyectos</h1>
            <p className='leading-loose lg:text-xl mt-2 mb-9 md:text-lg lg:leading-loose dark:text-gray-300'>
                Así como he aprendido diversas tencologías, he aplicado dichos conocimientos para construir varios proyectos, 
                desde Desarrollo Web hasta aplicaciones de gestión de información y análisis de datos.
            </p>
            <div className='xl:grid xl:grid-cols-2 xl:gap-10'>
                <div>
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
                    src={port}
                    alt={"This is me perros"}
                    />
                    </div>
                </div>
                <div>
                    <div className='flex gap-10'>
                        <div className='mb-5 transition ease-out hover:brightness-75 w-64'>
                            <Image
                            src={loteria}
                            alt={"This is me perros"}
                            />
                            </div>
                            <div className='mb-5 transition ease-out hover:brightness-75 w-64'>
                            <Image
                            src={reciclaje}
                            alt={"This is me perros"}
                            />
                        </div>
                    </div>
                    <div className='mb-5 transition ease-out hover:brightness-75'>
                    <Image
                    src={food}
                    alt={"This is me perros"}
                    />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}


