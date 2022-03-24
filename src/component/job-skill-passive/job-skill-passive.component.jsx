import React, { useState } from "react";

//CSS
import "./job-skill-passive.css";

function JobSkillPassive({
  id,
  name,
  attributes,
  levels,
  passiveSkillLevels,
  setPassiveSkillLevels,
}) {
  let [jobLevel, setJobLevel] = useState(levels[0]);
  return (
    <>
      <div className="job-skill-passive">
        <h5>{name}</h5>
        <table>
          <tbody>
            <tr>
              <td>Level</td>
              <td>:</td>
              <td>
                <select
                  onChange={(event) => {
                    setJobLevel(
                      levels.find(
                        (element) => String(element.id) === event.target.value
                      )
                    );

                    passiveSkillLevels[id] = jobLevel;
                    setPassiveSkillLevels(passiveSkillLevels);
                  }}
                >
                  {levels.map((level) => {
                    return (
                      <option key={level.id} value={level.id}>
                        {level.id}
                      </option>
                    );
                  })}
                </select>
              </td>
            </tr>
            {attributes.map((attribute, index) => {
              return (
                <tr key={index}>
                  <td>{attribute.toUpperCase()}</td>
                  <td>:</td>
                  <td>{jobLevel[attribute]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default JobSkillPassive;
