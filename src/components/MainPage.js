import styled from "styled-components";
import useForm from "../lib/useForm";
import {
  category,
  Exams,
  gender,
  GFTIcollegeList,
  IIITcollegeList,
  IITcollegeList,
  NITcollegeList,
  quota,
  stream,
  Type,
} from "../lib/data";
import MultiSelect from "./MultiSelect";

const MainPageStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form fieldset {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    border: none;
    label {
      p {
        display: inline;
      }
      input {
        display: inline;
        margin-left: 60px;
        padding-left: 10px;
        height: 40px;
        width: 180px;
        background-color: var(--blue);
        border: 2px solid var(--black);
        border-radius: 5px;
        color: white;
      }
    }
    @media (max-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 500px) {
      grid-template-columns: 1fr;
      width: 80vw;
      label {
      }
      label input {
        margin-left: 38px;
        width: 200px;
      }
    }
  }
`;

export default function MainPage() {
  const { inputs, handleChange, getOptions, clearForm, resetForm } = useForm({
    name: "Nice Shoes",
    type: [],
    college: [],
    branch: [],
    exam: [],
  });
  // console.log(Type);

  // changing type of college
  let type = Type;
  if (inputs.exam.length === 0)
    type = [{ name: "Select Exam type", value: "0" }];
  if (inputs.exam[0]?.name === "JEE ADVANCE" && Type) {
    type = [Type[0]];
  }
  if (inputs.exam[0]?.name === "JEE MAIN" && Type) {
    type = Type.slice(1, 4);
  }

  //changing collegeList
  let collegeList = [];
  if (inputs.type.length === 0)
    collegeList = [{ name: "Select College type", value: "0" }];
  else {
    inputs.type.forEach((college) => {
      if (college.name === "IIT's")
        collegeList = [...collegeList, ...IITcollegeList];
      if (college.name === "NIT's")
        collegeList = [...collegeList, ...NITcollegeList];
      if (college.name === "IIIT's")
        collegeList = [...collegeList, ...IIITcollegeList];
      if (college.name === "GFTI's")
        collegeList = [...collegeList, ...GFTIcollegeList];
    });
  }
  return (
    <MainPageStyles>
      <h1>College Predictor</h1>
      <div>
        <form action="POST">
          <fieldset>
            <MultiSelect
              name="exam"
              handleChange={getOptions}
              options={Exams}
              limit={1}
            />
            <label htmlFor="rank">
              <p>Rank</p>
              <input name="rank" onChange={handleChange} placeholder="Enter" />
            </label>
            <MultiSelect name="type" handleChange={getOptions} options={type} />
            <MultiSelect
              name="college"
              handleChange={getOptions}
              options={collegeList}
            />
            <MultiSelect
              name="stream"
              handleChange={getOptions}
              options={stream}
            />
            <MultiSelect
              name="category"
              handleChange={getOptions}
              options={category}
              limit={1}
            />
            <MultiSelect
              name="quota"
              handleChange={getOptions}
              options={quota}
              limit={1}
            />
            <MultiSelect
              name="gender"
              handleChange={getOptions}
              options={gender}
              limit={1}
            />
          </fieldset>
        </form>
      </div>
    </MainPageStyles>
  );
}
