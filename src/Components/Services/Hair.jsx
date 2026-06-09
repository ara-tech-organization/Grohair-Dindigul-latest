import React, { useState } from "react";
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
  const [index, setIndex] = useState(2); // Start from center card
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + treatments.length) % treatments.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % treatments.length);
  };

  const getCardStyle = (i) => {
    const pos = (i - index + treatments.length) % treatments.length;
    const relPos = pos > Math.floor(treatments.length / 2) ? pos - treatments.length : pos;

    const scaleMap = [0.7, 0.85, 1, 0.85, 0.7];
    const opacityMap = [0.4, 0.7, 1, 0.7, 0.4];
    const zIndexMap = [1, 2, 3, 2, 1];
    const translateXMap = [-220, -120, 0, 120, 200];

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
        px: { xs: 2, sm: 10, md: 2, lg: 5 },
        mt: 5,
        ml: { sm:2,xs: -1},
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
      >
        HAIR TREATMENT
      </Typography>

      <Grid container spacing={5} alignItems="center">
        {/* LEFT: Carousel */}
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 2, md: 1 }}
          display="flex"
          justifyContent={{ xs: "center", md: "left" }}
          mt={{ xs: 5, sm: 5, md: 0 }}
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
                 width: isMdDown ? 260 : 340,
                  height: isMdDown ? 360 : 450,
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "absolute",
                  backgroundColor: "#fff",
                  color: "black",
                  ml:{lg:40,xs:20,sm:35},
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
                  <Typography fontSize={{ lg: "1.8rem", xs: "1.4rem" }} fontWeight="bold">
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
          item
          xs={12}
          md={5}
          order={{ xs: 1, md: 2 }}
          display="flex"
          justifyContent="center"
          sx={{ ml: { md: "200%" } }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems={{ xs: "center", md: "flex-start" }}
            textAlign={{ xs: "center", md: "left" }}
            px={{ xs: 2, sm: 4, md: 1 }}
            height="100%"
            
          >
            <Typography fontSize={{ sm: "1.2rem" }} color="text.secondary" mb={1}>
              Most Popular Hair Solutions in Dindigul
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              color="red"
              fontFamily="Poppins"
              mb={3}
              fontSize={{ sm: "1.4rem",xs:'1.8rem' }}
              width={{ xs: "100%", md: 400 }}
            >
              Our Most Popular Hair Treatments
            </Typography>

            <Typography
              variant="h6"
              color="black"
              sx={{ maxWidth: { xs: "100%", md: 470, sm: "100%" } }}
              mb={5}
            >
              Combat hair thinning, bald spots, and hair fall with proven,
              personalized treatments tailored to your scalp and hair type. Our
              expert dermatologists craft treatment plans that truly work.
              Experience visible transformation with trusted and advanced care.
            </Typography>

            <Box
              mt={1}
              display="flex"
              justifyContent={{ xs: "center", md: "flex-start" }}
              gap={2}
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
