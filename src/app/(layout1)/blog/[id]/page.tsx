"use client";
import React from "react";
import { Box, Container, Typography, CardMedia, Stack, Chip, Grid, CircularProgress } from "@mui/material";
import useFetch from "@/hooks/useFetch";



const ViewFullPost = ({params} : any) => {
    

  const { data, loading, error } = useFetch(`/blogs/${params.id}`);
  if(loading){

   return  <Box sx={{ display: 'flex', justifyContent:"center",paddingY : 35 }}>
   <CircularProgress />
 </Box>
  }
  const blogPost = data?.data
  return (
    <Box mt={10}>
      <Container>
        <Typography mb={5} variant="h3" align="center" gutterBottom>
          {blogPost.title}
        </Typography>
        <CardMedia
          component="img"
          height="600"
          image={blogPost.coverImage}
          alt={blogPost.title}
        />
        <Typography variant="body2" color="textSecondary" gutterBottom mt={2}>
          {new Date(blogPost.publishDate).toLocaleDateString()}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          {blogPost.excerpt}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {blogPost.category} • {blogPost.estimatedReadingTime} min read
        </Typography>
        <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
          {blogPost?.tags?.map((tag : string, index : number) => (
            <Chip label={tag} key={index} variant="outlined" size="small" />
          ))}
        </Stack>
        <Box mt={4}>
          {blogPost?.contentSections?.map((section : any, index : number) => (
            <Box key={index} mb={3}>
              <Typography variant="h4" gutterBottom>{section.header}</Typography>
              <Typography variant="body1" paragraph>{section.body}</Typography>
            </Box>
          ))}
        </Box>
        <Grid container mt={4} spacing={4} justifyContent={"center"}>
          {blogPost?.images?.map((image : string, index : number) => (
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
