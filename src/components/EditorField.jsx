import React from 'react';
import styles from '../styles';
import { PersonalField, SummaryField } from './';

function EditorField() {
  return (
    <div className={`min-h-screen w-[40%] bg-white flex-col ${styles.flexCenter}`}>
          <PersonalField />
          <SummaryField />
    </div>
  )
}

export default EditorField;