import React, { useState } from "react";

import { jobSkillsActive } from "../../job-skills";
import { calcPveDmg } from "../../formula/skill-dmg-formula";
import {
  calcSkillDmg as calcArcherSkillDmg,
  generateSkillParams,
} from "../../formula/archer-skill-dmg-formula";
// import RequiredJobSkillPassive from "../required-job-skill-passive/required-job-skill-passive.component";

//CSS
import "./skill-dmg-calc.css";

let skill, skillLevel, attributes;

function SkillDmgCalc({ jobId, skillId, attr, passiveSkillLevels }) {
  let [skillDmgValue, setSkillDmgValue] = useState(0);
  let [skillLevel, setSkillLevel] = useState({});
  attributes = attr;
  let skills = jobId ? jobSkillsActive[jobId] : [];
  skill =
    skills.length > 0 ? skills.find((element) => element.id === skillId) : {};
  skill = skill !== undefined ? skill : {};

  // passiveSkills = [];
  // if (jobId && skill && skill.requiredSkills?.length > 0) {
  //   passiveSkills = skill.requiredSkills.map((requiredSkill) => {
  //     return jobSkillsPassive[jobId].find(
  //       (element) => element.id === requiredSkill
  //     );
  //   });
  // }

  return (
    <div>
      <h3>Skill Damage</h3>
      <section className="skill-dmg">
        <h5>{skill.name}</h5>
        <table>
          <tbody>
            <tr>
              <td>Level</td>
              <td>:</td>
              <td>
                <select
                  onChange={(event) => {
                    setSkillLevel(
                      skill?.levels?.find(
                        (element) => String(element.id) === event.target.value
                      )
                    );
                  }}
                >
                  {skill?.levels?.map((level) => {
                    return (
                      <option key={level.id} value={level.id}>
                        {level.id}
                      </option>
                    );
                  })}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <p>{skill.description}</p>
        <br />
        <br />
        <button
          onClick={() =>
            calcDamageHandler(passiveSkillLevels, skillLevel, setSkillDmgValue)
          }
        >
          Calculate Damage
        </button>
        <br />
        <br />
        <label htmlFor="">Skill Damage:</label>
        {skillDmgValue}
      </section>
    </div>
  );
}

const calcDamageHandler = (
  passiveSkillLevels,
  skillLevel,
  setSkillDmgValue
) => {
  // console.log("skill", skill);
  // console.log("skill level", skillLevel);
  // console.log("passive skill levels", passiveSkillLevels);
  // let skillLevel = skill?.levels?.length > 0 ? skill.levels[0] : {};

  let skillParams = generateSkillParams(skillLevel, skill);
  console.log("skill params", skillParams);
  // console.log("skill level", skillLevel);
  console.log("skill", skill);
  // console.log("attributes", attributes);
  console.log("passive skills", passiveSkillLevels);

  let skillDmg = calcArcherSkillDmg(
    skill.code,
    skillParams,
    attributes,
    passiveSkillLevels
  );
  console.log("skill dmg", skillDmg);
  // let pveSkillDmg = 0;
  let pveSkillDmg = calcPveDmg({
    skillCode: skill.code,
    skillDmg: skillDmg,
    totalPen: attributes.finalPen,
    targetDef: 0,
    finalPMDmgBonus: attributes.finalPMDmgBonus,
    pMDmgBonusReduc: 0,
    elementalCounter: attributes.elemCounter,
    elementEnhance: attributes.elemEnhance,
    passiveSkill: attributes.passiveSkill,
    raceCounter: attributes.raceCounter,
    sizeModifier: attributes.sizeModifier,
    sizeCounter: attributes.sizeCounter,
    finalDmgBonus: attributes.finalDmgBonus,
    pMDmgBonus: attributes.rawPMDmgBonus,
    skillMultiphase: skill.multiPhase,
    skillTriggerTimes: skill.triggerTimes,
  });
  setSkillDmgValue(pveSkillDmg);
};

export default SkillDmgCalc;
