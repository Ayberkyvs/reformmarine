import PageHeading from '../components/PageHeading'
import Banner from "../assets/banners/contactus.png"
import ContactForm from "../components/ContactUs"
function ContactUs() {
  return (
    <section>
        <PageHeading title="Contact Us" backgroundImage={Banner}/>
        <ContactForm />
    </section>
  )
}

export default ContactUs