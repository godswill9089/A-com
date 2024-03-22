import React from 'react'
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';
import "./Hero.css";

const Hero = () => {
  return (
   <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>We HELP You</span> Manifest Your {" "}
          <span className='text-white'>Dreams</span>
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[75px] ss leading-[20px]'>
           <br className='sm-block hidden'/>
          {" "}
          <span className='text-gradient'>
          Discover the Path 
          </span> {" "}
          to DAO Mastery
          </h1>
          <div className='ss:flex hidden md:mr-5 mr-0 ml-20'>
            <GetStarted />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          ACOMUnity Master DAO is a groundbreaking concept that 
          introduces a new paradigm in decentralized autonomous 
          organizations (DAOs).
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-10 my-10 relative`}>
        <img src={robot} alt='billing' className='w-[100%]  relative z-[5] floating-image'/>

        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className='absolute z-[1] w-[40%] h-[80%] rounded-full bottom-40 white__gradient'></div>
        <div className='absolute z-[0] w-[50%] h-[50%] bottom-20 blue__gradient'></div>
        </div>

        <div>

      </div>
   </section>
  )
}

export default Hero