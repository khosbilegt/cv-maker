import React from 'react';
import styles from '../styles';

function PersonalField() {
  return (
    <div className='flex-col w-full h-[100%]'>
     <ul className='w-full h-full flex-col gap-[20px]'>
          <li className={`flex w-full ${styles.flexCenter} gap-[10px]`}>
               <label className='text-[12px]'>Wanted Job Title</label>
               <br/>
               <input id="job_title" placeholder='e.g Software Developer' type="text"
               className={`w-[100px] h-[30px] text-[12px] bg-slate-200 rounded-sm`}/>

               <label className='text-[12px]'>Wanted Job Title</label>
               <br/>
               <input id="job_title" placeholder='e.g Software Developer' type="text"
               className={`w-[100px] h-[30px] text-[12px] bg-slate-200 rounded-sm`}/>
          </li>

          <li className={`flex w-full ${styles.flexCenter} gap-[10px] mt-[10px]`}>
               <label className='text-[12px]'>Wanted Job Title</label>
               <br/>
               <input id="job_title" placeholder='e.g Software Developer' type="text"
               className={`w-[100px] h-[30px] text-[12px] bg-slate-200 rounded-sm`}/>

               <label className='text-[12px]'>Wanted Job Title</label>
               <br/>
               <input id="job_title" placeholder='e.g Software Developer' type="text"
               className={`w-[100px] h-[30px] text-[12px] bg-slate-200 rounded-sm`}/>
          </li>
          
     </ul>
    </div>
  )
}

export default PersonalField;