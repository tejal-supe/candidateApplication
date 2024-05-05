import { Box, Container, Grid, Paper, styled } from "@mui/material";
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  borderRadius: "20px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 10px 3px",
}));

const JobCard = ({ data }) => {
    const applyForJob = () => {
        window.open(data.jdLink)
    }
  return (
    <>
      <Item>
        <div className="compnay-details">
          <div className="logo">
            <img alt="company-logo" src={data.logoUrl} />
          </div>
          <div className="title">
            <span>{data.companyName}</span>
            <span>{data.jobRole}</span>
            <span>{data.location}</span>
          </div>
        </div>
        <p className="estimated-salary">
          {data.minJdSalary} - {data.maxJdSalary}
        </p>
        <h6>About Company:</h6>
        <div className="about-company">
          <b>About us</b>
          <p>{data.jobDetailsFromCompany}</p>
          <div className="view-job">View Job</div>
          <div className="white-linear"></div>
        </div>
        <div className="min-exp">
          <p>Minimum Experience</p>
                  <p>{data.minExp} - {data.maxExp }</p>
        </div>
        <div className="apply" onClick={()=>applyForJob()}>Easy Apply</div>
      </Item>
    </>
  );
};

export default JobCard;
