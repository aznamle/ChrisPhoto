import { PrismicLink, PrismicRichText } from "@prismicio/react"
import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai'

const Header = ({ menu }) => {


  return (
    <div className='flex'>
      <div className='space-y-8'>

        <div className="flex space-x-2 items-center">
          <div className=''>
            <img className='rounded-full' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' />
          </div>
          <div className="flex flex-col">
            <Link href='/'>
              <a className='text-2xl tracking-wider'>
                @ChrisForonda
              </a>
            </Link>
            <span className='text-xl'>Photography</span>
            <AiFillInstagram className='text-2xl'/>
          </div>
        </div>
        
        <div>
          <ul>
            {menu?.data?.portfolioLinks.map((portfolioLink, i) => (
              <li key={portfolioLink.Link.id}>
                <PrismicLink field={portfolioLink.Link} className='text-xl text-black hover:text-gray-400 duration-200'>
                  <PrismicRichText field={portfolioLink.portfolioTitle} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
        

    </div>
  )
}

export default Header