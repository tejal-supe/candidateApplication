import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../../components/common/JobCard";
import { getJobDataService } from "../../service/jobService";
import { getData, selectFilteredJobs } from "../../store/filterSlice";
import Filter from "../../components/common/Filter";

const Home = () => {
  const [jobData, setJobData] = useState([]);
  const [page, setPage] = useState(0);
  const filteredJobs = useSelector(selectFilteredJobs);

  const dispatach = useDispatch();

  const count = useSelector((state) => state.filterSlice);

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
      }
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setJobData(filteredJobs);
  }, [filteredJobs]);
  return (
    <>
      <Filter />

      {jobData.length > 0 ? (
        <>
          <Container sx={{ flexGrow: 1 }} className="container">
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
        <h2>No Data Available at the moment</h2>
      )}
    </>
  );
};

export default Home;
