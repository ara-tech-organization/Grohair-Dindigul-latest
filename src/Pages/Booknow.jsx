import React from 'react'
import { Helmet } from 'react-helmet'

import BookAppointment from '../Components/Booknow/Booknow'
import Footer from '../Components/Footer'

function Booknow() {
  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Book Appointment | Dindigul Skin & Hair Care Clinic</title>
        <meta 
          name="description" 
          content="Book your appointment online with GroSkin & Hair Care Clinic in Dindigul. Choose from skin and hair treatments and reserve your slot easily." 
        />
        <meta 
          name="keywords" 
          content="Book appointment Dindigul, Skin treatment booking, Hair treatment booking,GroSkin & Hair Clinic" 
        />
        <meta name="author" content="Groskin & Hair Care Clinic" />

        {/* Open Graph for social media */}
        <meta property="og:title" content="Book Appointment | Groskin & Hair Care Clinic" />
        <meta property="og:description" content="Reserve your appointment online with Groskin & Hair Care Clinic for expert skin and hair treatments in Dindigul." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/booknow" />
        <meta property="og:image" content="https://yourdomain.com/images/Groskin & Hair-clinic.jpg" />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book Appointment | Groskin & HairCare Clinic" />
        <meta name="twitter:description" content="Book your skin and hair care appointment online with Groskin & Hair Clinic in Dindigul." />
        <meta name="twitter:image" content="https://yourdomain.com/images/Groskin & Hair-clinic.jpg" />
      </Helmet>

      {/* Page content */}
      <BookAppointment />
      <Footer />
    </div>
  )
}

export default Booknow
