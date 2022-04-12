import { PrismicText, PrismicRichText } from '@prismicio/react'
import Image from 'next/image'

const SimpleText = ({ slice }) => {
  
  return (
    <section className=''>
      <div className=''>
        <h1 className='text-xl'><PrismicText field={slice.primary.title} /></h1>
        <p><PrismicRichText field={slice.primary.description} /></p>
      </div>

      <div className='mx-auto items-center justify-center w-full'>
        {slice?.items?.map((item) => (
          <div key={item.image.url}>
            <Image src={item.image.url} width={item.image.dimensions.width} height={item.image.dimensions.height} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default SimpleText