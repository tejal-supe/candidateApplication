import { Box, Container, Grid, Paper, styled } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import FilterUi from "../../components/common/FilterUi";
import JobCard from "../../components/common/JobCard";

import { getJobDataService } from "../../service/jobService";
import { useDispatch, useSelector } from "react-redux";
import { getData, selectFilteredJobs } from "../../store/filterSlice";
import Filter from "../../components/common/Filter";

const Home = () => {
  const divRef = useRef();
  const [jobData, setJobData] = useState([]);
  const [page, setPage] = useState(0);
  const filteredJobs = useSelector(selectFilteredJobs);
  const [loading, setLoading] = useState(true);

  const dispatach = useDispatch();

  const count = useSelector((state) => state.filterSlice);
  console.log(filteredJobs, "counr");

  const getJobData = async () => {
    try {
      const data = await getJobDataService(page);
      dispatach(getData([...count.jobsArray, ...data.jdList]));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getJobData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
      if (bottom) {
        setPage((prev) => prev + 10);
        setLoading(true);
      }
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      console.log("event removec");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setJobData(filteredJobs);
  }, [filteredJobs]);
  return (
    <div ref={divRef}>
      <Filter />
    
      {loading ? (
        <>
          <Container sx={{ flexGrow: 1}}className="container" >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {jobData?.map((data, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <JobCard data={data} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Home;
