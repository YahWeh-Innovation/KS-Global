import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const PrivacyPolicy = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAccept = () => {
    console.log("Privacy Policy Accepted");
    setOpen(false);
  };

  return (
    <>
      <Typography
        onClick={handleOpen}
        sx={{
          cursor: "pointer",
          color: "inherit",
          textDecoration: "none",
          "&:hover": { color: "lightgray" },
        }}
      >
        Privacy Policy
      </Typography>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: "70%" },
            bgcolor: "background.paper",
            borderRadius: 4,
            boxShadow: 24,
            p: 3,
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              color="#1B481F"
              fontWeight={"800"}
              id="modal-title"
              variant="h6"
            >
              Privacy Policy
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" gutterBottom>
              K.S. Global is committed to protecting your privacy. Our mission
              and objective are to observe privacy/data protection legal
              obligations in all data processing instances. This privacy policy
              outlines how we collect, use, disclose, and protect your personal
              information when you use our website, services, or products. By
              using our website, you agree to the terms of this Privacy Policy.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Information We Collect
            </Typography>
            <Typography variant="body2" gutterBottom>
              • Personal Information: Name, Email ID, Mobile Number, Billing and
              Shipping Addresses, and Payment Information. <br />• Business
              Information: Specific to clients, which may include sensitive
              information.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              How We Use Your Information
            </Typography>
            <Typography variant="body2" gutterBottom>
              • To provide you with our products and services. <br />
              • To communicate with you about our products, including sending
              promotional materials and service updates. <br />
              • To improve our services based on your feedback and interactions.
              <br />
              • To respond to inquiries, resolve issues, and provide customer
              service. <br />
              • To process your orders and payments. <br />• To personalize your
              experience on our website.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Data Sharing
            </Typography>
            <Typography variant="body2" gutterBottom>
              We do not share your personal information with third parties
              unless required by law or you have given us your explicit consent.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              User Rights
            </Typography>
            <Typography variant="body2" gutterBottom>
              You have the right to: <br />
              • Access and correct your personal information. <br />
              • Request the deletion of your personal information. <br />• Opt
              out of marketing communications.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Cookies
            </Typography>
            <Typography variant="body2" gutterBottom>
              We use basic cookie functionality provided by browsers to enhance
              your experience on our website. No specific tracking technologies
              are used.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Data Security
            </Typography>
            <Typography variant="body2" gutterBottom>
              We employ data encryption to protect your personal information
              stored in our databases from unauthorized access, disclosure,
              alteration, or destruction.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Changes to This Policy
            </Typography>
            <Typography variant="body2" gutterBottom>
              We may update this privacy policy from time to time. We will
              notify you of any significant changes by posting the updated
              policy on our website, and it will be effective as soon as we post
              it.
            </Typography>
          </Box>

          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ mt: 3 }}
          >
            <Button
              onClick={handleAccept}
              variant="contained"
              sx={{ backgroundColor: "#1B481F", color: "#fff" }}
            >
              Accept
            </Button>
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{ borderColor: "#1B481F", color: "#1B481F" }}
            >
              Close
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default PrivacyPolicy;
