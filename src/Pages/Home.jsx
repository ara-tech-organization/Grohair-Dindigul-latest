import React from "react";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

import Header from "../Components/Header";
import Herosection from "../Components/Home/Herosection";
import Section from "../Components/Home/WeProvider";
import HighlightSection from "../Components/Home/Leading";
import HairSection from "../Components/Home/Hair";
import Skinsection from "../Components/Home/Skin";
import Trust from "../Components/Home/Trust";
import Clients from "../Components/Home/Clients";
import Footer from "../Components/Footer";

function Home() {
  return (
    <Box>
      {/* Helmet SEO */}
      <Helmet>
        <title>GroHair & GloSkin – Advanced Hair & Skin Care in Dindigul</title>
        <meta
          name="description"
          content="Get expert hair regrowth and skin treatments at GroHair & GloSkin.Book your consultation today for healthy, glowing results."
        />
        <meta
          name="keywords"
          content="Skin care Dindigul, Hair care Dindigul, PRP treatment, GroHair & Skin , Hair treatment Dindigul, Skin treatment Dindigul"
        />
        <meta name="author" content="GroHair & Skin  Care Clinic" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="GroHair & GloSkin – Advanced Hair & Skin Care in Dindigul"
        />
        <meta
          property="og:description"
          content="Get expert hair regrowth and skin treatments at GroHair & GloSkin. Book your consultation today for healthy, glowing results."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/GroHair & Skin -clinic.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GroHair & GloSkin – Advanced Hair & Skin Care in Dindigul"
        />
        <meta
          name="twitter:description"
          content="Get expert hair regrowth and skin treatments at GroHair & GloSkin. Book your consultation today for healthy, glowing results."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/images/GroHair & Skin -clinic.jpg"
        />
      </Helmet>

      {/* Page Content */}
      <Header />
      <Herosection />
      <Section />
      <HighlightSection />
      <HairSection />
      <Skinsection />
      <Trust />
      <Clients />
      <Footer />
    </Box>
  );
}

export default Home;
