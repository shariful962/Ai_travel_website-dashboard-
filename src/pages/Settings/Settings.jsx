import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router';


const Settings = () => {
  const navigate = useNavigate()
  return (
    <div className='px-4'>
      <div className='shadow-custom my-6 rounded-[10px] py-2 bg-white px-4'>
        <div className='flex items-center justify-between py-4 cursor-pointer  border-b border-gray-200' onClick={()=>navigate('/settings/personal-information')}>
          <h1 className='font-medium text-lg text-textClr'>Personal Information</h1>
          <MdKeyboardArrowRight size={24} />
        </div>
        <div className='flex items-center justify-between py-4 cursor-pointer  border-b border-gray-200' onClick={()=>navigate('/settings/change-password')}>
          <h1 className='font-medium text-lg text-textClr'>Change Password</h1>
          <MdKeyboardArrowRight size={24} />
        </div>
        <div className='flex items-center justify-between py-4 cursor-pointer  border-b border-gray-200' onClick={()=>navigate('/settings/terms-conditions')}>
          <h1 className='font-medium text-lg text-textClr'>Terms & Conditions</h1>
          <MdKeyboardArrowRight size={24} />
        </div>
        <div className='flex items-center justify-between py-4 cursor-pointer  border-b border-gray-200' onClick={()=>navigate('/settings/privacy-policy')}>
          <h1 className='font-medium text-lg text-textClr'>Privacy Policy</h1>
          <MdKeyboardArrowRight size={24} />
        </div>
        <div className='flex items-center justify-between py-4 cursor-pointer' onClick={()=>navigate('/settings/faq')}>
          <h1 className='font-medium text-lg text-textClr'>FAQ</h1>
          <MdKeyboardArrowRight size={24} />
        </div>
      </div>
    </div>
  )
}

export default Settings
