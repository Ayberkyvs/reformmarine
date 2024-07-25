import { useState, useEffect } from 'react';
import { Spin, Space } from 'antd';
import 'antd/dist/reset.css'; // Ant Design stil dosyası

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simüle edilmiş veri yükleme
    setTimeout(() => {
      setLoading(false);
    }, 350000); // 2 saniye bekle
  }, []);
  
  const contentStyle: React.CSSProperties = {
    padding: 50,
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
  };
  
  const content = <div style={contentStyle} />;
  return (
    <section className="flex items-center justify-center h-screen bg-white-light">
      {loading ? (
        <Space size="middle">
            <Spin tip="Loading" size="large">
                {content}
            </Spin>
        </Space>
      ) : (
        <div>Veri yüklendi!</div>
      )}
    </section>
  );
};

export default Loader;
