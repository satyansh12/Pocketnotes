import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import LHome from "../components/Home/LHome";
import LNotes from '../components/Notes/LNotes'
import UseContext from "../useContext";

function Laptop() {
  const { selected } = UseContext();

  return (
    <div style={{width: '100vw',height: "100vh",display: 'flex'}}>
      <Sidebar />
      {selected.length > 0 ? <LNotes /> : <LHome />}
    </div>
  );
}

export default Laptop;
