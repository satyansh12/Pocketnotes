import { createContext, useState } from "react";

const setContext = createContext({
  notes: [],
  setNotes: () => {},
  selected: "",
  setSelected: () => {},
});

const Provider = ({ children }) => {
  const [selected, setSelected] = useState(""); 
  const [notes, setNotes] = useState([]); 

  const valueToShare = {
    notes,
    setNotes,
    selected,
    setSelected,
  };

  return (
    <setContext.Provider value={valueToShare}>
      {children}
    </setContext.Provider>
  );
};

export { Provider };

export default setContext;
