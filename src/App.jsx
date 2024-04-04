import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Gallery from "./sections/Gallery";
import Calender from "./sections/Calender";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import OurBoard from "./sections/OurBoard";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";

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
      <section className="bg-pale-blue padding">
        <Contact />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
