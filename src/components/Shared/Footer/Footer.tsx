import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
const Footer = () => {
  const footerItems = [
    {
      name: "Projects",
      link: "/",
    },
    {
      name: "About Me",
      link: "/",
    },
    {
      name: "Blog",
      link: "/",
    },
    {
      name: "Contact Me",
      link: "/",
    },
  ];
  return (
    <Box mt={15} bgcolor="rgb(17, 26, 34)" p={10}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          {footerItems.map((item: { name: string; link: string }) => {
            return (
              <Typography color="#fff" component={Link} href={`/${item?.link}`}>
                {item.name}
              </Typography>
            );
          })}
        </Stack>
        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Link href="/facebook">
            <Image src={''} width={30} height={30} alt="facebook" />
          </Link>
          <Link href="/facebook">
            <Image src={''} width={30} height={30} alt="facebook" />
          </Link>
          <Link href="/facebook">
            <Image src={''} width={30} height={30} alt="facebook" />
          </Link>
          <Link href="/facebook">
            <Image src={''} width={30} height={30} alt="facebook" />
          </Link>
        </Stack>
      
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography color="#fff" component="p">
            All Rights Reserved.&copy; Copyright Md Galib Hossain 2024
          </Typography>
          <Typography
            color="#fff"
            variant="h4"
            fontWeight={600}
            component={Link}
            href="/"
          >
          Md Galib
            <Box component="span" color="primary.main">
              Hossain
            </Box>
          </Typography>
          <Typography color="#fff" component="p">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
