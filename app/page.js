import BestQuality from "@components/bestQuality/BestQuality";
import Hero from "@components/heroBanner/Hero";
import PopularProducts from "@components/popularProducts/PopularProducts";
import Services from "@components/servicesSection/Services";
import SpecialOffer from "@components/specialOffer/SpecialOffer";
import Testimonial from "@components/testimonial/Testimonial";
import Subscription from "@components/subscription/Subscription";

export default function Home() {
  return (
    <>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <BestQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <Testimonial />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscription />
      </section>
    </>
  )
}

