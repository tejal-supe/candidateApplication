import { Box, Container, Grid, Paper, styled } from "@mui/material";
import React from "react";
import Modal from '@mui/material/Modal';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
  borderRadius: "20px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 10px 3px",
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const JobCard = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <span className="company-name"> {data.companyName}</span>
            <span className="job-role">{data.jobRole}</span>
            <span className="location">{data.location}</span>
          </div>
        </div>
        {/* <p className="estimated-salary">
          Estimated Salary : {data.minJdSalary} - {data.maxJdSalary}
        </p> */}
        <h6 className="heading">About Company:</h6>
        <div className="about-company">
          <b>About us</b> 
          <p on> {data.jobDetailsFromCompany}</p>
          <div className="view-job" onClick={()=>handleOpen()}>View More</div>
          {/* <div className="white-linear"></div> */}
        </div>
        <div className="min-exp">
          <p>Minimum Experience</p>
                  <p>{data.minExp || 0} - {data.maxExp || 0} </p>
        </div>
        <div className="apply" onClick={()=>applyForJob()}>Easy Apply</div>
      </Item>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {data.jobDetailsFromCompany}
        </Box>
      </Modal>

    </>
  );
};

export default JobCard;
