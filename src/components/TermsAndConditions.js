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

const TermsAndConditionsPopup = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAccept = () => {
    console.log("Terms and Conditions Accepted");
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
        Terms and Conditions
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
              Terms & Conditions
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Box>
            <Typography
              color="#1B481F"
              fontSize={"14px"}
              fontWeight={"800"}
              id="modal-title"
              variant="h6"
            >
              Your Agreement
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" gutterBottom>
              Welcome to K.S. Global. These Terms & Conditions govern your use
              of our website and services. By accessing or using our website,
              you agree to be bound by the following Terms & Conditions.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Company Information
            </Typography>
            <Typography variant="body2" gutterBottom>
              Name: K.S. Global <br />
              Address: City, State <br />
              Contact: Email address, Phone Number
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              User Account
            </Typography>
            <Typography variant="body2" gutterBottom>
              To access certain features of the website, you may be required to
              create an account. You agree to provide accurate and complete
              information and to maintain the security of your account. You are
              responsible for all activities under your account, and the company
              is not liable for any unauthorized access or use of your account.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              User Conduct
            </Typography>
            <Typography variant="body2" gutterBottom>
              ● You agree to use the website in a manner that is respectful of
              others and complies with all applicable laws and regulations.
              <br />
              ● You are responsible for maintaining the confidentiality of your
              account information.
              <br />
              ● You agree to provide accurate and complete information when
              creating an account or using our services.
              <br />● You may not access or use the website in any manner that
              could damage, disable, overburden, or impair the website or
              interfere with any other party’s use of the website.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Products and Services
            </Typography>
            <Typography variant="body2" gutterBottom>
              K.S. Global provides information on its products and services
              through the website. Product availability, pricing, and
              specifications are subject to change without notice. All products
              and services are offered based on availability.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Age Eligibility
            </Typography>
            <Typography variant="body2" gutterBottom>
              You must be at least 18 years old to use our services. By using
              our website, you represent and warrant that you meet these
              requirements.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Payment Terms
            </Typography>
            <Typography variant="body2" gutterBottom>
              Certain features of the website may require payment. If you choose
              to make a purchase, you agree to pay all applicable fees and
              taxes. Payment terms can be specific to the services provided.
              Payments for products or services must be made through the payment
              methods provided on the website.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Refunds and Returns
            </Typography>
            <Typography variant="body2" gutterBottom>
              For details on how to request a refund or return products, please
              refer to our Refund Policy, which outlines our procedures and
              eligibility criteria. By using the website, you agree to the terms
              set forth in the Refund Policy.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Intellectual Property
            </Typography>
            <Typography variant="body2" gutterBottom>
              All content, including text, graphics, logos, and software, is the
              property of K.S. Global or its licensors and is protected by
              intellectual property laws. You may not reproduce, modify,
              distribute, or display any content from the website without our
              prior consent.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Confidentiality
            </Typography>
            <Typography variant="body2" gutterBottom>
              We are committed to protecting the confidentiality of your
              personal information. We will not share any of your personal
              information with third parties, except as required by law.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Privacy Policy
            </Typography>
            <Typography variant="body2" gutterBottom>
              Your use of the website is also governed by our Privacy Policy,
              which explains how we collect, use, and protect your personal
              data. By using the website, you consent to our Privacy Policy.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Limitations of Liability
            </Typography>
            <Typography variant="body2" gutterBottom>
              To the fullest extent permitted by law, K.S. Global is not liable
              for any indirect, incidental, special, consequential, or punitive
              damages arising out of or related to your use of the website or
              services.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Governing Law
            </Typography>
            <Typography variant="body2" gutterBottom>
              These terms and conditions are governed by the laws of India. Any
              dispute arising out of or in connection with these terms shall be
              subject to the exclusive jurisdiction of the courts of City,
              State.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Termination
            </Typography>
            <Typography variant="body2" gutterBottom>
              We may terminate your access to our services at any time, without
              prior notice, if you violate these Terms & Conditions.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Changes to These Terms
            </Typography>
            <Typography variant="body2" gutterBottom>
              We reserve the right to update these Terms & Conditions at any
              time and any modifications will be effective as soon as we post it
              on our website. Your continued use of the website after any
              changes to these terms constitutes your acceptance of such
              changes.
            </Typography>

            <Typography
              color="#1B481F"
              fontWeight={"800"}
              variant="subtitle1"
              sx={{ mt: 2 }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2" gutterBottom>
              If you have any questions about these Terms & Conditions, please
              contact us at email address or phone number.
            </Typography>
          </Box>

          {/* Buttons */}
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

export default TermsAndConditionsPopup;
