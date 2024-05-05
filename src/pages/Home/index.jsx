import { Box, Container, Grid, Paper, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import FilterUi from "../../components/common/FilterUi";
import JobCard from "../../components/common/JobCard";
import { NO_EMPS, ROLES } from "../../utils/FilterData";
import { getJobDataService } from "../../service/jobService";
import { useSelector } from "react-redux";

const Home = () => {
  const [jobData, setJobData] = useState({})
  const count = useSelector((state) => state.filterSlice)
    console.log(count,'counr');;
    const getJobData = async() => {
        try {
            const data = await getJobDataService();
            console.log(data, 'data');
            setJobData(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getJobData();
    },[])
  return (
    <div>
      <FilterUi data={ROLES} filterName="roles" />
      <FilterUi data={NO_EMPS} filterName="noOfEmp" />
      <Container sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {jobData?.jdList?.map((data, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <JobCard data={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
