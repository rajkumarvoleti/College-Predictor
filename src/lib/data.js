const dataFile = require("../data.json");

export const rounds = dataFile.values.round;

const collegeList = dataFile.values.college;

const IIT_str1 = "Indian Institute  of Technology";
const IIT_str2 = "Indian Institute of Technology";
const NIT_str = "National Institute of Technology";
const IIEST_str = "Indian Institute of Engineering Science and Technology";
const IIIT_str1 = "Indian institute of information technology";
const IIIT_str2 = "Indian Institute of Information Technology";

function getObject(str1, str2, data) {
  return data
    .filter((college) => {
      if (college.includes(str1) || college.includes(str2)) return true;
      return false;
    })
    .map((college) => {
      return {
        name: college,
        value: college,
      };
    });
}

function getMap(obj) {
  return obj.map((data) => {
    return {
      name: data,
      value: data,
    };
  });
}

export const Exams = [
  { name: "JEE MAIN", value: "JEE MAIN" },
  { name: "JEE ADVANCE", value: "JEE ADVANCE" },
];

export const Type = [
  { name: "IIT's", value: "IIT's" },
  { name: "NIT's", value: "NIT's" },
  { name: "IIIT's", value: "IIIT's" },
  { name: "GFTI's", value: "GFTI's" },
];

export const IITcollegeList = getObject(IIT_str1, IIT_str2, collegeList);

export const NITcollegeList = getObject(NIT_str, IIEST_str, collegeList);

export const IIITcollegeList = getObject(IIIT_str1, IIIT_str2, collegeList);

export const GFTIcollegeList = collegeList
  .filter((college) => {
    if (
      IIITcollegeList.includes(college) ||
      IITcollegeList.includes(college) ||
      NITcollegeList.includes(college)
    )
      return false;
    return true;
  })
  .map((college) => {
    return {
      name: college,
      value: college,
    };
  });

export const stream = getMap(dataFile.values.stream);
export const category = getMap(dataFile.values.category);
export const quota = getMap(dataFile.values.quota);
export const gender = [
  { name: "Female", value: "Female" },
  { name: "Gender-Neutral", value: "Gender-Neutral" },
];
