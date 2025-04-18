'use client'

import React from 'react'
import Spotlight from './ui/Spotlight'
import DotBackgroundDemo from './ui/DotBackgroundDemo'
import TextGenerateEffect from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { ReactTyped } from 'react-typed'


const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>

        <DotBackgroundDemo />

        <div className='flex justify-center relative my-20 z-10 mx-5'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-s text-center text-blue-100 max-w-80'>
                Designing Experiences, Building Interfaces              
                </h2>
                <TextGenerateEffect className='text-center font-bold my-4 md:my-7 lg:my-10' words='From Sketch to Screen, I Make Ideas Click.'/>
                <p className='text-center md:tracking-wider mb-10 text-sm md:text-lg lg:text-xl '>
                    Hi, i&apos;m Mountassar Billah LAHILAH and i am a <ReactTyped 
                                                                       strings={["UI/UX Designer", "Graphical Designer", "Frontend Web Dev"]}
                                                                       typeSpeed = {40}
                                                                       backSpeed = {50}
                                                                       className='text-purple-200 font-bold'
                                                                       loop/>
                </p>

                <a href="">
                    <MagicButton title='Show my Work' icon={<FaLocationArrow />} position='right'/>
                </a>
            
            </div>
        </div>  
    </div>
  )
}

export default Hero
