import React, { useState } from "react";

import DmgCalcList from "../dmg-calc-list/dmg-calc-list.component";
import CreateCharacter from "../create-character/create-character.component";
import JobList from "../job-list/job-list.component";
import JobSkillList from "../job-skill-list/job-skill-list.component";
import SkillDmgCalc from "../skill-dmg-calc/skill-dmg-calc.component";

//CSS
import "./homepage.css";

let attributes = {};

function Homepage() {
  let [jobId, setJobId] = useState("");
  let [skillId, setSkillId] = useState("");
  let [passiveSkillLevels, setPassiveSkillLevels] = useState({});
  return (
    <section className="homepage">
      <h1>Damage Calcualtor</h1>
      <CreateCharacter attr={attributes} />
      <JobList setJobId={setJobId} setSkillId={setSkillId} />
      <JobSkillList
        jobId={jobId}
        setSkillId={setSkillId}
        passiveSkillLevels={passiveSkillLevels}
        setPassiveSkillLevels={setPassiveSkillLevels}
      />
      <SkillDmgCalc
        jobId={jobId}
        skillId={skillId}
        attr={attributes}
        passiveSkillLevels={passiveSkillLevels}
      />
    </section>
  );
}

export default Homepage;
