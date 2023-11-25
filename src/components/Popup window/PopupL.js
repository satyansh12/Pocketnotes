import React, { useState } from "react";
import style from "./PopupL.module.css";

function PopupL({ groupNamesParent, setGroupNamesParent, onClose }) {
  const [groupName, setGroupName] = useState("");
  const [bgColor, setBgColor] = useState("");

  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };

  const handleColor = (e) => {
    const div = e.target;
    setBgColor(getComputedStyle(div).backgroundColor);
  };

  const saveName = () => {
    const newGroup = { name: groupName, color: bgColor };
    setGroupNamesParent([...groupNamesParent, newGroup]);
    localStorage.setItem(
      "groupNames",
      JSON.stringify([...groupNamesParent, newGroup])
    );
    onClose();
  };

  return (
    <div className={style.popup}>
      <div className={style.popup_title}>Create New Notes Group</div>
      <div className={style.popup_input}>
        <span>Group Name</span>
        <input
          value={groupName}
          onChange={handleGroupName}
          type="text"
          placeholder="Enter your group name...."
        />
      </div>
      <div className={style.popup_choose_color}>
        <span>Choose Color</span>
        <div className={style.popup_color}>
          <div
            className={style.popup_color_1}
            onClick={handleColor}
          ></div>
          <div
            className={style.popup_color_2}
            onClick={handleColor}
          ></div>
          <div
            className={style.popup_color_3}
            onClick={handleColor}
          ></div>
          <div
            className={style.popup_color_4}
            onClick={handleColor}
          ></div>
          <div
            className={style.popup_color_5}
            onClick={handleColor}
          ></div>
          <div
            className={style.popup_color_6}
            onClick={handleColor}
          ></div>
        </div>
      </div>
      <div className={style.popup_close}>
        <button onClick={saveName} disabled={groupName.length === 0}>
          Create
        </button>
      </div>
    </div>
  );
}

export default PopupL;
