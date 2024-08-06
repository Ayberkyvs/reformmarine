import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { usePageHeading } from '../layouts/ServicesLayout';
import ContentGrid from './ContentGrid';

type ContentPageTypes = {
    children?: React.ReactNode;
    className?: string;
    mainVisualContent?: string;
    visualContent?: string;
    subtitle?: string;
    title: string;
    description: string;
};
const ContentPage = ({ title, subtitle, description, mainVisualContent, visualContent }: ContentPageTypes) => {
    const { setTitle } = usePageHeading();

    useEffect(() => {
        setTitle(title);
    }, [title, setTitle]);

    return (
        <ContentGrid 
            subtitle={subtitle}
            title={`Our ${title}`}
            description={description}
            mainVisualContent={<LazyLoadImage src={mainVisualContent} className='w-full h-[200px] rounded-xl object-cover' />}
            visualContent={<LazyLoadImage src={visualContent} className='w-full h-[200px] rounded-xl object-cover' />} 
            className='bg-white-light'   
        />
    );
};

export default ContentPage;
