import React from 'react'
import { Helmet } from 'react-helmet'

import Touch from '../Components/Contact/Touch'
import Footer from '../Components/Footer'

export default function Contact() {
  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Contact Us |GroHair & Skin Clinic</title>
        <meta 
          name="description" 
          content="Get in touch with GroHair & Skin  Care Clinic in Dindigul. Reach out for appointments, queries, or expert skin and hair care advice." 
        />
        <meta 
          name="keywords" 
          content="Contact Dindigul clinic, GroHair & Skin  contact, Skin clinic Dindigul, Hair clinic Dindigul" 
        />
        <meta name="author" content="GroHair & Skin  Care Clinic" />

        {/* Open Graph for social media */}
        <meta property="og:title" content="Contact Us | GroHair & Skin  Care Clinic" />
        <meta property="og:description" content="Reach out to GroHair & Skin  Care Clinic in Dindigul for appointments or inquiries about skin and hair treatments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta property="og:image" content="https://yourdomain.com/images/GroHair & Skin -clinic.jpg" />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | GroHair & Skin  Care Clinic" />
        <meta name="twitter:description" content="Get in touch with GroHair & Skin  Care Clinic in Dindigul for expert skin and hair care treatments." />
        <meta name="twitter:image" content="https://yourdomain.com/images/GroHair & Skin -clinic.jpg" />
      </Helmet>

      {/* Page Content */}
      <Touch />
      <Footer />
    </div>
  )
}
