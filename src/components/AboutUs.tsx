import { Card } from 'antd';
import ContentGrid from './ContentGrid'

const { Meta } = Card;

function GoogleMapEmbed() {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.438175771282!2d29.296018000000004!3d40.8183382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadd7659685b97%3A0x9f8ad867e6e6cc0e!2sReform%20Marine!5e0!3m2!1str!2str!4v1721827020248!5m2!1str!2str"
            loading="lazy"
            className="rounded-xl w-full min-h-[200px] h-full"
        ></iframe>
    );
}
function Boxes() {
    return (
      <div className='grid grid-cols-2 gap-4 shadow-sm rounded-xl'>
        <div className="bg-white flex flex-col items-left justify-center rounded-xl p-6 gap-1">
            <span className="text-2xl lg:text-3xl font-semibold">3.5</span>
            <span>Years Experience</span>
        </div>
        <div className="bg-white flex flex-col items-left justify-center rounded-xl p-6 gap-1">
            <span className="text-2xl lg:text-3xl font-semibold">23</span>
            <span>Project Challenge</span>
        </div>
        <div className="bg-white flex flex-col items-left justify-center rounded-xl p-6 gap-1">
            <span className="text-2xl lg:text-3xl font-semibold">830+</span>
            <span>Positive Reviews</span>
        </div>
        <div className="bg-white flex flex-col items-left justify-center rounded-xl p-6 gap-1">
            <span className="text-2xl lg:text-3xl font-semibold">100K</span>
            <span>Trusted Students</span>
        </div>
      </div>
    )
}
function Brand() {
  const cardData = [
    {
      title: "Brand Color",
      description: "#005197",
      cover: (
        <div className='rounded-t-xl flex h-[150px] lg:h-[200px] bg-primary'></div>
      ),
    },
    {
      title: "Reform White Logo",
      description: "Click to download",
      cover: (
        <a
          href='https://reformmarine.com/logo-white.png'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-t-xl flex items-center justify-center h-[150px] lg:h-[200px] bg-primary'
          style={{
            backgroundImage: "url('../logo-white.png')",
            backgroundSize: "70%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></a>
      ),
    },
    {
      title: "Reform Blue Logo",
      description: "Click to download",
      cover: (
        <a
          href='https://reformmarine.com/logo-blue.png'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-t-xl flex items-center justify-center h-[150px] lg:h-[200px] bg-white'
          style={{
            backgroundImage: "url('../logo-blue.png')",
            backgroundSize: "70%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></a>
      ),
    },
    {
      title: "Reform Short White Logo",
      description: "Click to download",
      cover: (
        <a
          href='https://reformmarine.com/logo-short-white.png'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-t-xl flex items-center justify-center h-[150px] lg:h-[200px] bg-primary'
          style={{
            backgroundImage: "url('../logo-short-white.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></a>
      ),
    },
    {
      title: "Reform Short Blue Logo",
      description: "Click to download",
      cover: (
        <a
          href='https://reformmarine.com/logo-short-blue.png'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-t-xl flex items-center justify-center h-[150px] lg:h-[200px] bg-white'
          style={{
            backgroundImage: "url('../logo-short-blue.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></a>
      ),
    },
  ];
  return (
    <div className='w-full h-full grid grid-cols-2 lg:grid-cols-5 lg:col-span-2 gap-4'>
      {cardData.map((card, index) => (
        <Card
          key={index}
          hoverable
          cover={card.cover}
          className='rounded-xl'
        >
          <Meta title={card.title} description={card.description} />
        </Card>
      ))}
    </div>
  );
}
function AboutUs({className, detailed}: {className?: string, detailed?: boolean}) {
  return (
    <ContentGrid 
    className={`bg-blue-50 ${className}`} 
    subtitle='About Us' 
    title='Our Dream is Global Learning Transformation' 
    description='Lorem ipsum dolor sit amet consectetur. Erat nulla quam ante aenean volutpat eget. Tincidunt amet turpis consectetur venenatis imperdiet vitae est. Velit tortor arcu mauris vel phasellus sagittis quis enim. Mauris mi vulputate leo mi. Urna integer vulputate nisi praesent tellus sit tempor. Eu integer aliquam mauris amet tempor quis. Posuere libero eleifend massa mauris imperdiet ut id elementum. Ut amet duis lacus lectus ultrices. Pharetra massa sapien suspendisse lectus vulputate id semper. Vitae molestie vel bibendum praesent mi. Quis nibh morbi ipsum neque eros tortor. At justo interdum sem mauris.' 
    mainVisualContent={<GoogleMapEmbed />} 
    visualContent={<Boxes />}>
      {detailed ? <Brand /> : null}
    </ContentGrid>
  )
}

export default AboutUs