export const calcPveDmg = ({
  skillCode,
  skillDmg,
  totalPen = 0,
  targetDef = 0,
  ignoreDef = 0,
  finalPMDmgBonus = 0,
  pMDmgBonusReduc = 0,
  elementalCounter = 100,
  elementEnhance = 0,
  passiveSkill = 0,
  raceCounter = 0,
  sizeModifier = 100,
  sizeCounter = 0,
  finalDmgBonus = 0,
  finalDmgBonusReduc = 0,
  pMDmgBonus = 0,
  skillMultiphase = 1,
  skillTriggerTimes = 1,
}) => {
  skillDmg *= calcPen(totalPen, targetDef, ignoreDef);
  skillDmg *= calcFinalDmgBonus(finalPMDmgBonus, pMDmgBonusReduc);
  skillDmg *= calcElement(elementalCounter, elementEnhance);
  skillDmg *= calcPassiveSkill(passiveSkill);
  skillDmg *= calcRaceCounter(raceCounter);
  skillDmg *= calcSizeDmg(sizeModifier, sizeCounter);
  skillDmg *= calcFinalDmgBonus(finalDmgBonus, finalDmgBonusReduc);
  skillDmg += pMDmgBonus * skillMultiphase;
  skillDmg *= skillTriggerTimes;

  console.log("pve dmg formula", skillDmg);
  return skillDmg;
};

const calcPen = (totalPen, def, ignoreDef = 0) => {
  if (ignoreDef) def = 0;
  let pen = totalPen - def;
  if (pen > 150) pen = (totalPen - def) * 2 - 150;
  return 1 + pen / 100;
};

const calcFinalDmgBonus = (finalDmgBonus, finalDmgBonusReduc) => {
  return 1 + (finalDmgBonus - finalDmgBonusReduc) / 100;
};

const calcElement = (elementalCounter, elementEnhance) => {
  return (elementalCounter + elementEnhance) / 100;
};

const calcPassiveSkill = (passiveSkill) => {
  return 1 + passiveSkill / 100;
};

const calcRaceCounter = (raceCounter) => {
  return 1 + raceCounter / 100;
};

const calcSizeDmg = (sizeModifier, sizeCounter) => {
  return (sizeModifier + sizeCounter) / 100;
};
