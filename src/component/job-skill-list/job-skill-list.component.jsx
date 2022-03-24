import React from "react";

import JobSkillActive from "../job-skill-active/job-skill-active.component";
import JobSkillPassive from "../job-skill-passive/job-skill-passive.component";
import { jobSkillsActive, jobSkillsPassive } from "../../job-skills";

//CSS
import "./job-skill-list.css";

function JobSkillList({
  jobId,
  setSkillId,
  passiveSkillLevels,
  setPassiveSkillLevels,
}) {
  let activeSkillList = [],
    passiveSkillList = [];
  if (jobId) {
    activeSkillList = jobSkillsActive[jobId];
    passiveSkillList = jobSkillsPassive[jobId];
  }
  return (
    <>
      <h3>Passive Skills</h3>
      <section className="job-skill-list">
        {passiveSkillList.map((jobSkill) => {
          return (
            <JobSkillPassive
              key={jobSkill.id}
              passiveSkillLevels={passiveSkillLevels}
              setPassiveSkillLevels={setPassiveSkillLevels}
              {...jobSkill}
            />
          );
        })}
      </section>
      <h3>Active Skills</h3>
      <section className="job-skill-list">
        {activeSkillList.map((jobSkill) => {
          return (
            <JobSkillActive
              key={jobSkill.id}
              setSkillId={setSkillId}
              {...jobSkill}
            />
          );
        })}
      </section>
    </>
  );
}

export default JobSkillList;
