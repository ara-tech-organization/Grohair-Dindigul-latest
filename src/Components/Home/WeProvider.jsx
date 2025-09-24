import React, { useEffect } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutImg from "../Images/1.jpg"; // make sure it's a girl image

const Section = () => {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        // px: { md: 0, },
        py: 6,
        backgroundColor: "#fff",
        position: "relative",
        mb: { md: 10 },
        // ml: {  lg: 1, md: 8 ,xs:-1},
      }}
    >
      {/* Left Side - Text */}
      <Box
        data-aos="fade-up"
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
          ml: { sm: 5, lg: 15 },
        }}
      >
        <Typography
          sx={{
            color: "#000000ff",
            fontWeight: "bold",
            mb: 1,
            fontSize: { xs: "0.9rem", sm: "1.5rem", md: "1.2rem" },
          }}
        >
          We Provide
        </Typography>

        <Typography
          sx={{
            fontWeight: 700,
            color: "#E2231A",
            fontSize: {
              xs: "1.2rem",
              sm: "1.8rem",
              md: "2.5rem",
              lg: "2rem",
            },
            mb: 3,
            lineHeight: 1.4,
          }}
        >
          Welcome to GroHair & GloSkin <br /> Dindigul
        </Typography>

        <Typography
          sx={{
            color: "#555",
            fontSize: { xs: "1rem", sm: "1.3rem", md: "1.05rem" },
            mb: 2,
            maxWidth: {xs:"300px",lg:'500px',sm:'500px'},
            
            mx: { xs: 'auto', md: 0 },
          }}
        >
          GroHair and GloSkin combine their deep expertise in hair and skin
          wellness with the serene pace of Dindigul. Our clinic blends clinical
          precision with a luxurious experience, delivered by trained
          professionals in a safe, sterile setting.
        </Typography>

        <Typography
          sx={{
            color: "#555",
            fontSize: { xs: "0.95rem", sm: "1.3rem", md: "1.05rem" },
            maxWidth: {xs:"300px",lg:'500px',sm:'500px'},
            mx: { xs: "auto", md: 0 },
          }}
        >
          At our Didugul center, you’ll find the best of science, technology,
          and personalized care. Whether it’s hair thinning, pigmentation
          issues, premature aging, or any other concern—you’ll find solutions
          tailored just for you, backed by trusted professionals.
        </Typography>
      </Box>

      {/* Right Side - Semicircle Background + Image */}
      <Box
        data-aos="fade-down"
        sx={{
          flex: 1,
          position: "relative",
          display: "flex",
          alignItems: "end",
          justifyContent: "end",
          mr: { lg: 17, xs: 4, md: 4,sm:10 },
          maxWidth: 500,
          py:3
         
        }}
      >
        {/* Semicircle background */}
        <Box
          sx={{
            position: "absolute",
            top: 25,
            right: 0,
            width: "90%",
            height:{lg: "90%",sm:'90%',xs:'90%'},
            borderRadius: "100% 0 0 0",
            backgroundColor: "#f8d7da",
            zIndex: 0,
          }}
        />

        {/* Girl image cropped in top-right semicircle */}
        <Box
          component="img"
          src={AboutImg}
          alt="About Girl"
          sx={{
            width: "80%",
            height: {lg:'100%',sm:'125%',sx:'100%'},

            objectFit: "cover",
            clipPath: "ellipse(100% 100% at 100% 0%)",
            zIndex: 1,

            position: "relative",
          }}
        />
      </Box>
    </Box>
  );
};

export default Section;