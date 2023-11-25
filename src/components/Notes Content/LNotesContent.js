import React from "react";
import style from "./LNotesContent.module.css";

function LNotesContent({ note }) {
  
  return (
    <div className={style.notes_content_note}>
      <div className={style.notes_content_date_time_details}>
      <div className={style.notes_content_time}>{note.time}</div>
        <div className={style.notes_content_date}>{note.date}</div>
      </div>
      <div className={style.notes_content_details}>
        {note.content}
      </div>
    </div>
  );
}

export default LNotesContent;
