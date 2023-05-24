import React from 'react';
import styles from '../styles';
import { PersonalField } from './';

function EditorField() {
  return (
    <div className={`min-h-screen w-[40%] bg-white flex-col ${styles.flexCenter}`}>
          <p className='text-[10px]'>File Name</p>
          <PersonalField className={`${styles.paddingY}`}/>
    </div>
  )
}

export default EditorField;