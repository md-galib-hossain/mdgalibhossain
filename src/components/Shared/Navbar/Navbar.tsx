"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import Link from "next/link";
import { theme } from "@/lib/theme/theme";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const pages = ["Projects", "Blog", "About-me", "Skills"];

const ResponsiveAppBar = ({ user }: any) => {

 



  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElResume, setAnchorElResume] =
    React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenResumeMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElResume(event.currentTarget);
  };

  const handleCloseResumeMenu = () => {
    setAnchorElResume(null);
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        paddingX: 4,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Large screen start */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "primary.main",
              textDecoration: "none",
            }}
          >
            Md Galib Hossain
          </Typography>

          <Box
            mr={4}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Typography
                key={page}
                component={Link}
                href={page === "Blog" ? "/blog" : `/#${page?.toLowerCase()}`}
                sx={{
                  color: "primary.main",
                  textDecoration: "none",
                  mx: 2,
                  transition: "color 0.3s, transform 0.3s",
                  "&:hover": {
                    color: "primary.main",
                    transform: "scale(1.1)",
                  },
                  "&:not(:hover)": {
                    color: "primary.main",
                  },
                }}
              >
                {page}
              </Typography>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              endIcon={<ArrowDropDownIcon />}
              variant="outlined"
              onClick={handleOpenResumeMenu}
              sx={{
                borderBottom: `2px solid ${theme.palette.secondary.main}`,
                borderLeft: `2px solid ${theme.palette.secondary.main}`,
                "&:hover": {
                  border: `2px solid ${theme.palette.secondary.light}`,
                },
              }}
            >
              Resume
            </Button>
            <Menu
              id="resume-menu"
              anchorEl={anchorElResume}
              open={Boolean(anchorElResume)}
              onClose={handleCloseResumeMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleCloseResumeMenu}>
                <Typography
                  textAlign="center"
                  component={Link}
                  target="_"
                  href={`https://drive.google.com/file/d/${user.resumeLinkId}/view`}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  View Resume
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseResumeMenu}>
                <Typography
                  textAlign="center"
                  component={Link}
                  href={`https://drive.google.com/uc?export=download&id=${user.resumeLinkId}`}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  Download Resume
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Large screen end */}

          {/* Small screen start */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                fontFamily: "Roboto",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "primary.main",
                textDecoration: "none",
              }}
            >
              Md Galib Hossain
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "primary.main" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  component={Link}
                  href={`#${page?.toLowerCase()}`}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Typography
                  sx={{ textDecoration: "none", color: "inherit" }}
                  component={Link}
                  href={`https://drive.google.com/uc?export=download&id=${user.resumeLinkId}`}
                >
                  Resume
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          {/* Small screen end */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
