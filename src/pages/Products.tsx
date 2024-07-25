import PageHeading from "../components/PageHeading"
import Banner from "../assets/banners/products.webp"
function Products() {
  return (
    <section>
    <PageHeading title="Products" backgroundImage={Banner}/>
    <div className="h-[200vh] w-full"></div>
    </section>
  )
}

export default Products