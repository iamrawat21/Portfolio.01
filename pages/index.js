import { Footer, Navbar } from '../components';
import { About, Explore, Hero, WhatsNew, World, Insights } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <Insights />
    <div className="relative">
      <WhatsNew />
      <div className="gradient-04 z-0" />
    </div>
    <World />
    <Footer />
  </div>
);

export default Page;
