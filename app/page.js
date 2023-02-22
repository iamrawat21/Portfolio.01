import { Footer, Navbar } from '../components';
import { About, Explore, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
    <Insights />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      
      <div className="gradient-04 z-0" />
     
    </div>
    <Footer />
  </div>
);

export default Page;