"use client"
import { Box, CircularProgress, Container, Grid, Typography } from "@mui/material";
import ComputerWindowCard from "./ComputerWindowCard";
import useFetch from "@/hooks/useFetch";

const Projects = () => {
  const { data, loading, error } = useFetch('/projects');
  if(loading){

   return  <Box sx={{ display: 'flex', justifyContent:"center",paddingY : 35 }}>
   <CircularProgress />
 </Box>
  }
  const projects = data?.data || []
  console.log({projects})
    return (
      <Box mt={35} id="projects">
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Projects
          </Typography>
          <Box mt={10}>
            <Grid container spacing={4} justifyContent="center">
              {projects?.map((project : any) => (
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
