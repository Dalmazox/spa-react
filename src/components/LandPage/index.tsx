import React from 'react'
import { Link } from 'react-router-dom'

import DefaultImage from '../../assets/images/man.svg'

const LandPage: React.FC = () => {
  return (
    <main className='bg-purple-800 text-white h-full w-full'>
      <div className='container mx-auto w-full'>
        <div className='text-center pt-12 flex flex-col md:flex-row items-center md:pt-0 md:text-left'>
          <div className='md:w-1/2 lg:w-1/3 mb-4 sm:mb-16 md:mb-0'>
            <h2 className='text-sm mb-2 opacity-50'>Welcome</h2>
            <h1 className='text-4xl md:text-5xl font-bold text-secondary leading-tight mb-2'>Simple SPA React Application</h1>
            <h2 className='text-sm mb-2 opacity-50 mb-6 md:mb-10'>Data provided by JsonPlaceholder</h2>
            <Link to='/contacts' href='#' className='border border-white rounded py-4 px-12 hover:text-purple-800 hover:bg-white transition duration-300'>
              See contact list
            </Link>
          </div>
          <div className='mt-16 sm:mt-0 flex-1 flex justify-end md:pt-10'>
            <img src={DefaultImage} alt='hero' />
          </div>
        </div>
      </div>
    </main>
  )
}

export { LandPage }
