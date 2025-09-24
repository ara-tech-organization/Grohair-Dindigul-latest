import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Collapse,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AOS from 'aos';
import 'aos/dist/aos.css';
const faqs = [
  {
    question: 'What hair loss treatments are available in Dindigul?',
    answer: 'At GroHair Dindigul, we provide FUE Hair Transplants, PRP therapy, Mesotherapy, Scalp Micropigmentation, and Low-Level Laser Therapy to control hair fall and support healthy regrowth',
  },
  {
    question: 'How does the hair transplant process work?',
    answer: 'Healthy follicles are moved from a donor area—usually the back of your head—to thinning or bald spots. These implanted hairs grow naturally and permanently.',
  },
  {
    question: 'Will the results of hair transplantation last forever?',
    answer: 'Yes, for most people. Transplanted follicles are generally resistant to hair loss and can grow for a lifetime with the right care.',
  },
  {
    question: 'When can I expect visible results after a transplant?',
    answer: 'You’ll start seeing new growth by 3–4 months, with full transformation typically complete within 9–12 months',
  },
  {
    question: 'How does PRP therapy improve hair growth?',
    answer: 'PRP uses your body’s own growth factors from blood plasma to energize dormant hair follicles and encourage natural growth.',
  },
  {
    question: 'Are your hair treatments safe?',
    answer: 'Absolutely. All procedures are performed under expert supervision using proven, safe methods. Minor side effects like redness may occur but fade quickly',
  },
  {
    question: 'What impacts the cost of a hair transplant?',
    answer: 'Cost depends on how many grafts are needed, your scalp condition, and the technique used. We’ll give you a clear estimate after a consultation.',
  },
  {
    question: 'How can I book a consultation with the GroHair Dindigul team?',
    answer: 'You can call us, walk into our Dindigul clinic, or schedule through our online form. We’ll set you up with a personalized session',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Box  data-aos="fade-up" sx={{ px: 4, py: 10, bgcolor: '#f9f9f9', mb: 4,width:{xs:'85%',lg:'100%',sm:'95%'} }}>
      <Typography fontSize={{XS:'1.1rem',sm:'1.5rem'}} align="center" fontWeight={700} gutterBottom color="#000000ff">
        FREQUENTLY ASKED QUESTION  <Box component="span" color="#ff0000ff">
                        HAIR TREATMENT
                      </Box>
      </Typography>

      <br /><br />

      <Grid container spacing={3} justifyContent="center">
        {faqs.map((faq, index) => (
          <Grid
            item
            key={index}
            xs={2}
            sm={6}
            md={index >= 6 ? 6 : 4}
            data-aos="flip-up"
          >
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3,
                maxWidth: 360,
                margin: 'auto',
                transition: '0.3s',
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                onClick={() => toggleIndex(index)}
                sx={{ cursor: 'pointer' }}
              >
                <Box display="flex" alignItems="center" height={50}>
                  <ChevronRightIcon
                    sx={{
                      color: '#e3242b',
                      transform: openIndex === index ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s',
                      mr: 1,
                    }}
                  />
                  <Typography fontWeight={700}>
                    {faq.question}
                  </Typography>
                </Box>
              </Box>
              <Collapse in={openIndex === index}>
                <Typography mt={2} color="text.secondary">
                  {faq.answer}
                </Typography>
              </Collapse>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FAQ;