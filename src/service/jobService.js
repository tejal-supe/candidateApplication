import axios from "axios";
import config from "../config/apiConfig.json"
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  limit: 10,
  offset: 0,
});

const requestOptions = {
  method: "POST",
    headers: myHeaders,
  body:raw
};
export const getJobDataService = async() => {
    const data = await axios.post(config.weekDayJobs, requestOptions)
    return data.data
}