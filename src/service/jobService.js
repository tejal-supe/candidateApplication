import axios from "axios";
import config from "../config/apiConfig.json"
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


export const getJobDataService = async (page) => {
  try {
    const body = JSON.stringify({
      limit: 10,
      offset: page,
    });  
      const data = await axios.post(config.weekDayJobs, body)
      return data.data
  } catch (error) {
    console.log(error,'Error while fetching the data');
  }
}