import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import FaceIcon from "@mui/icons-material/FaceRetouchingNatural";
import SpaIcon from "@mui/icons-material/Spa";
import HealingIcon from "@mui/icons-material/Healing";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import AOS from "aos";
import "aos/dist/aos.css";

const iconData = [
  { icon: <FaceIcon />, label: "Hair Care" },
  { icon: <SpaIcon />, label: "Skin Treatments" },
  { icon: <HealingIcon />, label: "Laser Therapies" },
  { icon: <EmojiEmotionsIcon />, label: "Cosmetic Procedures" },
  { icon: <AutoAwesomeIcon />, label: "Anti-Aging" },
];

const HighlightSection = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const radius = isMdDown ? 100 : 150;
  const angleStep = (2 * Math.PI) / iconData.length;

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: "#f9f6f4",
        py:4
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
      >
        {/* Left Circle (Responsive Position) */}
        <Grid
          size={{xs:12, lg:6}}
          data-aos="zoom-in"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height:"400px",
            mt:{lg:5}
          
          }}
        >
          <Box
            sx={{ pt:{md:10,lg:0}
              
            }}
          >
            {iconData.map((item, i) => {
              const angle = -Math.PI / 2 + angleStep * i;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              const isActive = i === activeIndex;

              return (
                <Box
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  onMouseEnter={() => setActiveIndex(i)}
                  sx={{
                    position: "absolute",
                    transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${
                      isActive ? 1.2 : 1
                    })`,
                    width: { xs: 60, sm: 80, md: 100 },
                    height: { xs: 60, sm: 80, md: 100 },
                    borderRadius: "50%",
                    backgroundColor: isActive ? "#E2231A" : "#fff",
                    color: isActive ? "#fff" : "#000",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: 2,
                    textAlign: "center",
                    p: 1,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.icon}
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.75rem" },
                      mt: 0.5,
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Grid>

        {/* ethu left side  Content */}
        <Grid
          size={{xs:12, lg:6}}
          data-aos="fade-up"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent:{ lg:"flex-start",md:'center'},
            alignItems:"center",
            height: "100%",
            textAlign: { xs: "center", md: "center",lg:'left' },
            py:12,
            pt:{xs:1,md:10,lg:17},
              ml:{lg:-6},
             
           
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
              color: "#E2231A",
              mb: 2,
              width: { lg: "500px", md: "70%", sm: "600px" ,xs:'350px'},
              mt:{xs:-7,md:-1},
            
            }}
          >
            Leading Hair & Skin Treatments at GroHair & GloSkin – Dindigul
          </Typography>

          <Typography
            sx={{
              color: "#555",
              fontSize: { xs: "1rem", sm: "1.3rem", md: "1.2rem" },
              mb: 2,
              maxWidth: {lg:"500px",xs:'290px',md:'70%',sm:'90%'},
              mx: { xs: "auto", md: 'auto' },
              
            }}
          >
            At GroHair & GloSkin Dindigul, we use proven hair restoration
            techniques and modern dermatological skincare. Our team pairs
            advanced tech with clinical expertise for results that are not just
            visible, but long-lasting.
          </Typography>

          <Typography
            sx={{
              color: "#555",
              fontSize: { xs: "1rem", sm: "1.3rem", md: "1.2rem" },
               maxWidth: {lg:"500px",xs:'290px',md:'70%',sm:'90%'},
              mx: { xs: "auto", md: 0 },
            }}
          >
            Whether restoring hair volume or enhancing skin clarity, our
            Dindigul clinic is equipped with world-class expertise and results.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HighlightSection;
