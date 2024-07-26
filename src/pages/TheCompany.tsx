import PageHeading from '../components/PageHeading'
import AboutUs from '../components/AboutUs'
import Banner from "../assets/banners/company.webp"


function TheCompany() {
  return (
    <section>
        <PageHeading title="The Company" backgroundImage={Banner} backgroundPosition='center'/>
        <AboutUs detailed/>
    </section>
  )
}

export default TheCompany