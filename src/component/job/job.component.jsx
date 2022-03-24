import React from "react";

// CSS
import "./job.css";

function Job({ id, img, name, setJobId, setSkillId }) {
  return (
    <div className="job" onClick={() => clickHandler(id, setJobId, setSkillId)}>
      <img src={img} alt="" />
      <h5>{name}</h5>
    </div>
  );
}

const clickHandler = (id, setJobId, setSkillId) => {
  setJobId(id);
  setSkillId("");
};

export default Job;
