import React from 'react';
import styles from '../styles';

function Summary() {
  return (
    <div className={`flex-col w-full h-[100%] mt-[3px]`}>
    <p className={`${styles.paddingX}`}>Professional Summary</p>
    <div className={`${styles.paddingX} w-full`}>
      <input placeholder='Lorem ipsum dolores' 
      className={`${styles.paddingX} bg-slate-200 text-[10px] w-full h-[100px]`}/>
    </div>
    </div>
  )
}

export default Summary;