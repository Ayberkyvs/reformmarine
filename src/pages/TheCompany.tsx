import PageHeading from '../components/PageHeading'
import AboutUs from '../components/AboutUs'
import Banner from "../assets/banners/company.jpg"
function TheCompany() {
  return (
    <section>
        <PageHeading title="The Company" backgroundImage={Banner} backgroundPosition='center'/>
        <AboutUs className='mt-0'/>
    </section>
  )
}

export default TheCompany