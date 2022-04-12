import { PrismicText, PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import Gallery from '../../components/Gallery'

const SimpleText = ({ slice }) => {
  
  return (
    <>
      <Gallery slice={slice} />
    </>
  )
}

export default SimpleText