import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <section 
    className='relative flex justify-center items-center h-fit bg-white-light pt-[100px]'>
      <div className='absolute top-0 bg-primary w-full h-[92px] lg:h-[120px]'/>
    <Result
        status="404"
        title={<h1 className='font-bold text-8xl text-primary'>404</h1>}
        subTitle={<h6 className='text-xl'>Page Not Found</h6>}
        extra={<Link to="/" replace><Button type="primary" className='py-4'>Go Home</Button></Link>}
    >
        <p className='font-base text-black'>
            We're sorry, the page you requested could not be found. Please go back to the homepage.
        </p>
    </Result>
    </section>
  )
}

export default NotFound