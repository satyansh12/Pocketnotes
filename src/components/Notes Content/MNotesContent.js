import React from "react";
import style from  "./MNotesContent.module.css";

function MNotesContent({ note }) {
  return (
    <div className={style.m_notes_content_body}>
      <div className={style.m_notes_content_date_time_details}>
        <div className={style.m_notes_content_time}>{note.time}</div>
        <div className={style.m_notes_content_date}>{note.date}</div>
      </div>
      <div className={style.m_notes_content_details}>
        {note.content.split("\n").map((line,index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default MNotesContent;
