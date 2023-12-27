import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import Photo from '../assets/images/foto-gradient.png'

const Home = () => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(rgba(10,25,47, -20.95), rgba(10,25,47, 20.05)), url(${Photo})`,
            backgroundBlendMode: 'color-dodge',
            backgroundSize: 'cover',
            backgroundPosition: 'inherit',
            backgroundRepeat: 'no-repeat',
        }} name='home' className='w-full h-screen bg-[#0a192f]' >
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#28bdec]'>Hola, me llamo</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6fd]'>Diego Carvalho</h1>

                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Soy un asistente de almacén.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Con una sólida experiencia como asistente de almacén, he desempeñado un papel fundamental en la eficiente gestión de operaciones logísticas. Mi enfoque se centra en la recepción, clasificación y distribución efectiva de productos, asegurando un flujo de trabajo suave y organizado.
                    Soy hábil en la manipulación segura de mercancías y en la utilización de sistemas de inventario para mantener registros precisos. Trabajar en equipo es fundamental para mí, y disfruto colaborando con colegas para garantizar un entorno de almacén productivo y ordenado.
                    Mi compromiso es contribuir al éxito operativo diario del almacén, aplicando mis habilidades y experiencia para cumplir con eficacia las tareas asignadas y mantener altos estándares de calidad.
                </p>

                <div>
                    <button className='text-white group border-2 px-6 py-3 my-5 flex items-center hover:bg-[#28bdec] hover:border-[#28bdec]'>View Work
                        <span className='duration-300 group-hover:rotate-90'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>

                </div>

            </div>
        </div>
    )
}

export default Home