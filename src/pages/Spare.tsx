import PageHeading from '../components/PageHeading'
import Banner from "../assets/banners/electrical.webp"
import ContentGrid from '../components/ContentGrid'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import mainVisualContent from "../assets/electrical/mainVisualContent.jpg"
import visualContent from "../assets/electrical/visualContent.jpeg" 
function Spare() {
return (
    <section>
        <PageHeading title='Spare Parts' backgroundImage={Banner} backgroundPosition='bottom' />
        <ContentGrid 
        subtitle='Spare Parts'
        title='Our Spare Parts'
        description={`Reform Marine offers customized solutions to the maritime industry as a company specialized in electrical systems maintenance and repair. 
        Our professional teams optimize the travel experience by improving the safety and performance of marine vessels with electrical maintenance services.`}
        mainVisualContent={<LazyLoadImage src={mainVisualContent} className='w-full h-[200px] rounded-xl object-cover '/>}
        visualContent={<LazyLoadImage src={visualContent} className='w-full h-[200px] rounded-xl object-cover '/>} 
        className='bg-white-light'   
        />
    </section>
)
}

export default Spare