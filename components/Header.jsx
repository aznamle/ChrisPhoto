import { PrismicLink, PrismicRichText } from "@prismicio/react"

const Header = ({ menu }) => {

  console.log(menu.data.portfolioLinks)

  return (
    <div className='mx-auto flex items-center'>
        <div className='justify-between'>
          <div className="flex flex-col">
            <span className='text-4xl font-semibold'>CHRIS PHOTOS</span>
            <span className='text-2xl'>Photography</span>
          </div>
          <div>
            <ul>
              {menu?.data?.portfolioLinks.map((portfolioLink, i) => (
                <li key={portfolioLink.Link.id}>
                  <PrismicLink field={portfolioLink.Link} className='text-black'>
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