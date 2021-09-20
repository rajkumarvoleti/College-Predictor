import styled from "styled-components";
import useForm from "../lib/useForm";
import { IITcollegeList, stream } from "../lib/data";
import MultiSelect from "./MultiSelect";

const MainPageStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form fieldset {
    border: none;
    label {
      margin: 20px;
      border: none;
      input {
        margin: 10px;
        border: none;
      }
      input:focus {
        margin: 10px;
        border: none;
      }
    }
  }
`;

export default function MainPage() {
  const { inputs, handleChange, getOptions, clearForm, resetForm } = useForm({
    name: "Nice Shoes",
    college: [],
    branch: [],
  });
  return (
    <MainPageStyles>
      <h1>College Predictor</h1>
      <div>
        <form action="POST">
          <fieldset>
            <label htmlFor="Name">
              Name
              <input
                type="text"
                name="name"
                id="name"
                onSelect={handleChange}
              />
            </label>
            <MultiSelect
              name="college"
              handleChange={getOptions}
              options={IITcollegeList}
            />
            <MultiSelect
              name="branch"
              handleChange={getOptions}
              options={stream}
            />
          </fieldset>
        </form>
      </div>
    </MainPageStyles>
  );
}
