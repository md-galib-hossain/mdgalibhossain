"use client";
import { Box, CircularProgress, Container, Grid, Typography } from "@mui/material";
import DrawIcon from "@mui/icons-material/Draw";
import StorageIcon from "@mui/icons-material/Storage";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import useFetch from "@/hooks/useFetch";

const Skills = () => {
  const { data, loading } = useFetch('/skills');

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: "center", paddingY: 35 }}>
        <CircularProgress />
      </Box>
    );
  }

  const skills = data?.data || [];

  const frontendSkills = skills.filter((skill : any) => skill.category === "frontEnd");
  const backendSkills = skills.filter((skill : any) => skill.category === "backEnd");
  const toolSkills = skills.filter((skill : any) => skill.category === "tools");

  const CustomColor = { primary: "#485B48", secondary: "" };

  return (
    <Box
      mt={35}
      id="skills"
      sx={{
        borderRadius: 8,
        background: "linear-gradient(0deg, rgb(15,28,8) 0%, rgb(32,57,18) 100%)",
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
            Using the latest technologies to build scalable, efficient, and innovative web applications.
          </Typography>
        </Box>

        <Box
          mt={5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
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
                <Box
                  display={"flex"}
                  paddingTop={5}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Grid container spacing={2} justifyContent="center">
                    {frontendSkills.map((item : any) => (
                      <Grid item key={item._id}>
                        <Box
                          sx={{
                            borderBottom: "1px solid white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="body1" sx={{ color: "white" }}>
                            {item.name}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
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
                <Box
                  display={"flex"}
                  paddingTop={5}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Grid container spacing={2} justifyContent="center">
                    {backendSkills.map((item : any) => (
                      <Grid item key={item._id}>
                        <Box
                          sx={{
                            borderBottom: "1px solid white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="body1" sx={{ color: "white" }}>
                            {item.name}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
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
                <Box
                  display={"flex"}
                  paddingTop={5}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Grid container spacing={2} justifyContent="center">
                    {toolSkills.map((item : any) => (
                      <Grid item key={item._id}>
                        <Box
                          sx={{
                            borderBottom: "1px solid white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="body1" sx={{ color: "white" }}>
                            {item.name}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
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
