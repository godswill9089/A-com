import React from 'react'
import styles, { layout } from '../style';
import doe from "../assets/doe.jpg";
import discord from "../assets/dis.png";
import linkden from "../assets/linkden.png";
import twitter from "../assets/x.png";
import git from "../assets/git.png"
import facebook from "../assets/facebook.png";
import raddit from "../assets/raddit.png";
import insta from "../assets/insta.png";
import notion from "../assets/notion.png";
import "./Billing.css";
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


const Billing = () => {
  const sr = ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
  });

  useEffect(() => {
    sr.reveal('.main-header3', { delay: 500, origin: 'right' });
  }, []);

  return (
    <section id='product' className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img src={doe} alt="fire" className='w-[80%] h-[80%] relative z-[5]' />

         <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
         <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        </div>

        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2} main-header3`}>Vision and<span className='text-gradient'> Mission </span></h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 bill-p`}>
          Our vision is to create a world where each individual can contribute 
          to and benefit from the most transformative technologies of our era. 
          The mission, therefore, is to construct a robust and thriving DAO 
          that acts as a launchpad for initiatives that not only promise returns
           but also drive forward the ethos of decentralization.
          </p>

          <div className='flex flex-row icons gap-4 sm:mt-10 mt-6'>
            <img src={ discord } alt="dis" className='icon w-[50px] h-[50px] object-contain  cursor-pointer floating-image-1'/>
            <img src={ linkden } alt="link" className='icon w-[50px] h-[50px] object-contain cursor-pointer floating-image-2'/>
            <img src={ twitter } alt="twet" className='icon w-[50px] h-[50px] object-contain  cursor-pointer floating-image-3'/>
            <img src={ git } alt="git" className='icon w-[50px] h-[50px] object-contain  cursor-pointer floating-image-4'/>
            <img src={ facebook } alt="facebook" className='icon w-[50px] h-[50px] object-contain  cursor-pointer floating-image-5'/>
            <img src={ raddit } alt="dis" className='icon w-[50px] h-[50px] object-contain  cursor-pointer floating-image-6'/>
            <img src={ insta } alt="dis" className='icon w-[50px] h-[50px] object-contain  cursor-pointer floating-image-7'/>
            <img src={ notion } alt="dis" className='icon w-[50px] h-[50px] object-contain  cursor-pointer floating-image-8'/>
          </div>
        </div>
    </section>
  )
}

export default Billing