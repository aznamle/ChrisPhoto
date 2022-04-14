import Section from './Section'
import Image from 'next/image'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

const Gallery = ({ slice }) => {

    const options = {
        buttons: {
            backgroundColor: 'rgba(30,30,36,0.1)',
            showCloseButton: false,
            showAutoplayButton: false,
            showCloseButton: true,
            showDownloadButton: false,
            showFullscreenButton: false,
            showNextButton: true,
            showPrevButton: true,
            showThumbnailsButton: false,
        }
    }

    return (
        <SimpleReactLightbox>
            <SRLWrapper options={options}>
                <div className="lg:flex flex-wrap justify-start items-center mx-auto">

                    {slice.items.map((item, i) => (

                        <div key={i} className="flex relative overflow-hidden lg:w-1/2 p-2">
                                <Image src={item.image.url} width={item.image.dimensions.width} height={item.image.dimensions.height} alt={item.image.alt}
                                className='w-full object-cover h-full object-center block transform duration-300 ease-in-out hover:scale-105'
                                />
                        </div>
                    ))}
                </div>
            </SRLWrapper>
        </SimpleReactLightbox>
    )
}

export default Gallery