import { PrismicText, PrismicRichText } from '@prismicio/react'
import Image from 'next/image'



const SimpleText = ({ slice }) => {
  
  console.log(slice)

  return (
    <section>
      <div>
        <h1>
          <PrismicText field={slice.primary.title} />
        </h1>
        <PrismicRichText field={slice.primary.description} />
      </div>

      <div className='mx-auto'>
        {slice?.items?.map((item) => (
          <div key={item.image.url}>
            <Image src={item.image.url} width={500} height={500} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default SimpleText