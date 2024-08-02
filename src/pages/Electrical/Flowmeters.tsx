import { useEffect } from 'react';
import { usePageHeading } from '../../layouts/ElectricalLayout';
import ContentGrid from '../../components/ContentGrid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import mainVisualContent from "../../assets/electrical/mainVisualContent.jpg"
import visualContent from "../../assets/electrical/visualContent.jpeg" 

export default function Flowmeters() {
    const { title, setTitle } = usePageHeading();

    useEffect(()=> {
        setTitle('Flowmeters');
    }, [])
  return (
    <ContentGrid 
    subtitle='Electrical Service'
    title={title}
    description={`Reform Marine offers customized solutions to the maritime industry as a company specialized in electrical systems maintenance and repair. 
    Our professional teams optimize the travel experience by improving the safety and performance of marine vessels with electrical maintenance services.`}
    mainVisualContent={<LazyLoadImage src={mainVisualContent} className='w-full h-[200px] rounded-xl object-cover '/>}
    visualContent={<LazyLoadImage src={visualContent} className='w-full h-[200px] rounded-xl object-cover '/>} 
    className='bg-white-light'   
    />
  )
}

