export const ROLES = [
  "backend",
  "frontend",
  "ios",
  "android",
  "flutter",
  "fullstack",
  "dev-ops",
];

export const NO_EMPS = [
  "1-10",
  "11-20",
  "21-50",
  "51-100",
  "101-200",
  "201-500",
  "500+",
];

export const EXPERIENCE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const TYPE = ["remote"];
export const MIN_BASE_PAY = ["0", "10", "20", "30", "40", "50", "60", "70"];
export const LOCATION = ["mumbai", "delhi ncr", "chennai", "bangalore"];

export const FILTER = [
  {
    data: ROLES,
    filterName: "jobRole",
    multi: true,
    placeholder: "Job Roles",
  },
  //Commenting as no key for number of emps is present
  //   {
  //     data: NO_EMPS,
  //     filterName: "noOfEmp",
  //     multi: true,
  //     placeholder: "No of Emps",
  //   },
  {
    data: EXPERIENCE,
    filterName: "minExp",
    multi: false,
    placeholder: "Min Experience",
  },
  {
    data: TYPE,
    filterName: "type",
    multi: false,
    placeholder: "Remote/In-office",
  },
  {
    data: LOCATION,
    filterName: "location",
    multi: true,
    placeholder: "Location",
  },
  {
    data: MIN_BASE_PAY,
    filterName: "minJdSalary",
    multi: false,
    placeholder: "Min salary",
  },
];
