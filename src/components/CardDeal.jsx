import React from 'react'
import Button from "./Button";
import styles, { layout } from '../style';
import eco from "../assets/cool.png";
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import "./CardDeal.css";

const CardDeal = () => {
  const sr = ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
  });

  useEffect(() => {
    sr.reveal('.main-header4', { delay: 500, origin: 'left' });
  }, []);

  return (
   <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} main-header4`}>
      Intercultural/International<span className='text-gradient'><br className='sm:block hidden'/> Communities </span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>ACOMUnity DAO aims to establish communities that transcend geographical boundaries and brings 
together individuals from diverse backgrounds and cultures. By fostering a sense of belonging and 
common unity and purpose, the organization strives to create a supportive and inclusive environment 
where community members can connect, collaborate, and learn from one another.</p>

        <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
        <img src={eco} alt="card" className='w-[80%] floating-image sm:block hidden'/>
    </div>
   </section>
  )
}

export default CardDeal