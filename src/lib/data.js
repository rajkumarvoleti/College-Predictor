import data from "../data.json";

// caste
export const caste = Object.keys(data);

// helping function
function getList(key, all_clgs) {
  let list = new Set();
  all_clgs.forEach((clg) => {
    list.add(clg[key]);
  });
  list = [...list].sort();
  return list;
}

// IIEST to NIT
caste.forEach((key) => {
  data[key].forEach((clg) => {
    if (
      clg.institute ===
      "Indian Institute of Engineering Science and Technology, Shibpur"
    ) {
      clg.type = "NIT";
    }
  });
});

// all college list
export const all_clgs = [];
caste.forEach((key) => {
  all_clgs.push(...data[key]);
});

// types of colleges
export const types = getList("type", all_clgs);

// types of streams
export const streams = getList("program", all_clgs);

// types of categories
export const categories = getList("category", all_clgs);

// types of quotas
export const quotas = getList("quota", all_clgs);

// types of genders
export const genders = getList("seat", all_clgs);

// types of duration
export const courseDuration = getList("courseDuration", all_clgs);

export const exams = ["JEE Advanced", "JEE Main"];

// categorizing ollege list by type
const clgs_by_type = {};
types.forEach((type) => {
  clgs_by_type[type] = [];
});
all_clgs.forEach((clg) => {
  clgs_by_type[clg.type].push(clg);
});

export { clgs_by_type };

export default data;
