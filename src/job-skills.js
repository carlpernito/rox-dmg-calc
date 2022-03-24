export const jobSkillsActive = {
  S1: [
    {
      id: "S11",
      name: "Double Strafe",
      code: "doubleStrafe",
      description:
        "Can only be used when equipped with a Bow. Fire 2 arrows simultaneously, dealing a total of (ATK + Point) physical damage of your weapon's attribute to an enemy. Can be used in conjunction with Elemental Arrows.",
      levels: [
        {
          id: 1,
          atkPercent: 105,
          dmg: 570,
        },
        {
          id: 2,
          atkPercent: 120,
          dmg: 740,
        },
        {
          id: 3,
          atkPercent: 135,
          dmg: 910,
        },
        {
          id: 4,
          atkPercent: 150,
          dmg: 1080,
        },
        {
          id: 5,
          atkPercent: 165,
          dmg: 1250,
        },
        {
          id: 6,
          atkPercent: 180,
          dmg: 1420,
        },
        {
          id: 7,
          atkPercent: 195,
          dmg: 1590,
        },
        {
          id: 8,
          atkPercent: 210,
          dmg: 1760,
        },
        {
          id: 9,
          atkPercent: 225,
          dmg: 1930,
        },
        {
          id: 10,
          atkPercent: 240,
          dmg: 2100,
        },
      ],
      requiredSkills: [],
      params: ["atkPercent", "dmg"],
      multiPhase: 2,
      triggerTimes: 1,
    },
    {
      id: "S12",
      name: "Arrow Shower",
      code: "arrowShower",
      description:
        "Can only be used when equipped with a Bow. Fire 4 waves of arrows at the specified location, with each wave dealing (ATK + Point) physical damage of your weapon's attribute to an enemy. Can be used in conjunction with Elemental Arrows.",
      levels: [
        {
          id: 1,
          atkPercent: 27,
          dmg: 30,
        },
        {
          id: 2,
          atkPercent: 34,
          dmg: 40,
        },
        {
          id: 3,
          atkPercent: 41,
          dmg: 50,
        },
        {
          id: 4,
          atkPercent: 48,
          dmg: 60,
        },
        {
          id: 5,
          atkPercent: 55,
          dmg: 70,
        },
        {
          id: 6,
          atkPercent: 62,
          dmg: 80,
        },
        {
          id: 7,
          atkPercent: 69,
          dmg: 90,
        },
        {
          id: 8,
          atkPercent: 76,
          dmg: 100,
        },
        {
          id: 9,
          atkPercent: 83,
          dmg: 110,
        },
        {
          id: 10,
          atkPercent: 90,
          dmg: 120,
        },
      ],
      requiredSkills: [],
      params: ["atkPercent", "dmg"],
      multiPhase: 1,
      triggerTimes: 4,
    },
    {
      id: "S13",
      name: "Charge Arrow",
      code: "chargeArrow",
      description:
        "Deals (ATK + Point) physical damage of your weapon's attribute to an enemy target and Stun second(s). Can be used in conjunction with Elemental Arrow.",
      levels: [
        {
          id: 1,
          atkPercent: 100,
          dmg: 200,
        },
        {
          id: 2,
          atkPercent: 120,
          dmg: 300,
        },
        {
          id: 3,
          atkPercent: 140,
          dmg: 400,
        },
        {
          id: 4,
          atkPercent: 160,
          dmg: 500,
        },
        {
          id: 5,
          atkPercent: 180,
          dmg: 600,
        },
        {
          id: 6,
          atkPercent: 200,
          dmg: 700,
        },
        {
          id: 7,
          atkPercent: 220,
          dmg: 800,
        },
        {
          id: 8,
          atkPercent: 240,
          dmg: 900,
        },
        {
          id: 9,
          atkPercent: 260,
          dmg: 1000,
        },
        {
          id: 10,
          atkPercent: 280,
          dmg: 1100,
        },
      ],
      requiredSkills: [],
      params: ["atkPercent", "dmg"],
      multiPhase: 1,
      triggerTimes: 1,
    },
    {
      id: "S14",
      name: "Focused Shot",
      code: "focusedShot",
      description:
        "Takes aim and fires an arrow, dealing (ATK + Point) physical damage of your weapon's attribute to an enemy and marks the target for 5 seconds. You deal more Physical Damage to the marked targets. Can be used in conjunction with Elemental Arrow.",
      levels: [
        {
          id: 1,
          atkPercent: 235,
          dmg: 400,
        },
        {
          id: 2,
          atkPercent: 270,
          dmg: 500,
        },
        {
          id: 3,
          atkPercent: 305,
          dmg: 600,
        },
        {
          id: 4,
          atkPercent: 340,
          dmg: 700,
        },
        {
          id: 5,
          atkPercent: 375,
          dmg: 800,
        },
        {
          id: 6,
          atkPercent: 410,
          dmg: 900,
        },
        {
          id: 7,
          atkPercent: 445,
          dmg: 1000,
        },
        {
          id: 8,
          atkPercent: 480,
          dmg: 1100,
        },
        {
          id: 9,
          atkPercent: 515,
          dmg: 1200,
        },
        {
          id: 10,
          atkPercent: 550,
          dmg: 1300,
        },
      ],
      requiredSkills: [],
      params: ["atkPercent", "dmg"],
      multiPhase: 1,
      triggerTimes: 1,
    },
    {
      id: "S15",
      name: "Blitz Beat",
      code: "blitzBeat",
      description:
        "Can only be used if you own a falcon. Commands your falcon to attack an enemy unit, dealing ((Steel Crow damage + (INT/8)^1.8 + DEX x 2) x Point + Damage) sacred physical damage that ignores DEF, and increases your ASPD for 12 seconds. Can stack up to 5 times.",
      levels: [
        {
          id: 1,
          point: 6.6,
          dmg: 1320,
        },
        {
          id: 2,
          point: 7.2,
          dmg: 1440,
        },
        {
          id: 3,
          point: 7.8,
          dmg: 1560,
        },
        {
          id: 4,
          point: 8.4,
          dmg: 1680,
        },
        {
          id: 5,
          point: 9,
          dmg: 1800,
        },
        {
          id: 6,
          point: 9.6,
          dmg: 1920,
        },
        {
          id: 7,
          point: 10.2,
          dmg: 2040,
        },
        {
          id: 8,
          point: 10.8,
          dmg: 2160,
        },
        {
          id: 9,
          point: 11.4,
          dmg: 2280,
        },
        {
          id: 10,
          point: 12,
          dmg: 2400,
        },
      ],
      requiredSkills: ["S1P1"],
      params: ["point", "dmg"],
      multiPhase: 2,
      triggerTimes: 1,
    },
    {
      id: "S16",
      name: "Falcon Assault",
      code: "falconAssault",
      description:
        "Sends your falcon to attack an enemy, dealing ((Steel Crow damage + (INT/8)^1.8 + DEX x 2) x ATK + POINT) sacred physical damage that ignores DEF.",
      levels: [
        {
          id: 1,
          point: 13.2,
          dmg: 3960,
        },
        {
          id: 2,
          point: 14.4,
          dmg: 4320,
        },
        {
          id: 3,
          point: 15.6,
          dmg: 4680,
        },
        {
          id: 4,
          point: 16.8,
          dmg: 5040,
        },
        {
          id: 5,
          point: 18,
          dmg: 5400,
        },
        {
          id: 6,
          point: 19.2,
          dmg: 5760,
        },
        {
          id: 7,
          point: 20.4,
          dmg: 6120,
        },
        {
          id: 8,
          point: 21.6,
          dmg: 6480,
        },
        {
          id: 9,
          point: 22.8,
          dmg: 6840,
        },
        {
          id: 10,
          point: 24,
          dmg: 7200,
        },
      ],
      requiredSkills: [],
      params: ["point", "dmg"],
      multiPhase: 1,
      triggerTimes: 1,
    },
  ],
  S2: [
    {
      id: "S21",
      name: "Spear Stab",
      description: "",
      requiredSkills: [],
    },
    {
      id: "S22",
      name: "Spear Boomerang",
      description: "",
      requiredSkills: [],
    },
  ],
  S3: [
    {
      id: "S3",
      name: "",
      requiredSkills: [],
    },
  ],
  S4: [
    {
      id: "S4",
      name: "",
      requiredSkills: [],
    },
  ],
  S5: [
    {
      id: "S51",
      name: "Hammer Fall",
      code: "hammerFall",
      description:
        "Slams the ground, Dealing (Attack % + Point) Neutral physical damage to enemy unit within 4 M, and Chance to stun enemy for 2 sec , can stun up 8 target.",
      levels: [
        {
          id: 1,
          atkPercent: 75,
          dmg: 240,
        },
        {
          id: 2,
          atkPercent: 100,
          dmg: 320,
        },
        {
          id: 3,
          atkPercent: 125,
          dmg: 400,
        },
        {
          id: 4,
          atkPercent: 150,
          dmg: 480,
        },
        {
          id: 5,
          atkPercent: 175,
          dmg: 560,
        },
        {
          id: 6,
          atkPercent: 200,
          dmg: 640,
        },
        {
          id: 7,
          atkPercent: 225,
          dmg: 720,
        },
        {
          id: 8,
          atkPercent: 250,
          dmg: 800,
        },
        {
          id: 9,
          atkPercent: 275,
          dmg: 880,
        },
        {
          id: 10,
          atkPercent: 300,
          dmg: 960,
        },
      ],
      requiredSkills: [],
      params: ["atkPercent", "dmg"],
      multiPhase: 1,
      triggerTimes: 1,
    },
    {
      id: "S52",
      name: "Savage Slash",
      code: "savageSlash",
      description:
        "Pins down the enemy for 1 sec and slashes it 5 times, dealing a total of (Point(increase by addictional 5% for every 50 AGI you have) x Attack) Physical damage from your weapon attribute .",
      levels: [
        {
          id: 1,
          atkPercent: 190,
        },
        {
          id: 2,
          atkPercent: 220,
        },
        {
          id: 3,
          atkPercent: 250,
        },
        {
          id: 4,
          atkPercent: 280,
        },
        {
          id: 5,
          atkPercent: 310,
        },
        {
          id: 6,
          atkPercent: 340,
        },
        {
          id: 7,
          atkPercent: 370,
        },
        {
          id: 8,
          atkPercent: 400,
        },
        {
          id: 9,
          atkPercent: 430,
        },
        {
          id: 10,
          atkPercent: 460,
        },
      ],
      requiredSkills: [],
      params: ["atkPercent"],
      multiPhase: 5,
      triggerTimes: 1,
    },
    {
      id: "S53",
      name: "Meltdown",
      code: "meltdown",
      description:
        "Deals (Point of ATK ) physical damage of your weapon's attribute to an enemy and has a Chance (increases by an additional 1% for every 30 LUK you have) to break the enemy's armor. Enemy units with broken armor have their DEF Decreased for 6 seconds.",
      levels: [
        {
          id: 1,
          atkPercent: 300,
        },
        {
          id: 2,
          atkPercent: 350,
        },
        {
          id: 3,
          atkPercent: 400,
        },
        {
          id: 4,
          atkPercent: 450,
        },
        {
          id: 5,
          atkPercent: 500,
        },
        {
          id: 6,
          atkPercent: 550,
        },
        {
          id: 7,
          atkPercent: 600,
        },
        {
          id: 8,
          atkPercent: 650,
        },
        {
          id: 9,
          atkPercent: 700,
        },
        {
          id: 10,
          atkPercent: 750,
        },
      ],
      requiredSkills: [],
      params: ["atkPercent"],
      multiPhase: 1,
      triggerTimes: 1,
    },
    {
      id: "S54",
      name: "Zeny Hurl",
      code: "zenyHurl",
      description:
        "Throws Zeny for a ranged attack, dealing (Point ATK) Neutral physical damage to the enemy. This skill has Chance to Crit.",
      levels: [
        {
          id: 1,
          atkPercent: 300,
        },
        {
          id: 2,
          atkPercent: 350,
        },
        {
          id: 3,
          atkPercent: 400,
        },
        {
          id: 4,
          atkPercent: 450,
        },
        {
          id: 5,
          atkPercent: 500,
        },
        {
          id: 6,
          atkPercent: 550,
        },
        {
          id: 7,
          atkPercent: 600,
        },
        {
          id: 8,
          atkPercent: 650,
        },
        {
          id: 9,
          atkPercent: 700,
        },
        {
          id: 10,
          atkPercent: 750,
        },
      ],
      requiredSkills: [],
      params: ["atkPercent"],
      multiPhase: 1,
      triggerTimes: 1,
    },
    {
      id: "S55",
      name: "Zeny Storm",
      code: "zenyStorm",
      description:
        "Expends Zeny and blasts enemy units in a specified circular area with Zeny 6 times. Each blast deals (Point ATK + 400 (increases by an additional 100 for every 50 STR you have)) Neutral physical damage and slows the enemy by 50% for 3 seconds.",
      levels: [
        {
          id: 1,
          atkPercent: 101,
        },
        {
          id: 2,
          atkPercent: 107,
        },
        {
          id: 3,
          atkPercent: 113,
        },
        {
          id: 4,
          atkPercent: 119,
        },
        {
          id: 5,
          atkPercent: 125,
        },
        {
          id: 6,
          atkPercent: 131,
        },
        {
          id: 7,
          atkPercent: 137,
        },
        {
          id: 8,
          atkPercent: 143,
        },
        {
          id: 9,
          atkPercent: 149,
        },
        {
          id: 10,
          atkPercent: 155,
        },
      ],
      requiredSkills: [],
      params: ["atkPercent"],
      multiPhase: 1,
      triggerTimes: 5,
    },
  ],
  S6: [
    {
      id: "S6",
      name: "",
      requiredSkills: [],
    },
  ],
};

export const jobSkillsPassive = {
  S1: [
    {
      id: "S1P1",
      name: "Steel Crow",
      attributes: ["atk", "percent"],
      levels: [
        {
          id: 1,
          atk: 8,
          percent: 20,
        },
        {
          id: 2,
          atk: 16,
          percent: 40,
        },
        {
          id: 3,
          atk: 24,
          percent: 60,
        },
        {
          id: 4,
          atk: 32,
          percent: 80,
        },
        {
          id: 5,
          atk: 40,
          percent: 100,
        },
        {
          id: 6,
          atk: 48,
          percent: 120,
        },
        {
          id: 7,
          atk: 56,
          percent: 140,
        },
        {
          id: 8,
          atk: 64,
          percent: 160,
        },
        {
          id: 9,
          atk: 72,
          percent: 180,
        },
        {
          id: 10,
          atk: 80,
          percent: 200,
        },
      ],
    },
  ],
  S2: [],
  S3: [],
  S4: [],
  S5: [],
  S6: [],
};
