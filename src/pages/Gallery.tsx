import { useState } from 'react';
import { Card, Modal } from 'antd';
import 'antd/dist/reset.css'; // Ant Design stil dosyası
import PageHeading from '../components/PageHeading';
import Banner from "../assets/banners/gallery.webp"
const { Meta } = Card;

const Gallery = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalImage, setModalImage] = useState('');
  // Örnek veri
  const data = [
    {
      title: 'Title 1',
      description: 'Description 1',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      title: 'Title 2',
      description: 'Description 2',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      title: 'Title 3',
      description: 'Description 3',
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
        title: 'Title 4',
        description: 'Description 3',
        imageUrl: 'https://via.placeholder.com/300'
    },
    {
        title: 'Title 5',
        description: 'Description 3',
        imageUrl: 'https://via.placeholder.com/300'
    },
    {
        title: 'Title 6',
        description: 'Description 3',
        imageUrl: 'https://via.placeholder.com/300'
    },
    {
        title: 'Title 7',
        description: 'Description 3',
        imageUrl: 'https://via.placeholder.com/300'
    },
    // Diğer öğeler
  ];

  const showModal = (imageUrl: string) => {
    setModalImage(imageUrl);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <section>
        <PageHeading title="Gallery" backgroundImage={Banner}/>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-20 max-w-screen-xl m-auto px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-103"
          >
            <Card
              hoverable
              cover={
                <img
                  alt={item.title}
                  src={item.imageUrl}
                  className="object-cover w-full h-40 cursor-pointer"
                  onClick={() => showModal(item.imageUrl)}
                />
              }
            >
              <Meta title={item.title} description={item.description} />
            </Card>
          </div>
        ))}
      </div>

      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
        width="80%"
        className="modal"
      >
        <img
          alt="modal"
          src={modalImage}
          className="w-full h-full object-contain"
        />
      </Modal>
    </section>
  );
};

export default Gallery;
