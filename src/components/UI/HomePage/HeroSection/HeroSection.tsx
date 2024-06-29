"use client"
import { Avatar, Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const HeroSection = ({ user }: any) => {
  const statusColor = user?.status === "available" ? "green" : "orange";
  const statusText =
    user?.status === "available" ? "I am available" : "I am not available";

  return (
    <Container>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 2,
        maxWidth: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
          p: 1,
          border: "1px solid",
          borderColor: statusColor,
          borderRadius: "16px",
          bgcolor: "transparent",
        }}
      >
        <Box
          sx={{
            width: 10,
            height: 10,
            bgcolor: statusColor,
            borderRadius: "50%",
            mr: 1,
          }}
        />
        <Typography variant="body2" color="textPrimary">
          {statusText}
        </Typography>
      </Box>
      <Avatar
        alt="user image"
        src={user?.userImage}
        sx={{ width: 80, height: 80 }}
      />
      <Typography
        variant="h1"
        sx={{ mt: 2, fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
      >
        {user?.name}
      </Typography>
      <Box mt={2}>
        {user?.roles.map((role: { name: string }) => {
          return (
            <Typography
              variant="h4"
              sx={{
               
                fontFamily: "Roboto, sans-serif",
                fontWeight: "500",
              }}
            >
              {role?.name}
            </Typography>
          );
        })}
      </Box>
      <Typography variant="body1" sx={{ mt: 1,fontWeight : "500", }}>
        {user?.headline}
      </Typography>
  <Stack mt={4}>
<Button onClick={()=> {console.log("haha")}}>
  Hire me
</Button>

  </Stack>
 
	
		<Box mt={4} className="mouse"></Box>
	


    </Box>
    </Container>
  );
};

export default HeroSection;
