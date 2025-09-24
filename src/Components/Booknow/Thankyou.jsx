import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // ✅ import navigate

const ThankYou = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // ✅ initialize navigate

  useEffect(() => {
    // Open popup when page loads
    setOpen(true);

    // ✅ Google Ads Conversion Tracking Script
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17386879354/s5AKCM2phIwbEPry2uJA",
      });
    }
  }, []);

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogContent sx={{ textAlign: "center", p: 4, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight="bold" color="green" gutterBottom>
          Thank You!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your submission has been received.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: "green",
            "&:hover": { bgcolor: "darkgreen" },
          }}
          onClick={() => navigate("/")} // ✅ change to "/home" if needed
        >
          Back to Home
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ThankYou;
