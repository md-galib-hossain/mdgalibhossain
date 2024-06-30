import { Box, Container, Grid, Typography } from "@mui/material";
import ComputerWindowCard from "./ComputerWindowCard";
import projects from "./project.constant";

const Projects = () => {
    return (
      <Box mt={35} id="projects">
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Projects
          </Typography>
          <Box mt={10}>
            <Grid container spacing={4} justifyContent="center">
              {projects.map((project) => (
                <Grid 
                  item 
                  key={project.id} 
                   sm={12} md={6}
                >
                  <ComputerWindowCard imageSrc={project.coverImage} showProjectInfo={project}/>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default Projects;
