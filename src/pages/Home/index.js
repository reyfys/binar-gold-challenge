import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
import WhyUs from "../../components/WhyUs";
import Testimonial from "../../components/Testimonial";
import BannerSewa from "../../components/BannerSewa";
import SimpleAccordion from "../../components/Accordion";
import { strList, CardWhyUs, CardTestimonial, navList } from "../../staticData";

const Home = () => {
  const props = {
    strList,
    CardWhyUs,
    Testimonial,
    CardTestimonial,
    navList,
  };

  return (
    <div>
      <Navbar {...props} />
      <Banner showCTAbtn={true} />
      <Services {...props} />
      <WhyUs {...props} />
      <Testimonial {...props} />
      <BannerSewa />
      <SimpleAccordion />
      <Footer />
    </div>
  );
};

export default Home;
