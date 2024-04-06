import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Gallery from "./sections/Gallery";
import Calender from "./sections/Calender";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import OurBoard from "./sections/OurBoard";
import Map from "./sections/Map";
import Footer from "./sections/Footer";
import Forms from "./sections/Forms";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <Calender />
      </section>
      <section className="padding">
        <Gallery />
      </section>
      <section className="padding">
        <OurBoard />
      </section>
      <section className="bg-[#f1f5f8] sm:px-12 px-4 sm:py-16 py-12">
        <Contact />
      </section>

      {/* <section className="bg-pale-blue padding">
        <Map />
      </section> */}


      <section className="padding-x py-10 w-full">
        <Forms />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
