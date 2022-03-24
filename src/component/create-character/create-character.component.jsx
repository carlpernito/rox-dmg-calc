import React from "react";

//CSS
import "./create-character.css";

let attributes = {};

function CreateCharacter({ attr = {} }) {
  attributes = attr;
  // let [jobId, setJobId] = useState("");
  // let [skillId, setSkillId] = useState("");
  // console.log("233 job id", jobId);
  // console.log("233 skill id", skillId);
  return (
    <section>
      <table className="character-stat">
        <thead>
          <tr>
            <td colSpan="6">
              <h5>Character Stats</h5>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>STR</td>
            <td>:</td>
            <td>
              <input
                type="number"
                onKeyUp={(event) => handleInputChange(event, "str")}
              />
            </td>
            <td>AGI</td>
            <td>:</td>
            <td>
              <input
                type="number"
                onKeyUp={(event) => handleInputChange(event, "agi")}
              />
            </td>
          </tr>
          <tr>
            <td>VIT</td>
            <td>:</td>
            <td>
              <input
                type="number"
                onKeyUp={(event) => handleInputChange(event, "vit")}
              />
            </td>
            <td>INT</td>
            <td>:</td>
            <td>
              <input
                type="number"
                onKeyUp={(event) => handleInputChange(event, "int")}
              />
            </td>
          </tr>
          <tr>
            <td>DEX</td>
            <td>:</td>
            <td>
              <input
                type="number"
                onKeyUp={(event) => handleInputChange(event, "dex")}
              />
            </td>
            <td>LUK</td>
            <td>:</td>
            <td>
              <input
                type="number"
                onKeyUp={(event) => handleInputChange(event, "luk")}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="6">&nbsp;</td>
          </tr>
          <tr>
            <td>PAtk</td>
            <td>:</td>
            <td>
              <input
                type="number"
                onKeyUp={(event) => handleInputChange(event, "patk")}
              />
            </td>
          </tr>
          <tr>
            <td>Final Pen (P/MPen) %</td>
            <td>:</td>
            <td>
              <input
                type="number"
                onKeyUp={(event) => handleInputChange(event, "finalPen")}
              />
            </td>
            <td>Final P/M Dmg Bonus %</td>
            <td>:</td>
            <td>
              <input
                type="number"
                onKeyUp={(event) => handleInputChange(event, "finalPMDmgBonus")}
              />
            </td>
          </tr>
          <tr>
            <td>Final Dmg Bonus %</td>
            <td>:</td>
            <td>
              <input
                type="number"
                onKeyUp={(event) => handleInputChange(event, "finalDmgBonus")}
              />
            </td>
            <td>P/M Dmg Bonus (Flat Stat)</td>
            <td>:</td>
            <td>
              <input
                type="number"
                onKeyUp={(event) => handleInputChange(event, "rawPMDmgBonus")}
              />
            </td>
          </tr>
          <tr>
            <td>Elemental Counter %</td>
            <td>:</td>
            <td>
              <input
                type="number"
                onKeyUp={(event) => handleInputChange(event, "elemCounter")}
              />
            </td>
            <td>Elemental Enhance %</td>
            <td>:</td>
            <td>
              <input
                type="number"
                onKeyUp={(event) => handleInputChange(event, "elemEnhance")}
              />
            </td>
          </tr>
          <tr>
            <td>Passive Skills %</td>
            <td>:</td>
            <td>
              <input
                type="number"
                onKeyUp={(event) => handleInputChange(event, "passiveSkill")}
              />
            </td>
            <td>Race Counter %</td>
            <td>:</td>
            <td>
              <input
                type="number"
                onKeyUp={(event) => handleInputChange(event, "raceCounter")}
              />
            </td>
          </tr>
          <tr>
            <td>Size Modifier %</td>
            <td>:</td>
            <td>
              <input
                type="number"
                onKeyUp={(event) => handleInputChange(event, "sizeModifier")}
              />
            </td>
            <td>Size Counter %</td>
            <td>:</td>
            <td>
              <input
                type="number"
                onKeyUp={(event) => handleInputChange(event, "sizeCounter")}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

const handleInputChange = (event, attr) => {
  attributes[attr] = parseFloat(event.target.value);
};
export default CreateCharacter;
