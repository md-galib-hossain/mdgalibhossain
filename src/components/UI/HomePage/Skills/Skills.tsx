import { Box, Container, Grid, Typography } from "@mui/material";
import DrawIcon from "@mui/icons-material/Draw";
import StorageIcon from "@mui/icons-material/Storage";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

const Skills = () => {
  const CustomColor = { primary: "#485B48", secondary: "" };
  const frontend = [
    { title: "HTML", icon: "" },
    { title: "CSS", icon: "" },
    { title: "Javascript", icon: "" },
    { title: "Typescript", icon: "" },
    { title: "React", icon: "" },
    { title: "Nextjs", icon: "" },
    { title: "TailwindCSS", icon: "" },
    { title: "MUI", icon: "" },
    { title: "Redux", icon: "" },
    { title: "Axios", icon: "" },
  ];
  const backend = [
    { title: "Nodejs", icon: "" },
    { title: "Expressjs", icon: "" },
    { title: "Mongodb", icon: "" },
    { title: "Mongoose", icon: "" },
    { title: "Postgres", icon: "" },
    { title: "Prisma", icon: "" },
    { title: "Zod", icon: "" },
];
  const tools = [
    { title: "Github", icon: "" },
    { title: "Vscode", icon: "" },
    { title: "Postman", icon: "" },
    { title: "Vercel", icon: "" },
    { title: "Netlify", icon: "" },
    { title: "Render", icon: "" },
    { title: "Figma", icon: "" },
    { title: "Adobexd", icon: "" },
  ];
  return (
    <Box
      mt={35}
      id="skills"
      sx={{
        borderRadius: 8,
        background:
          "linear-gradient(0deg, rgb(15,28,8) 0%, rgb(32,57,18) 100%)",
        color: "white",
        padding: 10,
        minHeight: 800,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Skills
        </Typography>

        <Box mt={3}>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", color: "white" }}
          >
            Using the latest technologies to build scalable, efficient, and
            innovative web applications.
          </Typography>
        </Box>

        <Box mt={5} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Grid container spacing={4}>
            {/* Frontend Card */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  minHeight: 400,
                  textAlign: "center",
                  p: 3,
                  borderRadius: 4,
                  bgcolor: `${CustomColor.secondary}`,
                }}
              >
                <Box sx={{ margin: "0 auto" }} mb={2} width={80} height={90}>
                  <DrawIcon sx={{ fontSize: 80 }} />
                </Box>
                <Typography variant="h4" mb={2}>
                  Frontend
                </Typography>
                <Box display={"flex"} paddingTop={5} justifyContent={"center"} alignItems={"center"}>
                <Grid container spacing={2} justifyContent="center">
                  {frontend?.map((item) => {
                    return (
                      <Grid item>
                        <Box
                          sx={{
                            // bgcolor: `${CustomColor.primary}`,
                            borderBottom: "1px solid white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // borderRadius: 2,
                            // minHeight: 100,
                            // minWidth: 100,
                          }}
                        >
                          <Typography variant="body1" sx={{ color: "white" }}>
                            {item?.title}
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
                </Box>
              </Box>
            </Grid>
            {/* Backend Card */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  minHeight: 400,
                  textAlign: "center",
                  p: 3,
                  borderRadius: 4,
                  bgcolor: `${CustomColor.secondary}`,
                }}
              >
                <Box sx={{ margin: "0 auto" }} mb={2} width={80} height={90}>
                  <StorageIcon sx={{ fontSize: 80 }} />
                </Box>
                <Typography variant="h4" mb={2}>
                  Backend
                </Typography>
                <Box display={"flex"} paddingTop={5} justifyContent={"center"} alignItems={"center"}>

                <Grid container spacing={2} justifyContent="center">
                {backend?.map((item) => {
                    return (
                      <Grid item>
                        <Box
                          sx={{
                            // bgcolor: `${CustomColor.primary}`,
                            borderBottom: "1px solid white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // borderRadius: 2,
                            // minHeight: 100,
                            // minWidth: 100,
                          }}
                        >
                          <Typography variant="body1" sx={{ color: "white" }}>
                            {item?.title}
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
                </Box>
              </Box>
            </Grid>
            {/* Other Tools Card */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  minHeight: 400,
                  textAlign: "center",
                  p: 3,
                  borderRadius: 4,
                  bgcolor: `${CustomColor.secondary}`,
                }}
              >
                <Box sx={{ margin: "0 auto" }} mb={2} width={80} height={90}>
                  <HomeRepairServiceIcon sx={{ fontSize: 80 }} />
                </Box>
                <Typography variant="h4" mb={2}>
                  Other Tools
                </Typography>
                <Box display={"flex"} paddingTop={5} justifyContent={"center"} alignItems={"center"}>

                <Grid container spacing={2} justifyContent="center">
                {tools?.map((item) => {
                    return (
                      <Grid item>
                        <Box
                          sx={{
                            // bgcolor: `${CustomColor.primary}`,
                            borderBottom: "1px solid white",
                           
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // borderRadius: 2,
                            // minHeight: 100,
                            // minWidth: 100,
                          }}
                        >
                          <Typography variant="body1" sx={{ color: "white" }}>
                            {item?.title}
                          </Typography>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
