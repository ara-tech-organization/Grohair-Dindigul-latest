import React from 'react'
import { Helmet } from 'react-helmet'

import FAQ from '../Components/About/FAQ'
import Header from '../Components/Header'
import Section from '../Components/About/WeProvider'
import Footer from '../Components/Footer'
import FAQSkin from '../Components/About/FAQSkin'

function About() {
  return (
    <div>
      {/* Helmet SEO Meta Tags */}
      <Helmet>
        <title>About Us |GroHair & GloSkin – Advanced Hair & Skin Care in Dindigul </title>
        <meta 
          name="description" 
          content="Get expert hair regrowth and skin treatments at GroHair & GloSkin. Book your consultation today for healthy, glowing results." 
        />
        <meta 
          name="keywords" 
          content="Skin care Dindigul, Hair care Dindigul, PRP treatment Dindigul, GroHair & Skin  Clinic" 
        />
        <meta name="author" content="GroHair & GloSkin – Advanced Hair & Skin Care in Dindigul " />

        {/* Social Media Preview (Open Graph) */}
        <meta property="og:title" content="About Us |GroHair & GloSkin – Advanced Hair & Skin Care in Dindigul" />
        <meta property="og:description" content="Get to know Gro Skin & Hair Care Clinic in Dindigul. We provide customized treatments for healthy skin and resilient hair." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <meta property="og:image" content="https://yourdomain.com/images/Dindigal-clinic.jpg" />

        {/* Twitter Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Grohair Skin & Hair Care Clinic" />
        <meta name="twitter:description" content="Healthy skin, resilient hair, and strong confidence. Learn more about Grohair@Groskin Clinic in Dindigul." />
        <meta name="twitter:image" content="https://yourdomain.com/images/Grohair&Groskin-clinic.jpg" />
      </Helmet>

      {/* Page Content */}
      <Header />
      <Section />
      <FAQ />
      <FAQSkin />
      <Footer />
    </div>
  )
}

export default About
