import React from "react";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      <h5 style={{ fontFamily:"SF Mono  Fira Code Fira Mono Roboto Mono monospace", color:"#64ffda" ,textAlign: "justify",fontSize:"20px" }}className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      <p>
        <em>{props.date}</em>
      </p>
      <ul style={{color:"#8892b0",fontFamily:"Calibre San Francisco SF Pro Text",fontsize:"15px"}}>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeContent;
