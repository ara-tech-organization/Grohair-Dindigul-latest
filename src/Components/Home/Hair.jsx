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

const treatments = [
  {
    title: "Scalp Micropigmentation (SMP)",
    desc: "Creates the look of denser hair with precision pigmentation.",
    image: require("../assets/Scalp MicroPigmentation.png"),
  },
  {
    title: "Eyebrow Transplantation",
    desc: "Redefine your natural look with expert eyebrow restoration.",
    image: require("../assets/Eyebrow Transplantation.png"),
  },
  {
    title: "Stem X Pro Therapy",
    desc: "Hair rejuvenation using stem cell growth factors.",
    image: require("../assets/Stem X Pro.png"),
  },
  {
    title: "Meso Therapy",
    desc: "Nutrient-rich serums injected into the scalp to strengthen roots and regrow hair.",
    image: require("../assets/Meso Therapy.png"),
  },
  {
    title: "Oxygen Laser Therapy",
    desc: "Laser technique + oxygen infusion to nourish the scalp and boost circulation.",
    image: require("../assets/Oxygen Laser Therapy.png"),
  },
];

const Skinsection = () => {
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
    const translateXMap = [-50, 80, 200, 380, 600];

    if (relPos >= -2 && relPos <= 2) {
      const mapIndex = relPos + 2;
      return {
        transform: isMdDown
          ? `translateX(-50%) scale(${scaleMap[mapIndex]})`
          : `scale(${scaleMap[mapIndex]}) translateX(${translateXMap[mapIndex]}px)`,
        opacity: opacityMap[mapIndex],
        zIndex: zIndexMap[mapIndex],
        transition: "all 0.5s ease",
        position: "absolute",
        left: isMdDown ? "50%" : "60%",
        top: 0,
        transformOrigin: "center",
        transformStyle: "preserve-3d",
      };
    }

    return { display: "none" };
  };

  return (
    <Box>
      {/* TITLE OUTSIDE THE SECTION */}
      <Typography
        fontSize={{ lg: "2rem", xs: "1.7rem", sm: "2rem" }}
        fontWeight="bold"
        textAlign="center"
        fontFamily="Poppins"
        mt={{ lg: 9, md: 10, sm: 6, xs: 5 }}
        mb={{ xs: 5, sm: 6, md: 2, lg: 5 }}
      >
        HAIR{" "}
        <Box component="span" color="#ff0000ff" textAlign={"center"}>
          TREATMENT
        </Box>
      </Typography>

      <Box
        sx={{
          backgroundColor: "#fff",
          px: { xs: 2, sm: 2, md: 2, lg: 2 },
          ml: { md: 7, lg: 0 },
          py: 5,
        }}
      >
        <Grid
          container
          spacing={5}
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
          mt={{ lg: 3 }}
        >
          {/* LEFT CONTENT */}
          <Grid
            size={{xs:12,md:6}}
           
            data-aos="fade-down"
            display="flex"
            justifyContent="center"
            // ml={{ md: 6,lg:8 }}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems={{ xs: "center", md: "flex-start" }}
              textAlign={{ xs: "center", md: "left" }}
              // px={{ xs: 2, sm: 1, md: 3 }}
              height="100%"
              ml={{ md: -15,lg:-2 }}
              mt={{ md: 7, lg: 2,xs:-6, }}
            >
              <Typography fontSize={{md:'1.1rem'}} color="text.secondary" gutterBottom mb={1}>
                Most Popular Hair Solutions in Dindigul
              </Typography>

              <Typography
                fontSize={{ lg: "2rem", xs: "1.8rem" }}
                fontWeight="bold"
                color="red"
                fontFamily="Poppins"
                mb={3}
                width={{ xs: "100%", sm: "600px", md: 300 }}
              >
                Our Most Popular Hair Treatments
              </Typography>

              <Typography
                variant="h6"
                color="black"
                sx={{ maxWidth: { xs: "100%", md: 300, sm: "80%", lg: 400 } }}
                mb={5}
                ml={{xs:-1}}
              >
                Combat hair thinning, bald spots, and hair fall with proven,
                personalized treatments tailored to your scalp and hair type. Our
                expert dermatologists craft treatment plans that truly work.
                Experience visible transformation with trusted and advanced care.
              </Typography>

              <Box mt={2} display="flex" justifyContent={{ xs: "center", md: "flex-start" }} gap={2}>
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#E2231A" },
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
                    "&:hover": { backgroundColor: "#E2231A" },
                    transition: "all 0.2s ease",
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT SLIDER */}
          <Grid
            size={{xs:12,md:6}}
           
            data-aos="fade-up"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              // mt: { xs: 5, sm: 5, md: 5, lg: 0 },
              ml: { lg: -60, md: -58, sm: 0, xs: 1 },
            }}
          >
            <Box
              position="relative"
              height={isMdDown ? 400 : 500}
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
                    width: { lg: 300, xs: 280, sm: 340, md: 250 },
                    height: isMdDown ? 360 : 450,
                    borderRadius: 4,
                    overflow: "hidden",
                    position: "absolute",
                    backgroundColor: "#fff",
                    color: "black",
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
                      filter: i === index ? "none" : "brightness(50%)",
                      transition: "filter 0.3s ease",
                    }}
                  />
                  <Box p={3}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      fontSize={isMdDown ? "1.2rem" : "1.5rem"}
                      mt={-1}
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
        </Grid>
      </Box>
    </Box>
  );
};

export default Skinsection;
