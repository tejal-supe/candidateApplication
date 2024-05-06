import axios from "axios";
import config from "../config/apiConfig.json"
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


export const getJobDataService = async(page) => {
  const raw = JSON.stringify({
    limit: 10,
    offset: page,
  });
  const requestOptions = {
    method: "POST",
      headers: myHeaders,
    body:raw
  };
  
    const data = await axios.post(config.weekDayJobs, requestOptions)
    return data.data
}