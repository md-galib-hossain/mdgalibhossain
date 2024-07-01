import { Box, Container, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/facebook.png";
import twitter from "@/assets/twitter.png";
import linkedin from "@/assets/linkedin.png";
import github from "@/assets/github-sign.png";

// Define the type for social profiles
type SocialProfile = {
  name: 'Facebook' | 'Twitter' | 'LinkedIn' | 'GitHub';
  link: string;
};

const socialIcons: Record<SocialProfile['name'], StaticImageData> = {
  Facebook: facebookIcon,
  Twitter: twitter,
  LinkedIn: linkedin,
  GitHub: github,
};

const Footer = ({ socials }: { socials: SocialProfile[] }) => {
  const footerItems = [
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "About-Me",
      link: "#about-me",
    },
    {
      name: "Blogs",
      link: "blog",
    },
    {
      name: "Contact-Me",
      link: "#contact-me",
    },
  ];
  return (
    <Box mt={15} bgcolor="secondary.main" py={5}>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={4}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          {footerItems?.map((item) => (
            <Typography
              key={item.name}
              color="#fff"
              component={Link}
              href={`/${item.link}`}
              sx={{
                textDecoration: "none",
                "&:hover": { color: "primary.main" },
              }}
            >
              {item.name}
            </Typography>
          ))}
        </Stack>

        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          {socials?.map((social) => (
            <Box
              key={social.name}
              href={social.link}
              component={Link}
              target="_blank"
            >
              <Image
                src={socialIcons[social.name as keyof typeof socialIcons]}
                width={30}
                height={30}
                alt={social.name}
              />
            </Box>
          ))}
        </Stack>

        <Stack direction="row" justifyContent="center" alignItems="center" py={3}>
          <Typography
            color="#fff"
            variant="h4"
            fontWeight={600}
            component={Link}
            href="/"
            sx={{ textDecoration: "none", display: "flex", alignItems: "center" }}
          >
            Md Galib
            <Box component="span" color="primary.main" ml={1}>
              Hossain
            </Box>
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="center" alignItems="center" py={3}>
          <Typography color="#fff" component="p">
            All Rights Reserved.&copy; Copyright Md Galib Hossain 2024
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
