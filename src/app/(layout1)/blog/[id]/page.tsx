"use client";
import React from "react";
import { Box, Container, Typography, CardMedia, Stack, Chip, Grid } from "@mui/material";

const blogPost = {
  id: 1,
  title: "Understanding React Hooks",
  publishDate: "2024-06-30",
  coverImage: "https://i.ibb.co/KLXDmQq/Screenshot-2024-06-29-230011.png",
  images: [
    "https://i.ibb.co/KLXDmQq/Screenshot-2024-06-29-230011.png",
    "https://i.ibb.co/KLXDmQq/Screenshot-2024-06-29-230011.png",
    "https://i.ibb.co/KLXDmQq/Screenshot-2024-06-29-230011.png",
    "https://i.ibb.co/KLXDmQq/Screenshot-2024-06-29-230011.png"
  ],
  excerpt: "React Hooks have revolutionized the way we write functional components. In this post, we'll dive into the basics of useState and useEffect.",
  contentSections: [
    {
      header: "React Hooks were introduced in version 16.8",
      body: "and they allow you to use state and other React features without writing a class. The most commonly used hooks are useState and useEffect."
    },
    {
      header: "useState",
      body: "The useState hook allows you to add state to functional components..."
    },
    {
      header: "useEffect",
      body: "The useEffect hook lets you perform side effects in function components..."
    }
  ],
  tags: ["React", "JavaScript", "Web Development", "Hooks"],
  category: "Frontend Development",
  estimatedReadingTime: 5, 
};

const ViewFullPost = ({params} : any) => {
    
  return (
    <Box mt={10}>
      <Container>
        <Typography mb={5} variant="h3" align="center" gutterBottom>
          {blogPost.title}
        </Typography>
        <CardMedia
          component="img"
          height="400"
          image={blogPost.coverImage}
          alt={blogPost.title}
        />
        <Typography variant="body2" color="textSecondary" gutterBottom mt={2}>
          {new Date(blogPost.publishDate).toLocaleDateString()}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          {blogPost.excerpt}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {blogPost.category} • {blogPost.estimatedReadingTime} min read
        </Typography>
        <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
          {blogPost.tags.map((tag, index) => (
            <Chip label={tag} key={index} variant="outlined" size="small" />
          ))}
        </Stack>
        <Box mt={4}>
          {blogPost.contentSections.map((section, index) => (
            <Box key={index} mb={3}>
              <Typography variant="h4" gutterBottom>{section.header}</Typography>
              <Typography variant="body1" paragraph>{section.body}</Typography>
            </Box>
          ))}
        </Box>
        <Grid container mt={4} spacing={4} justifyContent={"center"}>
          {blogPost.images.map((image, index) => (
            <Grid item sm={6}  md={3}>
            <CardMedia
              component="img"
              height="200"
              image={image}
              alt={`blog-post-image-${index}`}
              key={index}
              sx={{ mb: 2 }}
            />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ViewFullPost;
