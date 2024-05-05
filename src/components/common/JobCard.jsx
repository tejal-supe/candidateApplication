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

const JobCard = () => {
  return (
    <>
      <Item>
        <div className="posted-at">Posted 10 days ago</div>
        <div className="compnay-details">
          <div className="logo">
            <img
              alt="company-logo"
              src="https://w7.pngwing.com/pngs/36/959/png-transparent-meta-logo-facebook-social-media-chat-message-communication-icon-thumbnail.png"
            />
          </div>
          <div className="title">
            <span>fampay</span>
            <span>Backend Engineer</span>
            <span>Banglore</span>
          </div>
        </div>
        <p className="estimated-salary">~18-35 LPA</p>
        <h6>About Company:</h6>
        <div className="about-company">
          <b>About us</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            aperiam distinctio quaerat ipsum dolor voluptate? Possimus ea vitae
            odit autem facere dignissimos quidem, qui iure labore dolor ab ex
            voluptates.
          </p>
                  <div className="view-job">View Job</div>
                  <div className="white-linear"></div>
        </div>
        <div className="min-exp">
          <p>Minimum Experience</p>
          <p>3 years</p>
        </div>
        <div className="apply">Easy Apply</div>
      </Item>
    </>
  );
};

export default JobCard;
