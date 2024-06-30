"use client";
import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Tooltip,
  Menu,
  MenuItem,
  IconButton,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import ComputerWindowCard from "@/components/UI/HomePage/Projects/ComputerWindowCard"; // Adjust the import as needed
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { theme } from "@/lib/theme/theme";

const project = {
  id: 1,
  title: "CareConnect",
  coverImage: "https://i.ibb.co/tXJGnGw/Screenshot-2024-06-29-230011.png",
  images: [
    "https://i.ibb.co/tXJGnGw/Screenshot-2024-06-29-230011.png",
    "https://i.ibb.co/tXJGnGw/Screenshot-2024-06-29-230011.png",
    "https://i.ibb.co/tXJGnGw/Screenshot-2024-06-29-230011.png",
    "https://i.ibb.co/tXJGnGw/Screenshot-2024-06-29-230011.png",
    "https://i.ibb.co/tXJGnGw/Screenshot-2024-06-29-230011.png",
  ],
  description: {
    heading: "A healthcare management system",
    text: "This project helps connect patients with doctors and manage appointments efficiently. This prssssss sssssss ssssssss ssssssssssssss ssssssssssss sssssssssssss sssssss soject helps connect patients with doctors and manage appointments efficiently.",
  },
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React",
    "React",
    "React",
    "React",
  ],
  links: {
    frontEnd: "https://github.com/md-galib-hossain/careconnect-frontend",
    backEnd: "https://github.com/md-galib-hossain/CareConnect-Backend",
    liveLink: "https://careconnect.com",
  },
};

const StickyBox = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: theme.spacing(10),

  zIndex: 1,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    position: "relative",
    top: "auto",
    zIndex: "auto",
  },
}));

const RightGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 60,
  overflowY: "auto",
  marginTop: theme.spacing(2),
}));

// const FloatingBox = styled(Box)(({ theme }) => ({
//   position: "fixed",
//   bottom: theme.spacing(2),
//   right: theme.spacing(2),
//   backgroundColor: theme.palette.primary.main,
//   color: theme.palette.primary.contrastText,
//   padding: theme.spacing(1),
//   borderRadius: theme.shape.borderRadius,

//   [theme.breakpoints.down('sm')]: {
//     display: "none",
//   },
//   [theme.breakpoints.up('md')]: {
//     display: "block",
//   },
// }));

const truncateText = (text : string, length : number) => {
  if (text.length <= length) {
    return text;
  }
  return `${text.substring(0, length)}...`;
};

const Page = () => {
  const truncatedDescription = truncateText(project.description.text, 200);

  const [anchorElCode, setAnchorElCode] = React.useState(null);

  const handleOpenCodeMenu = (event : any) => {
    setAnchorElCode(event.currentTarget);
  };

  const handleCloseCodeMenu = () => {
    setAnchorElCode(null);
  };

  const handlePreviousProject = () => {
    // Add logic to navigate to the previous project
  };

  const handleNextProject = () => {
    // Add logic to navigate to the next project
  };

  return (
    <Box mt={20}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StickyBox sx={{ alignItems: "center", maxWidth: "100%" }}>
              <Stack
                direction={"row"}
                justifyContent={"start"}
                sx={{ textDecoration: "none", color: "inherit" }}
                alignItems={"center"}
                spacing={1}
                component={Link}
                href="/"
                mb={3}
              >
                <KeyboardBackspaceIcon />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Go Back
                </Typography>
              </Stack>

              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                {project.title}
              </Typography>
              <Box mt={2}>
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  {project.description.heading}
                </Typography>
                <Tooltip title={project.description.text} arrow>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {truncatedDescription}
                  </Typography>
                </Tooltip>
              </Box>
              <Box
                mt={2}
                display="flex"
                flexWrap="wrap"
                gap={1}
                paddingRight={10}
              >
                {project.technologies.map((tech, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{
                      backgroundColor: "primary.light",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      margin: "2px",
                    }}
                  >
                    {tech}
                  </Typography>
                ))}
              </Box>
              <Box mt={3}>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.links.liveLink}
                  target="_blank"
                  sx={{ mr: 2 }}
                >
                  Live Preview
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowDropDownIcon />}
                  onClick={handleOpenCodeMenu}
                  sx={{
                    borderBottom: `2px solid ${theme.palette.secondary.main}`,
                    borderLeft: `2px solid ${theme.palette.secondary.main}`,
                    "&:hover": {
                      border: `2px solid ${theme.palette.secondary.light}`,
                    },
                  }}
                >
                  Code
                </Button>
                <Menu
                  id="code-menu"
                  anchorEl={anchorElCode}
                  open={Boolean(anchorElCode)}
                  onClose={handleCloseCodeMenu}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={handleCloseCodeMenu}>
                    <Typography
                      textAlign="center"
                      component={Link}
                      href={project.links.frontEnd}
                      target="_blank"
                      sx={{ textDecoration: "none", color: "inherit" }}
                    >
                      Frontend Code
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseCodeMenu}>
                    <Typography
                      textAlign="center"
                      component={Link}
                      href={project.links.backEnd}
                      target="_blank"
                      sx={{ textDecoration: "none", color: "inherit" }}
                    >
                      Backend Code
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </StickyBox>
          </Grid>
          <RightGrid item xs={12} md={6}>
            {project.images.map((image, index) => (
              <ComputerWindowCard key={index} imageSrc={image} />
            ))}
          </RightGrid>
        </Grid>
      </Container>
      {/* <FloatingBox>
        <IconButton onClick={handlePreviousProject} color="inherit">
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={handleNextProject} color="inherit">
          <ArrowForwardIcon />
        </IconButton>
      </FloatingBox> */}
    </Box>
  );
};

export default Page;
