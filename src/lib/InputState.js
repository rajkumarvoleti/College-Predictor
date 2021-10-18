import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function InputStateProvider({ children }) {
  const [inputs, setInputs] = useState({});

  function updateInputs(new_inputs) {
    setInputs(new_inputs);
  }

  function getInputs() {
    return inputs;
  }

  return (
    <LocalStateProvider value={{ updateInputs, getInputs }}>
      {children}
    </LocalStateProvider>
  );
}

function useInputs() {
  const all = useContext(LocalStateContext);
  return all;
}

export { InputStateProvider, useInputs };
