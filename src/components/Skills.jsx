import React from 'react';
import PDAIcon from '../assets/images/pda.png';
import KPIIcon from '../assets/images/kpi.png';
import ExcelIcon from '../assets/images/office365.png';
import SageIcon from '../assets/images/sage.png';
import AlterdataIcon from '../assets/images/alterdata.png';

const Skills = () => {
    return (
        <div name='skills' className=' bg-[#0a192f]  text-gray-300'>
            {/* Contanier */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full '>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#28bdec]'>Habilidades</p>
                    <p className='py-4'>// Estas son las herramientas con las que he trabajado</p>
                </div>

                <div className='grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4 '>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center'>
                        <img className='w-40 mx-auto' src={PDAIcon} alt="PDA icon" />
                        <p className='my-4'>PDA</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-40 mx-auto' src={KPIIcon} alt="KPI icon" />
                        <p className='my-4'>KPI</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-40 mx-auto' src={ExcelIcon} alt="Excel icon" />
                        <p className='my-4'>Office 365</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-40 mx-auto' src={SageIcon} alt="Sage icon" />
                        <p className='my-4'>Sage</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-40 mx-auto' src={AlterdataIcon} alt="Alterdata icon" />
                        <p className='my-4'>Alterdata</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
