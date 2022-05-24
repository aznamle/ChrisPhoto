import Section from './Section'
import Image from 'next/image'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

const GalleryComponent = ({ slice }) => {

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
                <div className="columns-1 md:columns-3 gap-3 space-y-2 mx-auto max-w-screen-2xl py-12 md:py-0 px-4 md:px-0">
                    {slice.items.map((item, i) => (
                        <div key={i} className="break-inside-avoid mx-auto">
                            <Image 
                                src={item.image.url} 
                                width={item.image.dimensions.width} 
                                height={item.image.dimensions.height} priority
                                className='bg-gray-200 w-full object-cover h-full object-center block transform duration-300 ease-in-out hover:scale-105'
                                alt=''
                                onContextMenu={(e)=>e.preventDefault()}
                            />
                        </div>
                    ))}
                </div>
            </SRLWrapper>
        </SimpleReactLightbox>
    )
}

export default GalleryComponent