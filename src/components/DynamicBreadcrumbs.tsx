import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useLocation, Link } from 'react-router-dom';

const DynamicBreadcrumbs = ({className}: {className: string}) => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const breadcrumbItems = [
    {
      href: '/',
      title: <Link to="/"><HomeOutlined /></Link>,
    },
    ...pathSnippets.map((snippet, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return {
        title: <Link to={url}>{capitalizeFirstLetter(snippet)}</Link>,
      };
    }),
  ];

  return (
    <Breadcrumb items={breadcrumbItems} className={className} />
  );
};

export default DynamicBreadcrumbs;
