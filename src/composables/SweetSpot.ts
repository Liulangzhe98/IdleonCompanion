export type Monster = {
  name: string;
  attack: number;
  health: number;
  exp: number;
  accLow: number;
  accHigh: number;
  respawnRate: number;
  numMobs: number;
  weight: number; // Magic number for various calculations
};

export const Monsters: Monster[] = [
  {
    name: "Green Mushroom",
    attack: 1,
    health: 10,
    exp: 2,
    accLow: 1,
    accHigh: 2,
    respawnRate: 35,
    numMobs: 14,
    weight: 7,
  },
  {
    name: "Frog",
    attack: 5,
    health: 50,
    exp: 7,
    accLow: 1,
    accHigh: 3,
    respawnRate: 40,
    numMobs: 34,
    weight: 7,
  },
  {
    name: "Bored Bean",
    attack: 11,
    health: 150,
    exp: 15,
    accLow: 2,
    accHigh: 6,
    respawnRate: 50,
    numMobs: 21,
    weight: 16.5,
  },
  {
    name: "Slime",
    attack: 15,
    health: 250,
    exp: 23,
    accLow: 5,
    accHigh: 14,
    respawnRate: 42,
    numMobs: 25,
    weight: 16.5,
  },
  {
    name: "Baby Boa",
    attack: 18,
    health: 450,
    exp: 34,
    accLow: 9,
    accHigh: 27,
    respawnRate: 45,
    numMobs: 17,
    weight: 10.9,
  },
  {
    name: "Carrotman",
    attack: 22,
    health: 800,
    exp: 45,
    accLow: 15,
    accHigh: 45,
    respawnRate: 50,
    numMobs: 15,
    weight: 7.75,
  },
  {
    name: "Red Mushroom",
    attack: 30,
    health: 1000,
    exp: 47,
    accLow: 13,
    accHigh: 38,
    respawnRate: 45,
    numMobs: 10,
    weight: 5.25,
  },
  {
    name: "Glublin",
    attack: 30,
    health: 1250,
    exp: 60,
    accLow: 26,
    accHigh: 78,
    respawnRate: 52,
    numMobs: 21,
    weight: 13.25,
  },
  {
    name: "Wode Board",
    attack: 35,
    health: 1800,
    exp: 75,
    accLow: 35,
    accHigh: 105,
    respawnRate: 45,
    numMobs: 17,
    weight: 10.1,
  },
  {
    name: "Gigafrog",
    attack: 45,
    health: 2500,
    exp: 95,
    accLow: 55,
    accHigh: 165,
    respawnRate: 55,
    numMobs: 15,
    weight: 8.5,
  },
  {
    name: "Walking Stick",
    attack: 20,
    health: 1500,
    exp: 120,
    accLow: 75,
    accHigh: 225,
    respawnRate: 60,
    numMobs: 25,
    weight: 20.3,
  },
  {
    name: "Nutto",
    attack: 40,
    health: 4000,
    exp: 190,
    accLow: 100,
    accHigh: 300,
    respawnRate: 60,
    numMobs: 24,
    weight: 17,
  },
  {
    name: "Wood Mushroom",
    attack: 75,
    health: 10000,
    exp: 300,
    accLow: 250,
    accHigh: 750,
    respawnRate: 50,
    numMobs: 7,
    weight: 5,
  },
  {
    name: "Poop",
    attack: 150,
    health: 9000,
    exp: 220,
    accLow: 50,
    accHigh: 150,
    respawnRate: 60,
    numMobs: 27,
    weight: 18.4,
  },
  {
    name: "Rat",
    attack: 220,
    health: 20000,
    exp: 330,
    accLow: 90,
    accHigh: 270,
    respawnRate: 60,
    numMobs: 25,
    weight: 17,
  },
  {
    name: "Sandy Pot",
    attack: 55,
    health: 4000,
    exp: 150,
    accLow: 58,
    accHigh: 173,
    respawnRate: 50,
    numMobs: 16,
    weight: 9.4,
  },
  {
    name: "Mimic",
    attack: 62,
    health: 5500,
    exp: 180,
    accLow: 66,
    accHigh: 198,
    respawnRate: 50,
    numMobs: 21,
    weight: 14.3,
  },
  {
    name: "Crabcake",
    attack: 70,
    health: 7500,
    exp: 210,
    accLow: 75,
    accHigh: 225,
    respawnRate: 40,
    numMobs: 17,
    weight: 11.2,
  },
  {
    name: "Mafioso",
    attack: 90,
    health: 11000,
    exp: 240,
    accLow: 90,
    accHigh: 270,
    respawnRate: 40,
    numMobs: 15,
    weight: 9,
  },
  {
    name: "Sand Castle",
    attack: 99,
    health: 13000,
    exp: 265,
    accLow: 103,
    accHigh: 308,
    respawnRate: 40,
    numMobs: 18,
    weight: 11.5,
  },
  {
    name: "Pincermin",
    attack: 112,
    health: 15500,
    exp: 290,
    accLow: 120,
    accHigh: 360,
    respawnRate: 50,
    numMobs: 13,
    weight: 9.5,
  },
  {
    name: "Mashed Potato",
    attack: 125,
    health: 18500,
    exp: 310,
    accLow: 130,
    accHigh: 390,
    respawnRate: 40,
    numMobs: 17,
    weight: 11.5,
  },
  {
    name: "Tyson",
    attack: 150,
    health: 23000,
    exp: 350,
    accLow: 150,
    accHigh: 450,
    respawnRate: 40,
    numMobs: 17,
    weight: 9.4,
  },
  {
    name: "Moonmoon",
    attack: 170,
    health: 26500,
    exp: 380,
    accLow: 165,
    accHigh: 495,
    respawnRate: 40,
    numMobs: 14,
    weight: 5.9,
  },
  {
    name: "Sand Giant",
    attack: 195,
    health: 30000,
    exp: 410,
    accLow: 183,
    accHigh: 548,
    respawnRate: 40,
    numMobs: 27,
    weight: 19.75,
  },
  {
    name: "Snelbie",
    attack: 225,
    health: 35000,
    exp: 460,
    accLow: 200,
    accHigh: 600,
    respawnRate: 40,
    numMobs: 12,
    weight: 3.8,
  },
  {
    name: "Sheepie",
    attack: 300,
    health: 55000,
    exp: 620,
    accLow: 275,
    accHigh: 825,
    respawnRate: 40,
    numMobs: 15,
    weight: 0,
  },
  {
    name: "Frost Flake",
    attack: 360,
    health: 67000,
    exp: 700,
    accLow: 350,
    accHigh: 1050,
    respawnRate: 40,
    numMobs: 13,
    weight: 0,
  },
  {
    name: "Sir Stache",
    attack: 420,
    health: 81000,
    exp: 800,
    accLow: 450,
    accHigh: 1350,
    respawnRate: 40,
    numMobs: 20,
    weight: 0,
  },
  {
    name: "Bloque",
    attack: 500,
    health: 100000,
    exp: 940,
    accLow: 575,
    accHigh: 1725,
    respawnRate: 40,
    numMobs: 19,
    weight: 0,
  },
  {
    name: "Mamooth",
    attack: 580,
    health: 115000,
    exp: 1030,
    accLow: 700,
    accHigh: 2100,
    respawnRate: 40,
    numMobs: 19,
    weight: 0,
  },
  {
    name: "Snowman",
    attack: 690,
    health: 135000,
    exp: 1130,
    accLow: 850,
    accHigh: 2550,
    respawnRate: 40,
    numMobs: 14,
    weight: 0,
  },
  {
    name: "Penguin",
    attack: 800,
    health: 160000,
    exp: 1250,
    accLow: 1000,
    accHigh: 3000,
    respawnRate: 40,
    numMobs: 13,
    weight: 0,
  },
  {
    name: "Thermister",
    attack: 950,
    health: 185000,
    exp: 1370,
    accLow: 1125,
    accHigh: 3375,
    respawnRate: 40,
    numMobs: 18,
    weight: 0,
  },
  {
    name: "Quenchie",
    attack: 1150,
    health: 22500,
    exp: 1570,
    accLow: 1300,
    accHigh: 3900,
    respawnRate: 40,
    numMobs: 19,
    weight: 0,
  },
  {
    name: "Cryosnake",
    attack: 1425,
    health: 260000,
    exp: 1690,
    accLow: 1450,
    accHigh: 4350,
    respawnRate: 40,
    numMobs: 20,
    weight: 0,
  },
  {
    name: "Bop Box",
    attack: 1700,
    health: 310000,
    exp: 1780,
    accLow: 1600,
    accHigh: 4800,
    respawnRate: 40,
    numMobs: 17,
    weight: 0,
  },
  {
    name: "Neyeptune",
    attack: 2000,
    health: 350000,
    exp: 1900,
    accLow: 1700,
    accHigh: 5100,
    respawnRate: 40,
    numMobs: 14,
    weight: 0,
  },
  {
    name: "Dedotated Ram",
    attack: 3000,
    health: 1250000,
    exp: 3500,
    accLow: 750,
    accHigh: 2250,
    respawnRate: 35,
    numMobs: 20,
    weight: 3.8,
  },
  {
    name: "Bloodbone",
    attack: 3000,
    health: 10000000,
    exp: 6000,
    accLow: 50,
    accHigh: 150,
    respawnRate: 40,
    numMobs: 1,
    weight: 0,
  },
];
