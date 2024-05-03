import React from 'react';
import styles from '../style';
import Button from './Button';
import "./CTA.css";
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const CTA = () => {
  const sr = ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
  });

  useEffect(() => {
    sr.reveal('.main-header5', { delay: 500, origin: 'left' });
  }, []);

  return (
   <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}
   sm:flex-row flex-col bg-black-gradient-2 enhanced rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={`${styles.heading2} main-header5`}>ACOMUnity<span className='text-gradient'> Interoperability </span></h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        ACOMUnity.com serves as our Web 3.0 hub, linking seamlessly 
        to the A-Team DAO Platform and the broader ACOMUnity DAO ecosystem. 
        Join us on this transformative journey towards a brighter future for communities worldwide.</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
   </section>
  )
}

export default CTA