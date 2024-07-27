"use client"

import React, { useState } from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Lottie from 'react-lottie'
import { IoCopyOutline } from 'react-icons/io5'
import animationData from '@/data/confetti.json'

const Footer = () => {
    const[copied,setCopied] = useState(false)
    const handleCopy = () =>{
        navigator.clipboard.writeText('aryanashah11@gmail.com');
        setCopied(true);
    }
  return (
    <footer className='w-full mb-[100px] pb-10' id="contact">
        {/* <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50"/>
        </div> */}
        <div className="flex flex-col items-center">
             {/* <h1 className='heading lg:max-w-[45vw]'> Ready to take <span className='text-purple'>your</span> digital presence to next level</h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s discuss how I can help you acheive your goals</p>     
            <a href='mailto:aryanashah11@gmail.com'>
            <MagicButton title="Let's get in touch" icon={<FaLocationArrow/>} position='right'/>
        </a>   */}
         <div className="mt-5 relative" >
                <div className={`absolute -bottom-5 right-0 h-full w-full overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]`}>
                    <Lottie options={{
                        loop:copied,
                        autoplay: copied,
                        animationData: animationData,
                        rendererSettings:{
                            preserveAspectRatio : 'xMidYMid slice'
                        }
                    }}/>
                </div>
                <a href='mailto:aryanashah11@gmail.com'>
            <MagicButton title="Let's get in touch" icon={<FaLocationArrow/>} position='right'/>
        </a> 
            </div>
        </div>
        
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className="md:text-base text-sm md:font-normal font-light"> Copyright &copy; 2024 Aryan </p>
            <div className='flex items-center md:gap-3 gap-6'>
                
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <a href={profile.link}><img src={profile.img} alt={`${profile.id}`} width={20} height={20}/></a>
                        </div>
                ))}

            </div>
        </div>
         
    </footer>
  )
}

export default Footer