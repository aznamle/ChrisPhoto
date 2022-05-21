import { PrismicLink, PrismicRichText } from "@prismicio/react"

const About = ({ slice }) => {
  return (
    <div className="">
      <h1 className='text-2xl font-bold text-black'><PrismicRichText field={slice.primary.title} /></h1>
      <span className="text-xl font-semibold text-gray-700"><PrismicRichText field={slice.primary.subtitle} /></span>
      <div className='max-w-2xl'>
        {slice?.items?.map((text,i) => (
          <div key={i}>
            <span className="text-lg">
              <PrismicRichText field={text.text} className='text-gray-200' />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About