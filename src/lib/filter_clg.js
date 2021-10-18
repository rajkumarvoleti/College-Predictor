import { all_clgs as clg_list } from "./data";

function isValid(clg, inputs, keys) {
  let takeIt = true;
  keys.forEach((key) => {
    if (!inputs[key].includes(clg[key])) takeIt = false;
  });
  return takeIt;
}

export default function filter_clg(inputs) {
  const rank = inputs.rank;

  //keys
  const keys = Object.keys(inputs).filter(
    (key) => key !== "rank" && key !== "exam"
  );

  // cleaning inputs
  keys.forEach((key) => {
    inputs[key] = inputs[key].map((input) => input.name || input);
  });

  // filtering colleges
  const filtered_clgs = clg_list
    .filter((clg) => isValid(clg, inputs, keys) && clg.closingRank >= rank)
    .sort((clg1, clg2) => clg1.closingRank - clg2.closingRank);
  return filtered_clgs;
}
