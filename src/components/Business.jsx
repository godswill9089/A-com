import React from 'react'
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';
import diamond from '../assets/acom.png'
import "./Business.css";


const FeatureCard = ({ icon, title, content, index }) => {
 return(
 <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card relative z-[5]`}>
  <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
    <img src={icon} alt="icon" className='w-[40%] h-[40%] object-contain' />
  </div>


  <div className='flex-1 flex flex-col ml-3'>
    <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
      {title}
    </h4>
    <p  className='font-poppins font-normal text-dimWhite text-[18px] leading-[23px] mb-1'>
      {content}
    </p>

  </div>
 </div>
 )
}


const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>What is <span className='text-gradient'> ACOMUnity <br className='sm-block hidden'/> 
         Master DAO ?. </span></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Imagine a powerful and interconnected 
        network of DAOs, each with its unique purpose 
        and specialized focus, working together harmoniously 
        under the guidance of the Master DAO.
        </p>

        <Button styles="mt-10"/>
      </div>   

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard 
          key={feature.id} 
          {...feature} 
          index={index} />
        ))}
      </div>

      
      <div  className={`${styles.flexCenter} md:my-10 my-10`}>
        <img src={diamond} alt='acom' className='w-[30%] h-[50%] absolute z-[0] top-50 right-40 spinning-image sm:block hidden' />
    </div>
    </section>
  )
}

export default Business