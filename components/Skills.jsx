'use client'

import React, { useState } from 'react'
import { icons } from '../data/index'
import Image from 'next/image'
import './skills.css'
import { motion } from 'framer-motion'
import { TypingText } from './ui/CustomText'
import { staggerContainer } from '@/utils/motion'

const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [skill, setSkill] = useState("");
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);;

  return (
    <section className="mt-8" id="skills">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='max-w-[1240px] w-full h-fit relative z-10 flex flex-col justify-center items-center mobile:w-screen'>
        <div className="2xl:max-w-[1280px] w-full mx-auto mb-16 flex justify-center items-center flex-col">

          <TypingText title={`${isHovered ? `${skill}` : "| My Skills"}`} textStyles={"text-center z-10 text-[20px] "} />

        </div>
        <div className='md:max-w-[900px] mx-28 gap-5 flex-wrap p-3 skills-text justify-center items-center flex flex-row'>
          <div className='parent-element flex flex-row flex-wrap w-[70vw] justify-center mobile:w-full'>
            {icons.map((icon, idx) => (

              <motion.div
                className={`inline-block ${hoveredIcon !== null && hoveredIcon !== idx ? 'blurred' : ''}`}
                onHoverStart={() => {
                  setSkill(`${icon.title}`)
                  setIsHovered(true)
                  setHoveredIcon(idx)
                }}
                onHoverEnd={() => {
                  setIsHovered(false)
                  setHoveredIcon(null)
                }}
                whileHover={{
                  rotate: 360,
                  scale: 1.6,
                  transition: {
                    duration: 0.3,
                    ease: 'easeInOut',
                  },
                }}
                animate={{
                  rotate: 0,
                  scale: 1.1,
                  transition: {
                    duration: 0,
                    ease: 'easeInOut',
                  },
                }}
                key={idx}
              >
                <Image src={icon.imgUrl} alt={icon.title} height={100} width={100} id={`${idx}`} className='p-5 m-2 max-w-[100px] max-h-[100px]' />
              </motion.div>

            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
