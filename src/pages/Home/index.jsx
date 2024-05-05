import { Box, Container, Grid, Paper, styled } from "@mui/material";
import React from "react";
import FilterUi from "../../components/common/FilterUi";
import JobCard from "../../components/common/JobCard";

const Home = () => {
  return (
    <div>
      <FilterUi />
      <Container sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              
              <JobCard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
