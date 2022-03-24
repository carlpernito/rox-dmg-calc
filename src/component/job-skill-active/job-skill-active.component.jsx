import React from "react";

//CSS
import "./job-skill-active.css";

function JobSkillActive({ id, name, setSkillId }) {
  return (
    <>
      <div className="job" onClick={() => setSkillId(id)}>
        <h5>{name}</h5>
      </div>
    </>
  );
}

export default JobSkillActive;
