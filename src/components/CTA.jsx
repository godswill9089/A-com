import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => {
  return (
   <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}
   sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2}>Enhanced <span className='text-gradient'> Interoperability </span></h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>We integrates seamlessly with decentralized protocols, applications, 
        and services, enabling collaboration and
         asset management within the broader Web3 ecosystem.</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
   </section>
  )
}

export default CTA