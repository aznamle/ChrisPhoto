import { useState } from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react"
import Link from 'next/link';
import Image from "next/image";
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const Header = ({ menu }) => {

  const [isExpanded, toggleExpansion] = useState(false)
  const closeMobileMenu = () => toggleExpansion(false)

  return (
    <div className='flex'>
      <div className='hidden md:block space-y-8'>

        <div className="flex space-x-2 items-center">
          <div className=''>
            <Image className='rounded-full' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' width={250} height={250} />
          </div>
          <div className="flex flex-col">
            <Link href='/'>
              <a className='text-2xl tracking-wider'>
                @ChrisForonda
              </a>
            </Link>
            <span className='text-xl'>Photography</span>
            <div className='flex flex-row space-x-1'>
            <AiFillInstagram className='text-3xl'/>
            <AiFillLinkedin className='text-3xl'/>
            </div>
          </div>
        </div>
        
        <div>
          <ul>
            {menu?.data?.portfolioLinks.map((portfolioLink, i) => (
              <li key={portfolioLink.Link.id}>
                <PrismicLink field={portfolioLink.Link} className='text-lg text-black hover:text-gray-400 duration-200'>
                  <PrismicRichText field={portfolioLink.portfolioTitle} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='block md:hidden'>
        <div className='flex items-center justify-between bg-white flex-wrap p-6 shadow-md top-0 fixed inset-x-0 z-40'>
          <div>
          <Link href='/'>
                <a className='text-2xl tracking-wider'>
                  @ChrisForonda
                </a>
              </Link>
          </div>
          <div className="block lg:hidden">
            <button onClick={() => toggleExpansion(!isExpanded)} className={`flex items-center px-3 py-3 rounded hover:text-gray-200 hover:border-black transition ease-in-out duration-500`}>
              <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className={`${ isExpanded ? `block` : `hidden` } w-full mt-4 transition ease-in-out duration-300`}>
            <ul>
              {menu?.data?.portfolioLinks.map((portfolioLink, i) => (
                <li key={portfolioLink.Link.id}>
                  <PrismicLink field={portfolioLink.Link} className='text-lg text-black hover:text-gray-400 duration-200'>
                    <PrismicRichText field={portfolioLink.portfolioTitle} />
                  </PrismicLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
        

    </div>
  )
}

export default Header