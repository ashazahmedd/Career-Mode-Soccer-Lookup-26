import type { Player } from "./types";

// Real, current players (as of the 2026 summer transfer window). Clubs/ages
// are drawn from public reporting; overall/potential/value/wage are our own
// estimates informed by public market-value references (e.g. Transfermarkt),
// not official EA Sports FC ratings. Intended to be refreshed periodically —
// see README for the update process.
export const PLAYERS: Player[] = [
  // Goalkeepers
  { id: "p1", name: "Thibaut Courtois", age: 34, nationality: "Belgium", club: "Real Madrid", position: "GK", overall: 89, potential: 89, value: 25_000_000, wage: 220_000 },
  { id: "p2", name: "Alisson Becker", age: 33, nationality: "Brazil", club: "Liverpool", position: "GK", overall: 88, potential: 88, value: 22_000_000, wage: 210_000 },
  { id: "p3", name: "Emiliano Martínez", age: 33, nationality: "Argentina", club: "Aston Villa", position: "GK", overall: 86, potential: 86, value: 18_000_000, wage: 150_000 },
  { id: "p4", name: "Ewen Jaouen", age: 24, nationality: "France", club: "Newcastle United", position: "GK", overall: 78, potential: 87, value: 20_000_000, wage: 45_000 },

  // Centre-backs
  { id: "p5", name: "William Saliba", age: 25, nationality: "France", club: "Arsenal", position: "CB", overall: 89, potential: 91, value: 90_000_000, wage: 220_000 },
  { id: "p6", name: "Virgil van Dijk", age: 35, nationality: "Netherlands", club: "Liverpool", position: "CB", overall: 86, potential: 86, value: 15_000_000, wage: 230_000 },
  { id: "p7", name: "Ibrahima Konaté", age: 27, nationality: "France", club: "Real Madrid", position: "CB", overall: 87, potential: 88, value: 75_000_000, wage: 190_000 },
  { id: "p8", name: "Pascal Struijk", age: 26, nationality: "Netherlands", club: "Brighton", position: "CB", overall: 81, potential: 85, value: 32_000_000, wage: 70_000 },
  { id: "p9", name: "Jeremy Jacquet", age: 22, nationality: "France", club: "Liverpool", position: "CB", overall: 77, potential: 87, value: 38_000_000, wage: 45_000 },
  { id: "p10", name: "Antonio Rüdiger", age: 33, nationality: "Germany", club: "Real Madrid", position: "CB", overall: 84, potential: 84, value: 12_000_000, wage: 175_000 },

  // Left-backs
  { id: "p11", name: "Alejandro Grimaldo", age: 30, nationality: "Spain", club: "Bayer Leverkusen", position: "LB", overall: 86, potential: 86, value: 48_000_000, wage: 130_000 },
  { id: "p12", name: "Marc Cucurella", age: 28, nationality: "Spain", club: "Real Madrid", position: "LB", overall: 84, potential: 84, value: 55_000_000, wage: 160_000 },
  { id: "p13", name: "Nuno Mendes", age: 23, nationality: "Portugal", club: "Paris Saint-Germain", position: "LB", overall: 87, potential: 90, value: 70_000_000, wage: 140_000 },

  // Right-backs
  { id: "p14", name: "Achraf Hakimi", age: 27, nationality: "Morocco", club: "Paris Saint-Germain", position: "RB", overall: 88, potential: 89, value: 80_000_000, wage: 200_000 },
  { id: "p15", name: "Trent Alexander-Arnold", age: 27, nationality: "England", club: "Real Madrid", position: "RB", overall: 86, potential: 87, value: 65_000_000, wage: 210_000 },
  { id: "p16", name: "Jannik Schuster", age: 20, nationality: "Austria", club: "Brentford", position: "RB", overall: 74, potential: 86, value: 18_000_000, wage: 25_000 },

  // Defensive midfielders
  { id: "p17", name: "Rodri", age: 30, nationality: "Spain", club: "Manchester City", position: "CDM", overall: 90, potential: 90, value: 110_000_000, wage: 300_000 },
  { id: "p18", name: "Declan Rice", age: 27, nationality: "England", club: "Arsenal", position: "CDM", overall: 87, potential: 88, value: 95_000_000, wage: 220_000 },
  { id: "p19", name: "Sandro Tonali", age: 26, nationality: "Italy", club: "Tottenham Hotspur", position: "CDM", overall: 85, potential: 87, value: 90_000_000, wage: 180_000 },
  { id: "p20", name: "Moisés Caicedo", age: 24, nationality: "Ecuador", club: "Chelsea", position: "CDM", overall: 85, potential: 89, value: 85_000_000, wage: 170_000 },

  // Central midfielders
  { id: "p21", name: "Pedri", age: 23, nationality: "Spain", club: "Barcelona", position: "CM", overall: 89, potential: 92, value: 120_000_000, wage: 240_000 },
  { id: "p22", name: "Federico Valverde", age: 27, nationality: "Uruguay", club: "Real Madrid", position: "CM", overall: 88, potential: 89, value: 110_000_000, wage: 250_000 },
  { id: "p23", name: "Martin Ødegaard", age: 27, nationality: "Norway", club: "Arsenal", position: "CM", overall: 88, potential: 88, value: 100_000_000, wage: 230_000 },
  { id: "p24", name: "Vitinha", age: 25, nationality: "Portugal", club: "Paris Saint-Germain", position: "CM", overall: 87, potential: 89, value: 90_000_000, wage: 180_000 },
  { id: "p25", name: "Warren Zaïre-Emery", age: 20, nationality: "France", club: "Paris Saint-Germain", position: "CM", overall: 82, potential: 91, value: 65_000_000, wage: 60_000 },

  // Attacking midfielders
  { id: "p26", name: "Jude Bellingham", age: 22, nationality: "England", club: "Real Madrid", position: "CAM", overall: 91, potential: 93, value: 180_000_000, wage: 320_000 },
  { id: "p27", name: "Jamal Musiala", age: 23, nationality: "Germany", club: "Bayern Munich", position: "CAM", overall: 89, potential: 92, value: 140_000_000, wage: 250_000 },
  { id: "p28", name: "Florian Wirtz", age: 23, nationality: "Germany", club: "Liverpool", position: "CAM", overall: 88, potential: 91, value: 130_000_000, wage: 240_000 },
  { id: "p29", name: "Kenan Yıldız", age: 21, nationality: "Turkey", club: "Juventus", position: "CAM", overall: 84, potential: 90, value: 70_000_000, wage: 100_000 },
  { id: "p30", name: "Ibrahim Maza", age: 20, nationality: "Germany", club: "Bayer Leverkusen", position: "CAM", overall: 78, potential: 88, value: 32_000_000, wage: 40_000 },

  // Left wingers
  { id: "p31", name: "Lamine Yamal", age: 19, nationality: "Spain", club: "Barcelona", position: "LW", overall: 92, potential: 96, value: 220_000_000, wage: 300_000 },
  { id: "p32", name: "Rafael Leão", age: 27, nationality: "Portugal", club: "AC Milan", position: "LW", overall: 86, potential: 87, value: 75_000_000, wage: 170_000 },
  { id: "p33", name: "Nico Williams", age: 24, nationality: "Spain", club: "Athletic Bilbao", position: "LW", overall: 85, potential: 88, value: 80_000_000, wage: 110_000 },
  { id: "p34", name: "Anthony Gordon", age: 25, nationality: "England", club: "Barcelona", position: "LW", overall: 84, potential: 87, value: 75_000_000, wage: 150_000 },

  // Right wingers
  { id: "p35", name: "Vinícius Júnior", age: 26, nationality: "Brazil", club: "Real Madrid", position: "RW", overall: 91, potential: 92, value: 180_000_000, wage: 280_000 },
  { id: "p36", name: "Bukayo Saka", age: 24, nationality: "England", club: "Arsenal", position: "RW", overall: 89, potential: 91, value: 140_000_000, wage: 220_000 },
  { id: "p37", name: "Désiré Doué", age: 21, nationality: "France", club: "Paris Saint-Germain", position: "RW", overall: 83, potential: 90, value: 65_000_000, wage: 90_000 },
  { id: "p38", name: "Gilberto Mora", age: 17, nationality: "Mexico", club: "Xolos Tijuana", position: "RW", overall: 74, potential: 91, value: 28_000_000, wage: 15_000 },

  // Strikers
  { id: "p39", name: "Erling Haaland", age: 26, nationality: "Norway", club: "Manchester City", position: "ST", overall: 92, potential: 93, value: 200_000_000, wage: 320_000 },
  { id: "p40", name: "Kylian Mbappé", age: 27, nationality: "France", club: "Real Madrid", position: "ST", overall: 92, potential: 92, value: 190_000_000, wage: 310_000 },
  { id: "p41", name: "Victor Osimhen", age: 27, nationality: "Nigeria", club: "Galatasaray", position: "ST", overall: 87, potential: 87, value: 75_000_000, wage: 160_000 },
  { id: "p42", name: "Alexander Isak", age: 26, nationality: "Sweden", club: "Liverpool", position: "ST", overall: 87, potential: 88, value: 110_000_000, wage: 220_000 },
  { id: "p43", name: "Endrick", age: 19, nationality: "Brazil", club: "Real Madrid", position: "ST", overall: 80, potential: 92, value: 55_000_000, wage: 60_000 },
  { id: "p44", name: "Robert Lewandowski", age: 37, nationality: "Poland", club: "Chicago Fire", position: "ST", overall: 82, potential: 82, value: 8_000_000, wage: 90_000 },
];
