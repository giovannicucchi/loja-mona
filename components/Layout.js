import CategoryButtons from "./CategoryButtons";
import Footer from "./Footer"
import Navbar from "./Navbar"
import Carousel from './Carousel'
import About from './About'

const Layout = ({ children, categories }) => {
  return (
    <div className="flex justify-center" style={{background: "var(--color-primary-2)"}}>
      <div className="max-w-screen-xl flex flex-col min-h-screen w-full">
        <Navbar />
        <Carousel />
        {/* <CategoryButtons categories={categories} /> */}
        <div className="flex-grow">{children}</div>
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
