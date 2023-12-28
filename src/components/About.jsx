import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full bg-[#0a192f] text-gray-300' >
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 px-4 gap-8'>
          <div className='pt-2 pb-8 sm:text-right'>
            <p className='text-4xl font-bold inline border-b-4 border-[#28bdec]'>
              Sobre Mí
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-2 px-4'>
          <div className='text-2xl font-bold sm:text-right'>
            <p>¡Hola! Soy Diego, encantado de conocerte.</p>
          </div>
          <div>
            <p>Soy un apasionado asistente de almacén con más de 10 años de experiencia, especializado en el control de diversos programas de gestión de almacenes, como flujos de trabajo en Excel, PDAs (asistentes digitales personales), KPI (indicadores clave de rendimiento) y más.</p>
            <br />
            <p>Disfruto optimizando operaciones logísticas y garantizando la eficiencia en cada etapa del proceso. Mi experiencia incluye la implementación y gestión de sistemas de seguimiento de inventario, coordinación de envíos y el manejo de datos para mejorar la toma de decisiones en el almacén.</p>
            <br />
            <p>Además, poseo habilidades en el manejo de flujos de trabajo complejos, asegurando la precisión en la gestión de inventario y la mejora continua de procesos. Mi capacidad para trabajar con diversas tecnologías y mi enfoque proactivo hacen de mí un miembro valioso para cualquier equipo de almacén.</p>
            <br />
            <p className='text-1xl sm:text-1xl font-bold text-[#ccd6fd]'>
              ¿Qué oportunidades surgirían con un asistente de almacén apasionado y proactivo,
              con una sólida experiencia de 10 años y la capacidad para optimizar cualquier aspecto de la gestión de almacenes?</p>
          </div>
        </div>

      </div>
    </div>


  )
}

export default About