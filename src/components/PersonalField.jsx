import React from 'react';
import styles from '../styles';

function PersonalField() {
  return (
    <div className={`flex-col w-full h-[100%] ${styles.paddingY}`}>
          <p className={`${styles.paddingX}`}>Personal Details</p>
          <ul className='w-full h-full flex-col gap-[20px]'>
               <li className={`flex w-full gap-[10px] ${styles.paddingX} justify-between`}>
                    <div className='flex-col'>
                         <label className='text-[10px] text-gray-500'>Job Title</label>
                         <br/>
                         <input id="job_title" placeholder='e.g Software Developer' type="text"
                         className={`w-[180px] h-[30px] text-[10px] bg-slate-200 rounded-sm`}/>
                    </div>

                    <div className='flex-col'>
                         <label className='text-[10px] text-gray-500'>Last Name</label>
                         <br/>
                         <input id="job_title" placeholder='e.g Software Developer' type="text"
                         className={`w-[180px] h-[30px] text-[10px] bg-slate-200 rounded-sm`}/>
                    </div>
               </li>

               <li className={`flex w-full gap-[10px] ${styles.paddingX} justify-between`}>
                    <div className='flex-col'>
                         <label className='text-[10px] text-gray-500'>First Name</label>
                         <br/>
                         <input id="job_title" placeholder='e.g John' type="text"
                         className={`w-[180px] h-[30px] text-[10px] bg-slate-200 rounded-sm`}/>
                    </div>

                    <div className='flex-col'>
                         <label className='text-[10px] text-gray-500'>Last Name</label>
                         <br/>
                         <input id="job_title" placeholder='e.g Smith' type="text"
                         className={`w-[180px] h-[30px] text-[10px] bg-slate-200 rounded-sm`}/>
                    </div>
               </li>

               <li className={`flex w-full gap-[10px] ${styles.paddingX} justify-between`}>
                    <div className='flex-col'>
                         <label className='text-[10px] text-gray-500'>Email</label>
                         <br/>
                         <input id="job_title" placeholder='e.g test@gmail.com' type="text"
                         className={`w-[180px] h-[30px] text-[10px] bg-slate-200 rounded-sm`}/>
                    </div>

                    <div className='flex-col'>
                         <label className='text-[10px] text-gray-500'>Phone</label>
                         <br/>
                         <input id="job_title" placeholder='e.g +976 99887766' type="text"
                         className={`w-[180px] h-[30px] text-[10px] bg-slate-200 rounded-sm`}/>
                    </div>
               </li>

               <li className={`flex w-full gap-[10px] ${styles.paddingX} justify-between`}>
                    <div className='flex-col'>
                         <label className='text-[10px] text-gray-500'>Country</label>
                         <br/>
                         <input id="job_title" placeholder='e.g Mongolia' type="text"
                         className={`w-[180px] h-[30px] text-[10px] bg-slate-200 rounded-sm`}/>
                    </div>

                    <div className='flex-col'>
                         <label className='text-[10px] text-gray-500'>City</label>
                         <br/>
                         <input id="job_title" placeholder='e.g Ulaanbaatar' type="text"
                         className={`w-[180px] h-[30px] text-[10px] bg-slate-200 rounded-sm`}/>
                    </div>
               </li>
          </ul>
    </div>
  )
}

export default PersonalField;