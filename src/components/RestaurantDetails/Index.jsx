import Footer from "../shared/Footer";
import Breadcrumbs from "./Breadcrumb";
import Hero from "./Hero";
import Information from "./Information";
import Magnificent from "./Magnificent";
import OverAllRating from "./OverAllRating";

const IndexRes = () => {
  return (
    <>
      <div>
        <Breadcrumbs />
        <Hero />
        <Magnificent />
        <Information />
        <OverAllRating />
      </div>
      <Footer />
    </>
  );
};

export default IndexRes;
