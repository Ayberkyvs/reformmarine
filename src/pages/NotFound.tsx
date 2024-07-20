import { Button, Result } from 'antd';
function NotFound() {
  return (
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content', backgroundColor: '#fff' }} className='notfound pt-[100px] border-2'>
    <Result
        status="404"
        title={<h1 className='font-bold text-8xl text-primary'>404</h1>}
        subTitle={<h6 className='text-xl'>Page Not Found</h6>}
        extra={<Button type="primary" className='py-4'>Go Home</Button>}
    >
        <p className='font-base text-black'>
            We're sorry, the page you requested could not be found. Please go back to the homepage.
        </p>
    </Result>
    </section>
  )
}

export default NotFound