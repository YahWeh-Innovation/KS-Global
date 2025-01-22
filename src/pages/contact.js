import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phoneNumber: {
      code: "91",
      number: "",
    },
    country: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateFields = () => {
    const errors = {};

    if (!formData.firstName.trim())
      errors.firstName = "First Name is required.";
    if (!formData.lastName.trim()) errors.lastName = "Last Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      errors.email = "Invalid email format.";
    }
    if (!formData.phoneNumber.number.trim()) {
      errors.phoneNumber = "Phone Number is required.";
    } else if (!/^\d+$/.test(formData.phoneNumber.number)) {
      errors.phoneNumber = "Phone Number must contain only digits.";
    }
    if (!formData.country) {
      errors.country = "Country is required.";
    }
    if (formData.description.trim().length < 10) {
      errors.description = "Message must be at least 10 characters long.";
    }

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      setFormData({
        ...formData,
        phoneNumber: {
          ...formData.phoneNumber,
          number: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFields();

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setFormSubmitted(true);
      const mergedFormData = {
        ...formData,
        name: `${formData.firstName} ${formData.lastName}`,
      };
      console.log("Form Data:", mergedFormData);
    } else {
      setErrors(validationErrors);
      setFormSubmitted(false);
    }
  };

  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box
        sx={{
          padding: "40px",
          background: "rgb(244,244,245)",
          maxWidth: "1200px",
          minHeight: "80vh",
          margin: "auto",
          borderRadius: "10px",
        }}
      >
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight="bold">
            Contact Us
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Any question or remarks? Just write us a message!
          </Typography>
        </Box>

        <Grid container minHeight={"500px"} spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: "#1B481F",
                borderRadius: "12px",
                padding: "20px",
                color: "#fff",
                height: "100%",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Contact Information
              </Typography>
              <Typography variant="body2" mb={8}>
                You can reach us anytime!
              </Typography>
              <Box display="flex" alignItems="center" mb={2}>
                <PhoneIcon sx={{ marginRight: "10px" }} />
                <Typography>
                  {" "}
                  <a
                    href="tel:8975764867"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    8975764867
                  </a>
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <EmailIcon sx={{ marginRight: "10px" }} />
                <Typography>
                  <a
                    href="mailto:contactus@ks-global.in"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    contactus@ks-global.in
                  </a>
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <LocationOnIcon sx={{ marginRight: "10px" }} />
                <Typography>
                B-273, Sector 57, Gurgaon, Haryana
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={8} marginTop={"40px"}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name*"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                    size="small"
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name*"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                    size="small"
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email*"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                    size="small"
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone Number*"
                    name="phoneNumber"
                    value={formData.phoneNumber.number}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                    size="small"
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="small" error={!!errors.country}>
                    <InputLabel id="country-select-label">Country*</InputLabel>
                    <Select
                      labelId="country-select-label"
                      id="country-select"
                      name="country"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      label="Country*"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="India">India</MenuItem>
                      <MenuItem value="United States">United States</MenuItem>
                      <MenuItem value="Canada">Canada</MenuItem>
                      <MenuItem value="Australia">Australia</MenuItem>
                      <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                    </Select>
                    {errors.country && (
                      <Typography
                        variant="caption"
                        color="error"
                        sx={{ marginLeft: "12px" }}
                      >
                        {errors.country}
                      </Typography>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="How We Can Help You?"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    size="small"
                    error={!!errors.description}
                    helperText={errors.description}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box textAlign="right">
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        backgroundColor: "#000",
                        color: "#fff",
                        padding: "10px 20px",
                        margin: "32px 0px",
                        "&:hover": {
                          backgroundColor: "#333",
                        },
                      }}
                    >
                      Send Inquiry
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
            {formSubmitted && (
              <Alert severity="success" sx={{ marginTop: "20px" }}>
                Detail submitted successfully!
              </Alert>
            )}
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default ContactUs;
