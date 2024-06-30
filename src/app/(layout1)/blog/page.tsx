"use client";
import React from "react";
import { Box, Container, Grid, Card, CardMedia, CardContent, Typography, Chip, Stack, IconButton } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const blogPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    publishDate: "2024-06-30",
    coverImage: "https://i.ibb.co/KLXDmQq/Screenshot-2024-06-29-230011.png",
    images: [
      "https://example.com/react-hooks-image1.jpg",
      "https://example.com/react-hooks-image2.jpg"
    ],
    excerpt: "React Hooks have revolutionized the way we write functional components. In this post, we'll dive into the basics of useState and useEffect.",
    content: `
      <p>React Hooks were introduced in version 16.8 and they allow you to use state and other React features without writing a class. The most commonly used hooks are useState and useEffect.</p>
      <h2>useState</h2>
      <p>The useState hook allows you to add state to functional components...</p>
      <h2>useEffect</h2>
      <p>The useEffect hook lets you perform side effects in function components...</p>
    `,
    tags: ["React", "JavaScript", "Web Development", "Hooks"],
    category: "Frontend Development",
    estimatedReadingTime: 5,
  },
  {
    id: 2,
    title: "A Beginner’s Guide to Node.js",
    publishDate: "2024-07-01",
    coverImage: "https://i.ibb.co/KLXDmQq/Screenshot-2024-06-29-230011.png",
    images: [
      "https://example.com/nodejs-image1.jpg",
      "https://example.com/nodejs-image2.jpg"
    ],
    excerpt: "Node.js is a powerful platform for building server-side applications. This post will guide you through the fundamentals of Node.js and how to get started with your first project.",
    content: `
      <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to build scalable network applications with ease. In this post, we'll cover the basics of Node.js and how to start building your own server-side applications.</p>
      <h2>Getting Started</h2>
      <p>To get started with Node.js, you'll need to install it on your machine...</p>
      <h2>Creating Your First App</h2>
      <p>Let's create a simple "Hello World" application...</p>
    `,
    tags: ["Node.js", "JavaScript", "Backend Development", "Server"],
    category: "Backend Development",
    estimatedReadingTime: 7,
  },
  {
    id: 3,
    title: "A Beginner’s Guide to Node.js",
    publishDate: "2024-07-01",
    coverImage: "https://i.ibb.co/KLXDmQq/Screenshot-2024-06-29-230011.png",
    images: [
      "https://example.com/nodejs-image1.jpg",
      "https://example.com/nodejs-image2.jpg"
    ],
    excerpt: "Node.js is a powerful platform for building server-side applications. This post will guide you through the fundamentals of Node.js and how to get started with your first project.",
    content: `
      <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to build scalable network applications with ease. In this post, we'll cover the basics of Node.js and how to start building your own server-side applications.</p>
      <h2>Getting Started</h2>
      <p>To get started with Node.js, you'll need to install it on your machine...</p>
      <h2>Creating Your First App</h2>
      <p>Let's create a simple "Hello World" application...</p>
    `,
    tags: ["Node.js", "JavaScript", "Backend Development", "Server"],
    category: "Backend Development",
    estimatedReadingTime: 7,
  }
];

const Page = () => {
  const [heroPost, ...latestPosts] = blogPosts;

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
              {heroPost.tags.map((tag, index) => (
                <Chip label={tag} key={index} variant="outlined" size="small" />
              ))}
            </Stack>
            <Box mt={2}>
              <IconButton
                component={Link}
                href={`/blog/${heroPost.id}`}
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
          {latestPosts.map((post) => (
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
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <Chip label={tag} key={index} variant="outlined" size="small" />
                    ))}
                  </Stack>
                  <Box mt={2}>
                    <IconButton
                      component={Link}
                      href={`/blog/${post.id}`}
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
