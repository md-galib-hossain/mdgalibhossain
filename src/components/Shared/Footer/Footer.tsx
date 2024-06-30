import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/facebook.png";
import twitter from "@/assets/twitter.png";
import linkedin from "@/assets/linkedin.png";
import github from "@/assets/github-sign.png";

const Footer = ({socials}:any) => {

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
      link: "blogs",
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
          {footerItems.map((item: { name: string; link: string }) => (
            <Typography
              key={item.name}
              color="#fff"
              component={Link}
              href={`/${item?.link}`}
              sx={{ textDecoration: "none", "&:hover": { color: "primary.main" } }}
            >
              {item.name}
            </Typography>
          ))}
        </Stack>
        
        <Stack
          direction="row"
          gap={2}
          justifyContent="center"
          py={3}
        >
          <Box href={`${socials[0].link}`} component={Link} target="_">
            <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          </Box>
          {/* <Link href="/twitter">
            <Image src={twitter} width={30} height={30} alt="twitter" />
          </Link> */}
          <Box href={`${socials[1].link}`} component={Link} target="_">
            <Image src={linkedin} width={30} height={30} alt="linkedin" />
          </Box>
          <Box href={`${socials[2].link}`} component={Link} target="_">
            <Image src={github} width={30} height={30} alt="linkedin" />
          </Box>
        </Stack>
        
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          py={3}
        >
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
        
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          py={3}
        >
          <Typography color="#fff" component="p">
            All Rights Reserved.&copy; Copyright Md Galib Hossain 2024
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
