import React from 'react'
import { card } from "../assets";
import Button from "./Button";
import styles, { layout } from '../style';
import eco from "../assets/cool.png";

const CardDeal = () => {
  return (
   <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Scalable <span className='text-gradient'> DAO <br className='sm:block hidden'/> Ecosystem  </span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>ACOMUnity Master DAO enables efficient coordination
        and collaboration across various projects 
        and communities through the creation and management 
        of multiple DAOs. We seamlessly integrates within the
        Web3 landscape, offering flexibility and adaptability 
        for diverse initiatives and projects.</p>

        <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
        <img src={eco} alt="card" className='w-[80%] floating-image sm:block hidden'/>
    </div>
   </section>
  )
}

export default CardDeal