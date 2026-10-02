import {Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Careers from "./component/Career";
import Contact from "./component/Contact";
import About from "./component/AboutUs";
import Blog from "./component/Blog";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SocialMedia from "./component/SocialMedia";
import SEOService from "./component/SEOService";
import LocalSeo from "./component/LocalSeo";
import SeoPackage from "./component/SeoPackage";
import PaidAdvertising from "./component/paidAdvertising";
import OnlineReputation from "./component/OnlineReputation";
import EcommerceMarketing from "./component/EcommerceMarketing";
import AmazonMarketing from "./component/AmazonMarketing";
import GraphicDesign from "./component/GraphicDesign";
import ContentMarketing from "./component/ContentMarketing";
import EmailMarketing from "./component/EmailMarketing";
import VideoMarketing from "./component/VideoMarketing";
import WebsiteDevelopment from "./component/WebDev";
import WebsitePackage from "./component/WebPackage";


const App = () => {
  return (
  
     <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/social-media" element={<SocialMedia/>} />
        <Route path="/seo-service" element={<SEOService/>} />
        <Route path="/local-seo" element={<LocalSeo/>} />
        <Route path="/seo-packages" element={<SeoPackage/>} />
        <Route path="/paid-advertise" element={<PaidAdvertising/>} />
        <Route path="/online-reputation" element={<OnlineReputation/>} />
        <Route path="/e-marketing" element={<EcommerceMarketing/>} />
        <Route path="/amazon-marketing" element={<AmazonMarketing/>} />
        <Route path="/graphic-design" element={<GraphicDesign/>} />
        <Route path="/content-marketing" element={<ContentMarketing/>} />
        <Route path="/email-marketing" element={<EmailMarketing/>} />
        <Route path="/video-marketing" element={<VideoMarketing/>} />
        <Route path="/web-development" element={<WebsiteDevelopment/>} />
        <Route path="/web-packages" element={<WebsitePackage/>} />

      </Routes>

      <Footer />
    
     </>
  );
};

export default App;