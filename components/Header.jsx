import { useState } from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react"
import Link from 'next/link';
import Image from "next/image";
import { AiFillInstagram, AiFillLinkedin, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'

const Header = ({ menu }) => {

  const [isExpanded, toggleExpansion] = useState(false)
  const closeMobileMenu = () => toggleExpansion(false)

  const [linkMenu, toggleLinkMenu] = useState(false)
  console.log(menu)
  return (
    <div className=''>
      <div className='hidden md:block max-w-5xl mx-auto'>
        <div className="flex flex-wrap items-center justify-between">
          <Link href='/'>
            <a className='text-7xl font-bold italic'>
            <PrismicRichText field={menu.data.title} /> 
            </a>
          </Link>
          
          <div className="">

            <div className="flex flex-col mx-auto space-y-2">
              <div className="flex space-x-12 mx-auto">
              <div className="flex items-center hover:text-gray-400 duration-200" on onClick={()=> toggleLinkMenu(!linkMenu)}>
                <h1 className="font-bold text-lg">
                  Gallery
                </h1>
                <BsChevronDown className="mt-1 ml-2 h-5 w-4" aria-hidden="true" />
              </div>
              <div className={`${linkMenu ? 'inline-block' : 'hidden'} absolute mt-8 p-3 rounded-xl shadow-lg bg-white z-20`}>
                <ul className="">
                  {menu?.data?.portfolioLinks.map((portfolioLink, i) => (
                    <li key={portfolioLink.Link.id}>
                      <PrismicLink field={portfolioLink.Link} onClick={closeMobileMenu} className='text-lg text-black hover:text-gray-400 duration-200'>
                        <PrismicRichText field={portfolioLink.portfolioTitle} />
                      </PrismicLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <ul className="flex space-x-12">
                  {menu?.data?.menuLinks.map((menuLink) => (
                    <li key={menuLink.link.id}>
                      <PrismicLink field={menuLink.link} onClick={closeMobileMenu} className='text-lg font-bold text-black hover:text-gray-400 duration-200'>
                        <PrismicRichText field={menuLink.label} />
                      </PrismicLink>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
              <div className='flex justify-end text-gray-500 space-x-4'>
                <AiFillInstagram size={20} className='hover:text-gray-900 duration-200'/>
                <AiFillLinkedin size={20} className='hover:text-gray-900 duration-200'/>
              </div>
            </div>



          </div>

        </div>
      </div>


      {/* Mobile Menu */}
      <div className='block md:hidden'>
        <div className='flex items-center justify-between bg-white flex-wrap p-4 shadow-md top-0 fixed inset-x-0 z-40'>
          <div>
          <Link href='/'>
                <a className='text-7xl font-bold italic'>
                  CJF
                </a>
              </Link>
          </div>
          <div className="block lg:hidden">
            <button onClick={() => toggleExpansion(!isExpanded)} className={`flex items-center px-3 py-3 rounded hover:text-gray-200 hover:border-black transition ease-in-out duration-500`}>
              <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className={`${ isExpanded ? `block` : `hidden` } w-full h-screen mt-4 px-4 space-y-2`}>

            <div className="mt-6">
            <div className="flex mx-auto items-center text-2xl hover:text-gray-400 duration-200" onClick={()=> toggleLinkMenu(!linkMenu)}>
              <h1 className="">Gallery</h1>
              <BsChevronDown className="mt-1 ml-2 h-5 w-4" aria-hidden="true" />
            </div>
            <ul className={`${linkMenu ? 'block' : 'hidden'} transition-transform	duration-500 ease-in-out px-4 py-2`}>
              {menu?.data?.portfolioLinks.map((portfolioLink, i) => (
                <li key={portfolioLink.Link.id}>
                  <PrismicLink field={portfolioLink.Link} className='text-xl text-black hover:text-gray-400 duration-200'>
                    <PrismicRichText field={portfolioLink.portfolioTitle} />
                  </PrismicLink>
                </li>
              ))}
            </ul>
            </div>
            
            <div>
            <ul>
              {menu?.data?.menuLinks.map((menuLink) => (
                <li key={menuLink.link.id}>
                  <PrismicLink field={menuLink.link} onClick={closeMobileMenu} className='text-2xl text-black hover:text-gray-400 duration-200'>
                    <PrismicRichText field={menuLink.label} />
                  </PrismicLink>
                </li>
              ))}
            </ul>
            </div>

            <div className='p-6 flex flex-col mx-auto items-center text-center py-20 space-y-2'>
            <div className='flex mx-auto text-gray-500 space-x-4'>
            <AiFillInstagram size={30} className='hover:text-gray-900 duration-300'/>
            <AiFillLinkedin size={30} className='hover:text-gray-900 duration-300'/>
            </div>
          </div>
          </div>
        </div>

      </div>
        

    </div>
  )
}

export default Header