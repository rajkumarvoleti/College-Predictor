import Multiselect from "multiselect-react-dropdown";
import react from "react";
import React, { useState } from "react";
import styled from "styled-components";

const MultiSelectStyles = {
  multiselectContainer: {
    // To change css for multiselect (Width,height,etc..)
    color: "white",
  },
  searchBox: {
    // To change search box element look
    border: "2px solid #1C1F22",
    fontSize: "10px",
  },
  inputField: {
    // To change input field position or margin
    color: "white",
    margin: "5px",
  },
  chips: {
    // To change css chips(Selected options)
    display: "none",
  },
  optionContainer: {
    // To change css for option container
    border: "2px solid #1C1F22",
    backgroundColor: "#2C3E50",
  },
  option: {
    // To change css for dropdown options
    color: "white",
    fontFamily: "Hind, sans-serif",
    fontSize: "14px",
  },
  "option::hover": {
    display: "none",
  },
  // groupHeading: { // To chanage group heading style
  // ....
  // }
};

const MultiSelectDivStyles = styled.div`
  display: flex;
  align-items: center;
  p {
    text-transform: capitalize;
    margin-right: 20px;
    width: 100px;
  }
  button {
    margin-left: 20px;
    border: 1px solid var(--blue);
    border-radius: 10px;
    height: 30px;
  }
  @media (max-width: 500px) {
    width: 80vw;
  }
`;

export default function MultiSelect({
  name,
  options: Options,
  limit,
  handleChange,
  reset,
  setReset,
  displayName,
}) {
  const multiSelectref = react.createRef();
  let options = [];
  Options.forEach((option) => {
    options.push({ name: option });
  });

  const [value, setValue] = useState([]);
  const [className, setClassName] = useState("");
  const [dataLength, setDataLength] = useState(0);

  if (limit !== 1 && options.length > 1)
    // add reset and selectall options
    options = [
      { name: "Reset", value: 0 },
      { name: "SelectAll", value: 1 },
      ...options,
    ];

  //change accorfding to the option
  function handleChangeUtil(name, selectedList, selectedItem) {
    if (selectedList.length === 0) setClassName("failure");
    else setClassName("success");

    if (selectedItem.name === "Reset") {
      setValue([]);
      selectedList = [];
    } else if (selectedItem.name === "SelectAll") {
      selectedList = options;
      setValue(options);
    }
    setDataLength(selectedList.length);
    handleChange(name, selectedList);
  }

  //  if reset is clicked int he main page
  if (reset && value.length !== 0) {
    setReset(false);
  }

  const getPlaceHolder = () => {
    if (dataLength === 0) return "Select an option";
    else if (dataLength === 1) return "1 option selected";
    else return `${dataLength} options selected`;
  };

  return (
    <MultiSelectDivStyles>
      <p>{displayName}</p>
      <div className={"multi " + className}>
        <Multiselect
          name={name}
          options={options}
          closeOnSelect={false}
          style={MultiSelectStyles}
          displayValue="name"
          showCheckbox="true"
          avoidHighlightFirstOption="true"
          keepSearchTerm="true"
          selectionLimit={limit}
          onSelect={(selectedList, selectedItem) =>
            handleChangeUtil(name, selectedList, selectedItem)
          }
          onRemove={(selectedList, selectedItem) =>
            handleChangeUtil(name, selectedList, selectedItem)
          }
          ref={multiSelectref}
          selectedValues={value}
          placeholder={getPlaceHolder()}
        />
      </div>
    </MultiSelectDivStyles>
  );
}
