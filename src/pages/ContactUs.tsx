import PageHeading from '../components/PageHeading'
import Banner from "../assets/banners/contactus.webp"
import ContactForm from "../components/ContactForm"
function ContactUs() {
  return (
    <section>
        <PageHeading title="Contact Us" backgroundImage={Banner}/>
        <ContactForm isWithBanner={false} />
    </section>
  )
}

export default ContactUs