import styled from "styled-components";
import useForm from "../lib/useForm";
import {
  categories,
  exams,
  clgs_by_type,
  genders,
  quotas,
  streams,
  types as Types,
  courseDuration,
} from "../lib/data";
import MultiSelect from "./MultiSelect";
import validate from "../lib/validate";
import React, { useState } from "react";
import { useInputs } from "../lib/InputState";

//styles
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
    @media (max-width: 800px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 500px) {
      grid-template-columns: 1fr;
      width: 80vw;
    }
  }
  form fieldset label {
    grid-column: 1/-1;
    display: flex;
    justify-content: center;
    input {
      border: 3px solid var(--black);
      background-color: aliceblue;
      border-radius: 10px;
      padding: 0 20px;
      width: 90%;
      height: 40px;
    }
    input.rank::placeholder {
      color: black;
    }
  }
  form .btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 100px;
      height: 40px;
      margin: 20px 10px;
      background-color: var(--lightblue);
      border: 1px;
      border-radius: 10px;
      color: white;
      letter-spacing: 0.8px;
    }
    @media (max-width: 500px) {
      margin-bottom: 40vh;
    }
  }
`;

export default function MainPage(props) {
  const { updateInputs } = useInputs();
  const [reset, setReset] = useState(false);
  const { inputs, handleChange, getOptions } = useForm({
    rank: 999999,
    type: [],
    institute: [],
    category: [],
    program: [],
    quota: [],
    exam: [],
    seat: [],
    courseDuration: [],
  });

  // changing type of college
  let types = Types;
  if (inputs.exam.length === 0) types = ["Select Exam type"];
  else if (inputs.exam[0]?.name === "JEE Advanced") {
    types = [types[0]];
  } else {
    types = types.slice(1, 4);
  }

  //changing collegeList
  let collegeList = [];
  if (inputs.type.length === 0) collegeList = ["Select College type"];
  else {
    types.forEach((type) => {
      collegeList = [...collegeList, ...clgs_by_type[type]];
    });
    collegeList = collegeList.map((clg) => clg.institute);
  }
  // taking unique values
  collegeList = new Set(collegeList);
  collegeList = [...collegeList];

  async function handleSubmit(e) {
    e.preventDefault();
    if (validate(inputs)) {
      updateInputs(inputs);
      props.history.push("/result");
    }
  }
  return (
    <MainPageStyles>
      <h1 className="neonText">College Predictor</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="rank">
              <input
                name="rank"
                className="rank"
                type="number"
                onChange={handleChange}
                placeholder="Please Enter Your Rank"
              />
            </label>
            <MultiSelect
              reset={reset}
              setReset={setReset}
              handleChange={getOptions}
              name="exam"
              options={exams}
              displayName="Exam"
              limit={1}
            />
            <MultiSelect
              handleChange={getOptions}
              name="type"
              options={types}
              displayName="Institute type"
            />
            <MultiSelect
              reset={reset}
              setReset={setReset}
              handleChange={getOptions}
              name="institute"
              displayName="Institute"
              options={collegeList}
            />
            <MultiSelect
              reset={reset}
              setReset={setReset}
              handleChange={getOptions}
              displayName="Program"
              name="program"
              options={streams}
            />
            <MultiSelect
              reset={reset}
              setReset={setReset}
              handleChange={getOptions}
              name="category"
              displayName="Category"
              options={categories}
              limit={1}
            />
            <MultiSelect
              reset={reset}
              setReset={setReset}
              handleChange={getOptions}
              name="quota"
              displayName="Quota"
              options={quotas}
            />
            <MultiSelect
              reset={reset}
              setReset={setReset}
              handleChange={getOptions}
              name="seat"
              displayName="Gender"
              options={genders}
              limit={1}
            />
            <MultiSelect
              reset={reset}
              setReset={setReset}
              handleChange={getOptions}
              name="courseDuration"
              displayName="course duration"
              options={courseDuration}
            />
          </fieldset>
          <div className="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </MainPageStyles>
  );
}
