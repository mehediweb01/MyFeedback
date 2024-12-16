import Footer from "../shared/Footer";
import Breadcrumbs from "./Breadcrumb";
import Hero from "./Hero";
import Information from "./Information";
import Magnificent from "./Magnificent";

const IndexRes = () => {
  return (
    <>
      <div>
        <Breadcrumbs />
        <Hero />
        <Magnificent />
        <Information />
      </div>
      <Footer />
    </>
  );
};

export default IndexRes;
