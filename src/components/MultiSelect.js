import Multiselect from "multiselect-react-dropdown";
import React, { useRef } from "react";

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

export default function MultiSelect({ name, options, handleChange }) {
  const multiSelectref = useRef();
  return (
    <div>
      <Multiselect
        name={name}
        options={options}
        closeOnSelect={false}
        style={MultiSelectStyles}
        displayValue="name"
        showCheckbox="true"
        voidHighlightFirstOption="true"
        onSelect={(selectedList) => handleChange(name, selectedList)}
        onRemove={(selectedList) => handleChange(name, selectedList)}
        ref={multiSelectref}
        id={name}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          handleChange(name, []);
          multiSelectref.current.resetSelectedValues();
        }}
      >
        Reset
      </button>
    </div>
  );
}
