import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Paper,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import AOS from "aos";
import "aos/dist/aos.css";

// Hair treatment data
const treatments = [
  {
    title: "Microblading",
    desc: "A semi-permanent eyebrow enhancement technique that creates natural-looking brows through precise pigment strokes.",
    image: require("../assets/Microblading.png"),
  },
  {
    title: "Skin Brightening Treatment",
    desc: "A strong treatment targeting day-to-day aches and chronic pain.",
    image: require("../assets/Skin Brightening Treatment.png"),
  },
  {
    title: "Q-Switch Laser",
    desc: "Advanced laser treatment that targets deep pigmentation, melasma, and stubborn dark spots. Safe for all skin types with minimal downtime.",
    image: require("../assets/Q-Switch.png"),
  },
  {
    title: "HydraFacial",
    desc: "A multi-step facial that cleanses, exfoliates, and deeply hydrates the skin. Ideal for improving texture, tone, and overall clarity.",
    image: require("../assets/Hydra Facial.png"),
  },
  {
    title: "Laser Hair Reduction",
    desc: "A permanent hair reduction solution using FDA-approved laser technology. Safe for all body areas and suitable for both men and women.",
    image: require("../assets/Laser Hair Reduction.png"),
  },
];

const HairSection = () => {
  const [index, setIndex] = useState(2);
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + treatments.length) % treatments.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % treatments.length);
  };

  const getCardStyle = (i) => {
    const pos = (i - index + treatments.length) % treatments.length;
    const relPos =
      pos > Math.floor(treatments.length / 2) ? pos - treatments.length : pos;

    const scaleMap = [0.7, 0.85, 1, 0.85, 0.7];
    const opacityMap = [0.4, 0.7, 1, 0.7, 0.4];
    const zIndexMap = [1, 2, 3, 2, 1];
    const translateXMap = [-220, -120, 0, 120, 230];

   if (relPos >= -2 && relPos <= 2) {
  const mapIndex = relPos + 2;
  return {
    transform: isMdDown
      ? `translateX(-50%) scale(${scaleMap[mapIndex]})`
      : `translateX(${translateXMap[mapIndex]}px) scale(${scaleMap[mapIndex]})`,
    opacity: opacityMap[mapIndex],
    zIndex: zIndexMap[mapIndex],
    transition: "all 0.5s ease",
    position: "absolute",
    left: "50%",
    top: 0,
    transformOrigin: "center",
    transformStyle: "preserve-3d",
  };
}


    return { display: "none" };
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        px: { xs: 1, sm: 10, md: 0, lg: 5 },
        mt: { lg: 5, md: -15 },
        // ml: { sm: -2, xs: -2, md: -7, lg: 3 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        fontSize={{ sm: "2rem", xs: "1.7rem" }}
        fontWeight="bold"
        fontFamily="Poppins"
        textAlign="center"
        mb={{ xs: 5, sm: 6, md: 8, lg: 10 }}
        mt={5}
        ml={{md:16,lg:0,sm:-3}}
      >
        SKIN{" "}
        <Box component="span" color="#ff0000ff">
          TREATMENT
        </Box>
      </Typography>

      <Grid container spacing={5} alignItems="center">
        {/* LEFT: Carousel */}
        <Grid
          size={{lg:6,xs:12}}
          order={{ xs: 2, md: 1 }}
          display="flex"
          justifyContent={{ xs: "center", md: "left" }}
          mt={{ xs: 5, sm: 5, md: 0 }}
          ml={{    xs: -20, md: 1,lg:13 }}
          data-aos="fade-down"
        >
          <Box
            position="relative"
            height={isMdDown ? 450 : 500}
            width="100%"
            maxWidth={isMdDown ? 320 : 600}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {treatments.map((treatment, i) => (
              <Paper
                key={i}
                sx={{
                  width: { lg: 300, xs: 280, sm: 340, md: 220 },
                  height: isMdDown ? 420 : 490,
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "absolute",
                  backgroundColor: "#fff",
                  color: "black",
                  ml: { lg: -20, xs: 20, sm: 20, md: -12 },
                  ...getCardStyle(i),
                }}
                elevation={10}
              >
                <Box
                  component="img"
                  src={treatment.image}
                  alt={treatment.title}
                  sx={{
                    width: "100%",
                    height: "50%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    filter: i === index ? "none" : "brightness(50%)",
                    transition: "filter 0.3s ease",
                  }}
                />
                <Box p={3}>
                  <Typography
                    fontSize={{ lg: "1.8rem", xs: "1.4rem", }}
                    fontWeight="bold"
                  >
                    {treatment.title}
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    {treatment.desc}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Grid>

        {/* RIGHT: Content */}
        <Grid
         size={{lg:5,xs:12}}
          order={{ xs: 1, md: 5 }}
          display="flex"
          justifyContent="center"
          mt={{md:-75,lg:-75}}
       
           ml={ {xs:-5 ,lg:90,md:95,sm:-5} }
           
          data-aos="fade-up"
          
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems={{ xs: "center", md: "flex-start" }}
            textAlign={{ xs: "center", md: "left" }}
            px={{ xs: 2, sm: 4, md: 1 }}
            ml={{lg:15,md:-13,xs:10}}
            height="100%"
          >
            <Typography fontSize={{ sm: "1.2rem",md:'1.1rem' }} color="text.secondary" mb={1}
           
            >
              Most Popular Skin Solutions in Dindigul
            </Typography>

            <Typography
              fontSize={{ lg: "2rem", xs: "1.8rem" }}
              fontWeight="bold"
              color="red"
              fontFamily="Poppins"
              mb={3}
              width={{ xs: "100%", sm: "600px", md: 300 }}
              
            >
              Our Most Popular Skin Treatments
            </Typography>

            <Typography
              variant="h6"
              color="black"
              sx={{ maxWidth: { xs: "100%", md: 300, sm: "100%",lg:450 } }}
              mb={5}
            >
              Our most popular skin treatments are crafted for issues like
              pigmentation, acne, dullness, and aging. Each session is designed
              by certified dermatologists to deliver healthy, radiant skin.
            </Typography>

            <Box mt={1} display="flex" justifyContent={{ xs: "center", md: "flex-start" }} gap={2}
            >
              <IconButton
                onClick={handlePrev}
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#E2231A",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#E2231A",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HairSection;