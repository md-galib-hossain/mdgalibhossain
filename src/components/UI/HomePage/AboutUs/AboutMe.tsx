"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const AboutMe = () => {
  return (
    <Box mt={35} id="about-me">
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{textAlign : "center"}} >
          About Me
        </Typography>
        <Box mt={10} className="gradient">
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  bgcolor: "secondary.light",
                  color: "black",
                  borderRadius: 5,
                  padding: 3,
                  minHeight: 400,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.6,
                      fontSize: 20,
                      fontWeight: "400",
                      textAlign: "start",
                      padding: 2,
                    }}
                  >
                    Hi, I am Galib
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.6,
                      fontSize: 20,
                      fontWeight: "400",
                      textAlign: "start",
                      padding: 2,
                    }}
                  >
                    Started my journey in 2020 while pursuing a bachelor's in
                    Computer Science and Engineering, I'm now fully immersed in
                    full-time web development, driven by a passion for solving
                    errors and mastering the craft of web development. With a
                    focus on continuous learning, I strive to integrate new
                    technologies to enhance my projects and skills.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
            <Box
                sx={{
                  bgcolor: "secondary.light", // Adjusted color for better readability
                  borderRadius: 5,
                  overflow: "hidden",
                  minHeight: 400,
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-end", // Align items to the bottom
                  justifyContent: "center",
                }}
              >
                <Image
                  src="https://i.ibb.co/KKs6sX1/Screenshot-2024-06-29-12-03-22-03-9edr2460851df6f172a4592fca41cc2d2e6-1.png"
                  alt="my picture"
                  width={370}
                  height={370}
                  style={{
                    maxHeight: "100%",
                    width: "auto",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6} md={2.5}>
              <Box
                sx={{
                  minHeight: 250,
                  bgcolor: "secondary.light",
                  padding: 3,

                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: 30, fontWeight: "600" }}>
                    10+
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.6,
                      fontSize: 20,
                      fontWeight: "400",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    projects completed{" "}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={2.5}>
              <Box
                sx={{
                  minHeight: 250,
                  bgcolor: "secondary.light",
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: 3,
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: 30, fontWeight: "600" }}>
                    2+
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.6,
                      fontSize: 20,
                      fontWeight: "400",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    years of development{" "}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  bgcolor: "secondary.light",
                  color: "black",
                  borderRadius: 5,
                  padding: 3,
                  minHeight: 250,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    lineHeight: 1.6,
                    fontSize: 20,
                    fontWeight: "400",
                    textAlign: "start",
                    padding: 2,
                  }}
                >
                  I specialize in backend development as a Full Stack Web
                  Developer. I design and build web applications, focusing on
                  creating efficient server-side solutions and ensuring seamless
                  integration across platforms.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
