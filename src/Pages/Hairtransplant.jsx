import React, { useEffect } from "react";
// import "./Grohair.css"; // Move the <style> content here
import logo from "../Components/Images/Logo.jpeg";
import img01 from "../Components/assets/01.jpg";
import img02 from "../Components/assets/02.jpg";
import img03 from "../Components/assets/03.jpg";
import img04 from "../Components/assets/04.jpg";
import img05 from "../Components/assets/05.jpg";
import img06 from "../Components/assets/06.jpg";
import img07 from "../Components/assets/07[1].jpg";
import img08 from "../Components/assets/08[1].jpg";

export default function GrohairLanding() {
  useEffect(() => {
    const radios = document.querySelectorAll('input[name="carousel"]');
    const track = document.querySelector(".carousel-images");
    const slides = document.querySelectorAll(".slide");

    function scrollToSlide(index) {
      const slide = slides[index];
      if (!slide) return;
      track.scrollTo({
        left: slide.offsetLeft,
        behavior: "smooth",
      });
    }

    radios.forEach((radio, index) => {
      radio.addEventListener("change", () => {
        scrollToSlide(index);
      });
    });

    let debounceTimer;
    track.addEventListener("scroll", () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const scrollLeft = track.scrollLeft;
        const slideWidth = slides[0].offsetWidth;
        const index = Math.round(scrollLeft / slideWidth);

        if (radios[index] && !radios[index].checked) {
          radios[index].checked = true;
        }
      }, 100);
    });

    let current = 0;
    const interval = setInterval(() => {
      current = (current + 1) % radios.length;
      radios[current].click();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mobile-only grohair-page">
      <div className="mobile-only">
        <div className="header">
          <img src={logo} alt="Grohair & Gloskin Logo" />
          <div className="address-container">
            <i className="fa-solid fa-location-dot"></i>
            <div className="address">Dindigul</div>
          </div>
        </div>

        <section className="highlight-section">
          <div className="container">
            <h2 className="highlight-title">
              India&apos;s No.1 Hair & Skin Treatment
            </h2>

            <div className="highlight-cards">
              <div className="highlight-card">
                <h4>Hair Treatments</h4>
                <ul>
                  <li>
                    Hair loss? Dandruff? Get proven treatments for a healthy
                    scalp & strong growth!
                  </li>
                  <li>
                    Stop hair thinning & control dandruff – Advanced solutions
                    for every hair concern!
                  </li>
                </ul>
              </div>

              <div className="highlight-card">
                <h4>Skin Treatments</h4>
                <ul>
                  <li>
                    Dull skin, acne, or tanning? Reveal your natural glow with
                    our expert care!
                  </li>
                  <li>
                    Clear acne, remove tan, brighten skin – See visible results
                    in weeks!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <a href="tel: +918270156789" className="btn calling">
          <i className="fa-solid fa-phone"></i>Call
        </a>

        <a
          href="https://wa.me/+918270156789"
          className="btn whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp icon"></i> Whatsapp
        </a>

        <div className="call-now">
          Call or WhatsApp Now for all the info you need!
        </div>

        <div className="carousel-wrapper">
          <div className="carousel-track" id="carousel-track">
            <input type="radio" name="carousel" id="slide1" defaultChecked />
            <input type="radio" name="carousel" id="slide2" />
            <input type="radio" name="carousel" id="slide3" />
            <input type="radio" name="carousel" id="slide4" />
            <input type="radio" name="carousel" id="slide5" />
            <input type="radio" name="carousel" id="slide6" />
            <input type="radio" name="carousel" id="slide7" />
            <input type="radio" name="carousel" id="slide8" />

            <div className="carousel-images">
              <div className="slide">
                <img src={img01} alt="Slide 1" />
              </div>
              <div className="slide">
                <img src={img02} alt="Slide 2" />
              </div>
              <div className="slide">
                <img src={img03} alt="Slide 3" />
              </div>
              <div className="slide">
                <img src={img04} alt="Slide 4" />
              </div>
              <div className="slide">
                <img src={img05} alt="Slide 5" />
              </div>
              <div className="slide">
                <img src={img06} alt="Slide 6" />
              </div>
              <div className="slide">
                <img src={img07} alt="Slide 7" />
              </div>
              <div className="slide">
                <img src={img08} alt="Slide 8" />
              </div>
            </div>

            <div className="dots">
              <label htmlFor="slide1" className="dot"></label>
              <label htmlFor="slide2" className="dot"></label>
              <label htmlFor="slide3" className="dot"></label>
              <label htmlFor="slide4" className="dot"></label>
              <label htmlFor="slide5" className="dot"></label>
              <label htmlFor="slide6" className="dot"></label>
              <label htmlFor="slide7" className="dot"></label>
              <label htmlFor="slide8" className="dot"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}