import Footer from "./Footer"
import Navbar from "./Navbar"
import CarouselComponent from './Carousel'
import About from './About'

const Layout = ({ children, banners }) => {
  console.log('BANNERS', banners)
  return (
    <div className="flex justify-center" style={{ background: "var(--color-primary-0)" }}>
      <div className="max-w-screen-xl flex flex-col min-h-screen w-full">
        <Navbar />
        <CarouselComponent banners={banners} />
        <div className="flex-grow" style={{ background: "var(--color-primary-2)" }}>{children}</div>
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
