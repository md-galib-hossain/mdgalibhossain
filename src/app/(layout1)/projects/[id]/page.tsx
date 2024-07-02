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
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import ComputerWindowCard from "@/components/UI/HomePage/Projects/ComputerWindowCard"; // Adjust the import as needed
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";
import { theme } from "@/lib/theme/theme";
import useFetch from "@/hooks/useFetch";

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

const Page = ({ params }: any) => {
  const { data, loading, error } = useFetch(`/projects/${params.id}`);
  const [anchorElCode, setAnchorElCode] = React.useState<null | HTMLElement>(null);

  const handleOpenCodeMenu = (event: React.MouseEvent<HTMLElement>) => {
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
        <Typography variant="h6" color="error">Error loading project</Typography>
      </Box>
    );
  }

  const project = data?.data || {};

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
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {project.description.text}
                </Typography>
              </Box>
              <Box
                mt={2}
                display="flex"
                flexWrap="wrap"
                gap={1}
                paddingRight={10}
              >
                {project.technologies.map((tech: string, index: number) => (
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
            {project.images.map((image: string, index: number) => (
              <ComputerWindowCard key={index} imageSrc={image} />
            ))}
          </RightGrid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Page;
