import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../Components/Header'
import OurServicesSection from '../Components/Services/SeviceSection'
import Skinsection from '../Components/Home/Skin'
import HairSection from '../Components/Home/Hair'
import Footer from '../Components/Footer'

function Services() {
  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Our Services | GroHair & Skin  Clinic</title>
        <meta 
          name="description" 
          content="Explore the range of skin and hair treatments offered at GroHair & Skin  Care Clinic in Dindigul. Expert care for healthy skin and resilient hair." 
        />
        <meta 
          name="keywords" 
          content="Skin treatments Dindigul, Hair treatments Dindigul, PRP treatment, GroHair & Skin  Clinic services, Skin care Dindigul, Hair care Dindigul" 
        />
        <meta name="author" content="GroHair & Skin  Care Clinic" />

        {/* Open Graph */}
        <meta property="og:title" content="Our Services | GroHair & Skin  Care Clinic" />
        <meta property="og:description" content="Discover the skin and hair treatments provided by GroHair & Skin  Clinic in Dindigul. Advanced care for healthy skin and hair." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/services" />
        <meta property="og:image" content="https://yourdomain.com/images/GroHair & Skin -clinic.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | GroHair & Skin  Care Clinic" />
        <meta name="twitter:description" content="Book advanced skin and hair treatments at GroHair & Skin  Clinic in Dindigul." />
        <meta name="twitter:image" content="https://yourdomain.com/images/GroHair & Skin -clinic.jpg" />
      </Helmet>

      {/* Page Content */}
      <Header />
      <OurServicesSection />
      <Skinsection />
      <HairSection />
      <Footer />
    </div>
  )
}

export default Services
