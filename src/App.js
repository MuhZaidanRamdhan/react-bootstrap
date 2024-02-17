import FaqComp from "./components/FaqComp";
import FooterComp from "./components/FooterComp";
import GalleryComp from "./components/GalleryComp";
import HeroComp from "./components/HeroComp";
import LoaderHome from "./components/LoaderHome";
import NavbarComp from "./components/NavbarComp";
import ServiceComp from "./components/ServiceComp";
import "./css/main.css";
import "animate.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <>
      <LoaderHome />
      <HeroComp />

      {/* Content */}
      <NavbarComp />
      <GalleryComp />
      <ServiceComp />
      <FaqComp />

      {/* Content */}

      <FooterComp />
    </>
  );
}

export default App;
