const dataFile = require("../data.json");

export const rounds = dataFile.values.round;

const collegeList = dataFile.values.college;

const IIT_str1 = "Indian Institute  of Technology";
const IIT_str2 = "Indian Institute of Technology";
const NIT_str = "National Institute of Technology";
const IIEST_str = "Indian Institute of Engineering Science and Technology";
const IIIT_str1 = "Indian institute of information technology";
const IIIT_str2 = "Indian Institute of Information Technology";

export const IITcollegeList = collegeList
  .filter((college) => {
    if (college.includes(IIT_str1) || college.includes(IIT_str2)) return true;
    return false;
  })
  .map((college) => {
    return {
      name: college,
      value: college,
    };
  });

export const NITcollegeList = collegeList
  .filter((college) => {
    if (college.includes(NIT_str) || college.includes(IIEST_str)) return true;
    return false;
  })
  .map((college) => {
    return {
      name: college,
      value: college,
    };
  });

export const IIITcollegeList = collegeList
  .filter((college) => {
    if (college.includes(IIIT_str1) || college.includes(IIIT_str2)) return true;
    return false;
  })
  .map((college) => {
    return {
      name: college,
      value: college,
    };
  });

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

export const stream = dataFile.values.stream.map((data) => {
  return {
    name: data,
    value: data,
  };
});
export const category = dataFile.values.category.map((data) => {
  return {
    name: data,
    value: data,
  };
});
export const quota = dataFile.values.quota.map((data) => {
  return {
    name: data,
    value: data,
  };
});
export const dataLength = dataFile.data.length;
