import React from "react";

//CSS
import "./required-job-skill-passive.css";

function RequiredJobSkillPassive({ name, levels, attributes }) {
  let level = 1;
  let skillInfo = levels[level];
  return (
    <section className="required-job-skill-passive">
      <h5>{name}</h5>
      <table>
        <tbody>
          <tr>
            <td>Level</td>
            <td>:</td>
            <td>{level}</td>
          </tr>
          {attributes.map((attribute, index) => {
            return (
              <tr key={index}>
                <td>{attribute.toUpperCase()}</td>
                <td>:</td>
                <td>{skillInfo[attribute]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default RequiredJobSkillPassive;
