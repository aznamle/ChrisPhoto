import { AiFillInstagram, AiFillLinkedin, AiOutlineDown } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='bg-gray-100 p-6 flex flex-col mx-auto items-center text-center py-20 space-y-2'>
      <div className='flex mx-auto text-gray-500 space-x-2'>
      <AiFillInstagram size={25} className='hover:text-gray-400 duration-200'/>
      <AiFillLinkedin size={25} className='hover:text-gray-400 duration-200'/>
      </div>
      <div className='text-gray-500 space-y-1'>
        <h1 className=''>Built with 💜</h1>
        <h1 className='text-gray-700'>Copyright © All rights reserved.</h1>
      </div>
    </div>
  )
}

export default Footer