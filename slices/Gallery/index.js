import GalleryComponent from '../../components/GalleryComponent'
import Section from '../../components/Section'

const Gallery = ({ slice }) => {
  return (
    <>
      <Section>
        <GalleryComponent slice={slice} />
      </Section>
    </>
  )
}

export default Gallery