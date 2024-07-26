import PageHeading from '../components/PageHeading'
import Banner from "../assets/banners/mechanical.webp"
import ContentGrid from '../components/ContentGrid'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import mainVisualContent from "../assets/electrical/mainVisualContent.jpg"
import visualContent from "../assets/electrical/visualContent.jpeg" 
function Mechanical() {
return (
    <section>
        <PageHeading title='Mechanical Service' backgroundImage={Banner} />
        <ContentGrid 
        subtitle='Mechanical Service'
        title='Our Mechanical Service'
        description={`Reform Marine offers comprehensive mechanical solutions to the maritime industry. With our expertise in electrical systems maintenance and repair, we ensure the safety and performance of marine vessels. Our dedicated teams provide customized services to optimize the travel experience and enhance the efficiency of mechanical systems on board.`}
        mainVisualContent={<LazyLoadImage src={mainVisualContent} className='w-full h-[200px] rounded-xl object-cover '/>}
        visualContent={<LazyLoadImage src={visualContent} className='w-full h-[200px] rounded-xl object-cover '/>} 
        className='bg-white-light'   
        />
    </section>
)
}

export default Mechanical