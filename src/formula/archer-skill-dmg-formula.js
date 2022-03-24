export const generateSkillParams = (skillLevel, skill) => {
  let skillParams = {};
  skill.params.forEach((param) => {
    skillParams[param] = skillLevel[param];
  });

  return skillParams;
};

export const calcSkillDmg = (
  skillCode,
  params,
  attributes,
  passiveSkillLevels,
  shadowSkills = {}
) => {
  let skillDmg = 0;
  switch (skillCode) {
    case "blitzBeat":
      skillDmg = calcBlitzBeat(params, attributes, passiveSkillLevels);
      break;
    case "falconAssault":
      skillDmg = calcBlitzBeat(params, attributes, passiveSkillLevels);
      break;
    default:
      skillDmg = calcNormalSkill(params, attributes);
      break;
  }
  // return Math.ceil(skillDmg);
  return skillDmg;
};

const calcNormalSkill = (params, attributes) => {
  params.dmg = params.dmg === undefined ? 0 : params.dmg;
  return (attributes.patk * params.atkPercent) / 100 + params.dmg;
};

const calcBlitzBeat = (params, attributes, passiveSkillLevels) => {
  let steelCrowDmg = calcSteelCrow(passiveSkillLevels["S1P1"], attributes);
  console.log("steel crow dmg", steelCrowDmg);
  return (
    (steelCrowDmg + Math.pow(attributes.int / 8, 1.8) + attributes.dex * 2) *
      params.point +
    params.dmg
  );
};

const calcSteelCrow = (params, attributes) => {
  return params.atk + (params.percent / 100) * attributes.int;
};
