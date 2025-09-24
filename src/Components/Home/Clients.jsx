import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import quote from '../Images/quotation.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    name: ' -Babulal ',
    text: "Very good satisfied I have completed Regen pro9 &MNRF full completed my session thank you adgro, well explained Doctors, wonderful caring staff thanks.",
    rating: 5,
  },
  {
    name: '-Keerthana',
    text: "The doc is so friendly and explains everything in detail and provides proper treatment for the issues . The hydra facial was good , skin felt clean . The person who did the procedure was also very friendly and kind.",
    rating: 5,
  },
  {
    name: '-Kiruthikadevi',
    text: "The clinic is clean, modern, and very welcoming from the moment you walk in.Dr. Allan was incredibly knowledgeable and took the time to explain every step of the treatment.I left feeling confident and cared for—definitely coming back!",
    rating: 5,
  },

 {
    name: '-Siddarth Giri',
    text: "I've struggled with acne for years, and this clinic has been a game-changer.Dr. Allan’s personalized approach and genuine care made all the difference.The results speak for themselves—my skin has never looked better!",
    rating: 5,
  },
  {
    name: '-Sharanji.N',
    text: "I am sharanji N, I have completed My oxygen laser therapy session and also clearee my danruf issue. Dr Allan Santhosh well explained about the treatment. The staff Nurse Gayathri madam was very kind and helpful to me.",
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  const scrollRef = useRef();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: '#fff',
        ml: { sm: -10, xs: 1,md:-15 ,lg:-3},
      }}
    >
      <Typography
        fontSize={{ xs: '1.5rem', lg: '2rem', sm: '2rem' }}
        align="center"
        fontWeight={700}
        color="#fa1212ff"
        ml={{ sm: 9 }}
        mb={5}
        data-aos="fade-up"
      >
        What Our Clients Say
      </Typography>

    <Box position="relative" sx={{ px: 2 }}>
  <Box
    data-aos="fade-up"
    ref={scrollRef}
    sx={{
      display: isMdUp ? 'flex' : 'grid',
      overflowX: isMdUp ? 'auto' : 'visible',
      scrollBehavior: 'smooth',
      '&::-webkit-scrollbar': { display: 'none' },
      gap: 2,
      // ✅ Remove unwanted left margin on xs/sm
      ml: { xs: 0, sm: 10, md: 15, lg: 4 },
      p: 1,
      gridTemplateColumns: isMdUp ? 'none' : '1fr',
      justifyContent: isMdUp ? 'flex-start' : 'center', // ✅ center on xs/sm
      alignItems: 'stretch',
      gridAutoRows: '1fr',
    }}
  >
    {testimonials.map((item, index) => (
      <Paper
        key={index}
        data-aos="fade-up"
        onClick={() =>
          setClickedIndex(index === clickedIndex ? null : index)
        }
        sx={{
          flex: 1,
          borderRadius: '20px',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          // ✅ Consistent width
          width: {
            xs: '90%',
            sm: '70%',
            md: '320px',
            lg: '30%',
          },
         
          mx: 'auto', // ✅ center each card in grid/flex
        }}
      >
        {/* Quote Icon */}
        <Box
          component="img"
          src={quote}
          alt="quote"
          sx={{
            width: 70,
            height: 90,
            position: 'absolute',
            left: 20,
            opacity: 2
          }}
        />

        {/* Content */}
        <Box mt={12}>
          <Typography
            sx={{ fontSize: { lg: '1.4rem', xs: '1.2rem' } }}
            fontWeight={700}
            gutterBottom
          >
            {item.name}
          </Typography>
          <Typography
            fontSize={{ lg: '0.90rem', xs: '1rem',md:'0.50rem' }}
            color="text.secondary"
          >
            {item.text}
          </Typography>
        </Box>

        {/* Stars */}
        <Box mt={2}>
          {Array.from({ length: item.rating }, (_, i) => (
            <StarIcon key={i} sx={{ color: '#FFC107', fontSize: 20 }} />
          ))}
        </Box>
      </Paper>
    ))}
  </Box>
</Box>


    </Box>
  );
};

export default TestimonialsCarousel;