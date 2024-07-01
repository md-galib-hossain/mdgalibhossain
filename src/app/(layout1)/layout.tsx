"use client";
import React from "react";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";
import useFetch from "@/hooks/useFetch";
import { Box, CircularProgress, Typography } from "@mui/material";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data, loading, error } = useFetch('/user');
  const { data :socialData, loading : socialLoading } = useFetch('/socials');

  if (loading || socialLoading) {
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
  const socialProfiles = socialData?.data || {};

  return (
    <>
      <Navbar user={user} />
      <div className="min-h-screen">
        {children}
      </div>
      <Footer socials={socialProfiles} />
    </>
  );
};

export default Layout;
