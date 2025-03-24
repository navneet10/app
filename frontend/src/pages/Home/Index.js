 
import BlogSetion from "../../components/Blogs";
import Footer from "../../components/Footer";
import GetStarted from "../../components/GetStarted";
import Navbar from "../../components/Navbar";
import OurProcess from "../../components/OurProcess";
import AboutSection from "../AboutUs/AboutSection";
import Hero from "./Hero";
import ServiceSection from "./ServiceSections";

function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutSection />
            <ServiceSection />
            <OurProcess />
            <GetStarted />
            <BlogSetion />
            <Footer />
        </>
  );
}

export default HomePage;
