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

const pages = ["Projects", "Pricing", "Blog"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return  (
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
          {/* large screen start */}
          <Typography
            variant="h6"
            noWrap
            component="a"
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
                component={Link}
                href="/healthplans"
                sx={{
                  color: "primary.main",
                  textDecoration: "none",
                  mx: 2,
                  "&:hover": {
                    color: "primary.light",
                    transform: "scale(1.1)",
                  },
                  transition: "color 0.3s, transform 0.3s",
                }}
              >
                {page}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
  <Button 
    variant="outlined" 
    sx={{ 
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
      borderLeft: `2px solid ${theme.palette.secondary.main}`,
      '&:hover': {
        border: `2px solid ${theme.palette.secondary.light}`
      }
    }}
  >
    Resume
  </Button>
</Box>

          {/* large screen end */}

          {/* small screen start */}
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <Button>Resume</Button>
              </MenuItem>
            </Menu>
          </Box>
          {/* small screen end */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
