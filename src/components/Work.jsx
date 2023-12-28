import React from 'react'
import Barca from '../assets/images/barca.png'
import Ametller from '../assets/images/ametller.png'
import Vernon from '../assets/images/vernon.png'
import Temple from '../assets/images/temple.png'
import Interaction from '../assets/images/interaction.png'

const Work = () => {
    return (
        <div name='work' className='w-full  bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#28bdec]'>Trabajo</p>
                    <p className='py-4' >// Echa un vistazo a algunos de las empresas que he trabajado</p>
                </div>
                {/* Contanier */}
                <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>

                    {/* Grid Item */}
                    <div style={{
                        backgroundImage: `url(${Barca})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover Effects */}
                        <div className='flex flex-col items-center justify-center opacity-0 group-hover:opacity-100'>
                            <span className='font-bold tracking-wider text-center text-black text-1xl'>
                                Barça Licensing & Merchandising
                            </span>
                            <div className='pt-8 text-center'>
                                {/* link of the project on internet */}
                                <a href="https://www.linkedin.com/company/fc-barcelona/">
                                    <button className='px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg text-md'>¡Echa un vistazo!</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        backgroundImage: `url(${Ametller})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover Effects */}
                        <div className='flex flex-col items-center justify-center opacity-0 group-hover:opacity-100'>
                            <span className='font-bold tracking-wider text-center text-black text-1xl'>
                                Ametller Origen
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://www.linkedin.com/company/grup-ametller-origen/">
                                    <button className='px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg text-md'>¡Echa un vistazo!</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div style={{
                        backgroundImage: `url(${Vernon})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover Effects */}
                        <div className='flex flex-col items-center justify-center opacity-0 group-hover:opacity-100'>
                            <span className='font-bold tracking-wider text-center text-black text-1xl'>
                                Vernon Stores Ltd
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://www.linkedin.com/company/vernon-catering/">
                                    <button className='px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg text-md'>¡Echa un vistazo!</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        backgroundImage: `url(${Temple})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover Effects */}
                        <div className='flex flex-col items-center justify-center opacity-0 group-hover:opacity-100'>
                            <span className='font-bold tracking-wider text-center text-black text-1xl'>
                                Temple Recruitment - MK Human Resources Limited
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://www.linkedin.com/company/templerecruitment/">
                                    <button className='px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg text-md'>¡Echa un vistazo!</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div style={{
                        backgroundImage: `url(${Interaction})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* Hover Effects */}
                        <div className='flex flex-col items-center justify-center opacity-0 group-hover:opacity-100'>
                            <span className='font-bold tracking-wider text-center text-black text-1xl'>
                                Interaction Logística e Comércio Ltda
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://www.econodata.com.br/consulta-empresa/04218292000194-INTERACTION-LOGISTICA-E-COMERCIO-INTERNACIONAL-LTDA">
                                    <button className='px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg text-md'>¡Echa un vistazo!</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <div style={{ backgroundImage: `url(${''})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                      
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='font-bold tracking-wider text-center text-black text-1xl'>
                                Interaction Logística e Comércio Ltda
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Work