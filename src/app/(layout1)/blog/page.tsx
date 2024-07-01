"use client";
import React from "react";
import { Box, Container, Grid, Card, CardMedia, CardContent, Typography, Chip, Stack, IconButton } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useFetch from "@/hooks/useFetch";
import CircularProgress from '@mui/material/CircularProgress';



const Page = () => {
  const { data, loading, error } = useFetch('/blogs');
  if(loading){

   return  <Box sx={{ display: 'flex', justifyContent:"center",paddingY : 35 }}>
   <CircularProgress />
 </Box>
  }
  const blogs = data?.data || []
  const [heroPost, ...latestPosts] = blogs;

  return (
    <Box mt={10}>
      <Container>
        <Typography mb={10} variant="h3" align="center" gutterBottom>
          Blog Posts
        </Typography>
        {/* Hero Section */}
        <Grid container spacing={4} mb={5}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="400"
              image={heroPost.coverImage}
              alt={heroPost.title}
            />
          </Grid>
          <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="center">
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {new Date(heroPost.publishDate).toLocaleDateString()}
            </Typography>
            <Typography variant="h4" component="div" gutterBottom>
              {heroPost.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              {heroPost.excerpt}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {heroPost.category} • {heroPost.estimatedReadingTime} min read
            </Typography>
            <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
              {heroPost.tags.map((tag : string, index : number) => (
                <Chip label={tag} key={index} variant="outlined" size="small" />
              ))}
            </Stack>
            <Box mt={2}>
              <IconButton
                component={Link}
                href={`/blog/${heroPost._id}`}
                aria-label="View Full Post"
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        {/* Latest Articles */}
        <Typography variant="h4" gutterBottom mb={5}>
          Latest Articles
        </Typography>
        <Grid container spacing={4}>
          {latestPosts.map((post : any) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={post.id}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={post.coverImage}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {new Date(post.publishDate).toLocaleDateString()}
                  </Typography>
                  <Typography variant="h6" component="div" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {post.excerpt}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {post.category} • {post.estimatedReadingTime} min read
                  </Typography>
                  <Stack direction="row" spacing={1} mt={2}>
                    {post.tags.slice(0, 3).map((tag: string, index : number) => (
                      <Chip label={tag} key={index} variant="outlined" size="small" />
                    ))}
                  </Stack>
                  <Box mt={2}>
                    <IconButton
                      component={Link}
                      href={`/blog/${post._id}`}
                      aria-label="View Full Post"
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Page;
