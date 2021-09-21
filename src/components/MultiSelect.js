import Multiselect from "multiselect-react-dropdown";
import React, { useRef, useState } from "react";
import styled from "styled-components";

const MultiSelectStyles = {
  multiselectContainer: {
    // To change css for multiselect (Width,height,etc..)
    display: "flex",
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
    backgroundColor: "#383E4D",
  },
  option: {
    // To change css for dropdown options
    color: "white",
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

export default function MultiSelect({ name, options, limit, handleChange }) {
  const [value, setValue] = useState([]);
  const multiSelectref = useRef();

  // add reset and selectall options
  if (limit !== 1 && options.length !== 1)
    options = [
      { name: "Reset", value: 0 },
      { name: "SelectAll", value: 1 },
      ...options,
    ];

  //change accorfding to the option
  function handleChangeUtil(name, selectedList, selectedItem) {
    if (selectedItem.name === "Reset") {
      setValue([]);
      selectedList = [];
    } else if (selectedItem.name === "SelectAll") {
      selectedList = options;
      setValue(options);
    }
    handleChange(name, selectedList);
  }

  return (
    <MultiSelectDivStyles>
      <p>{name}</p>
      <Multiselect
        name={name}
        options={options}
        closeOnSelect={false}
        style={MultiSelectStyles}
        displayValue="name"
        showCheckbox="true"
        avoidHighlightFirstOption="true"
        selectionLimit={limit}
        onSelect={(selectedList, selectedItem) =>
          handleChangeUtil(name, selectedList, selectedItem)
        }
        onRemove={(selectedList, selectedItem) =>
          handleChangeUtil(name, selectedList, selectedItem)
        }
        ref={multiSelectref}
        className="multi"
        selectedValues={value}
      />
    </MultiSelectDivStyles>
  );
}
