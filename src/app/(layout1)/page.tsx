"use client"
// import Footer from "@/components/Shared/Footer/Footer";
// import Navbar from "@/components/Shared/Navbar/Navbar";
import AboutMe from "@/components/UI/HomePage/AboutUs/AboutMe";
import ContactMe from "@/components/UI/HomePage/ContactMe/ContactMe";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Projects from "@/components/UI/HomePage/Projects/Projects";
import Skills from "@/components/UI/HomePage/Skills/Skills";
import useFetch from "@/hooks/useFetch";
import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";


const Homepage = () => {
  const { data, loading, error } = useFetch('/user');

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: "center", paddingY: 35 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: "center", paddingY: 35 }}>
        <Typography variant="h6" color="error">Error loading user data</Typography>
      </Box>
    );
  }

  const user = data?.data || {};
  return (
    <>
      {/* <Navbar user={user}/> */}
      <HeroSection user={user} />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
     
      {/* <Footer socials={user?.profiles}/> */}
    </>
  );
};

export default Homepage;
