import Footer from "../shared/Footer";
import Breadcrumbs from "./Breadcrumb";
import Hero from "./Hero";
import Magnificent from "./Magnificent";

const IndexRes = () => {
  return (
    <>
      <div>
        <Breadcrumbs />
        <Hero />
        <Magnificent />
      </div>
      <Footer />
    </>
  );
};

export default IndexRes;
