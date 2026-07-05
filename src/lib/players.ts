import type { Player } from "./types";

// A fictional roster of free-agent / transfer-listed players for the career mode
// transfer market. Names, clubs, and ratings are invented for this demo.
export const PLAYERS: Player[] = [
  // Goalkeepers
  { id: "p1", name: "Dario Kovacevic", age: 29, nationality: "Croatia", club: "Iberia CF", position: "GK", overall: 88, potential: 89, value: 62_000_000, wage: 210_000 },
  { id: "p2", name: "Femi Adeyemi", age: 24, nationality: "Nigeria", club: "Thames City", position: "GK", overall: 82, potential: 88, value: 34_000_000, wage: 95_000 },
  { id: "p3", name: "Lars Bengtsson", age: 33, nationality: "Norway", club: "Nordic United", position: "GK", overall: 84, potential: 84, value: 12_000_000, wage: 140_000 },
  { id: "p4", name: "Yusuke Tanaka", age: 19, nationality: "Japan", club: "Sakura Osaka", position: "GK", overall: 71, potential: 87, value: 9_500_000, wage: 22_000 },

  // Centre-backs
  { id: "p5", name: "Bruno Castilho", age: 27, nationality: "Brazil", club: "Rio Estrela", position: "CB", overall: 89, potential: 90, value: 78_000_000, wage: 260_000 },
  { id: "p6", name: "Hakan Aydin", age: 26, nationality: "Turkey", club: "Bosphorus United", position: "CB", overall: 85, potential: 87, value: 46_000_000, wage: 150_000 },
  { id: "p7", name: "William Ashworth", age: 31, nationality: "England", club: "Highland Rangers", position: "CB", overall: 83, potential: 83, value: 22_000_000, wage: 130_000 },
  { id: "p8", name: "Mateo Villanueva", age: 21, nationality: "Argentina", club: "Pampas Athletic", position: "CB", overall: 77, potential: 89, value: 28_000_000, wage: 48_000 },
  { id: "p9", name: "Kwame Boateng", age: 25, nationality: "Ghana", club: "Atlas Casablanca", position: "CB", overall: 80, potential: 84, value: 24_000_000, wage: 70_000 },
  { id: "p10", name: "Tomasz Wisniewski", age: 35, nationality: "Poland", club: "Alpine Torino", position: "CB", overall: 79, potential: 79, value: 4_500_000, wage: 95_000 },

  // Left-backs
  { id: "p11", name: "Luca Moretti", age: 25, nationality: "Italy", club: "Alpine Torino", position: "LB", overall: 84, potential: 87, value: 42_000_000, wage: 135_000 },
  { id: "p12", name: "Ibrahima Diatta", age: 22, nationality: "Senegal", club: "Atlas Casablanca", position: "LB", overall: 79, potential: 86, value: 26_000_000, wage: 58_000 },
  { id: "p13", name: "Owen Sinclair", age: 30, nationality: "Scotland", club: "Highland Rangers", position: "LB", overall: 78, potential: 78, value: 9_000_000, wage: 75_000 },

  // Right-backs
  { id: "p14", name: "Rafael Nunes", age: 24, nationality: "Portugal", club: "Lusitano SC", position: "RB", overall: 83, potential: 88, value: 40_000_000, wage: 120_000 },
  { id: "p15", name: "Kenji Watanabe", age: 26, nationality: "Japan", club: "Sakura Osaka", position: "RB", overall: 80, potential: 82, value: 20_000_000, wage: 68_000 },
  { id: "p16", name: "Marcus Whitfield", age: 33, nationality: "England", club: "Thames City", position: "RB", overall: 81, potential: 81, value: 8_000_000, wage: 110_000 },

  // Defensive midfielders
  { id: "p17", name: "Nikolai Petrov", age: 28, nationality: "Ukraine", club: "Bosphorus United", position: "CDM", overall: 86, potential: 87, value: 52_000_000, wage: 165_000 },
  { id: "p18", name: "Diego Salcedo", age: 23, nationality: "Colombia", club: "Vermelho SC", position: "CDM", overall: 81, potential: 87, value: 34_000_000, wage: 88_000 },
  { id: "p19", name: "Amadou Traore", age: 30, nationality: "Ivory Coast", club: "Atlas Casablanca", position: "CDM", overall: 82, potential: 82, value: 18_000_000, wage: 95_000 },
  { id: "p20", name: "Petar Ilic", age: 20, nationality: "Serbia", club: "Bosphorus United", position: "CDM", overall: 74, potential: 88, value: 16_000_000, wage: 32_000 },

  // Central midfielders
  { id: "p21", name: "Théo Lefebvre", age: 26, nationality: "France", club: "Iberia CF", position: "CM", overall: 90, potential: 91, value: 95_000_000, wage: 290_000 },
  { id: "p22", name: "Matías Herrera", age: 29, nationality: "Argentina", club: "Pampas Athletic", position: "CM", overall: 87, potential: 87, value: 55_000_000, wage: 190_000 },
  { id: "p23", name: "Jonas Eriksen", age: 24, nationality: "Denmark", club: "Nordic United", position: "CM", overall: 83, potential: 88, value: 44_000_000, wage: 105_000 },
  { id: "p24", name: "Sami Korhonen", age: 32, nationality: "Finland", club: "Nordic United", position: "CM", overall: 80, potential: 80, value: 9_500_000, wage: 100_000 },
  { id: "p25", name: "Emeka Nwosu", age: 18, nationality: "Nigeria", club: "Thames City", position: "CM", overall: 70, potential: 89, value: 12_000_000, wage: 18_000 },

  // Attacking midfielders
  { id: "p26", name: "Facundo Rios", age: 25, nationality: "Argentina", club: "Rio Estrela", position: "CAM", overall: 88, potential: 90, value: 74_000_000, wage: 230_000 },
  { id: "p27", name: "Antoine Beaumont", age: 22, nationality: "France", club: "Thames City", position: "CAM", overall: 84, potential: 91, value: 58_000_000, wage: 120_000 },
  { id: "p28", name: "Youssef Amrani", age: 27, nationality: "Morocco", club: "Atlas Casablanca", position: "CAM", overall: 85, potential: 86, value: 48_000_000, wage: 140_000 },
  { id: "p29", name: "Jaewon Choi", age: 21, nationality: "Korea Republic", club: "Sakura Osaka", position: "CAM", overall: 78, potential: 88, value: 30_000_000, wage: 55_000 },

  // Wide midfielders
  { id: "p30", name: "Harry Blackwood", age: 28, nationality: "Wales", club: "Highland Rangers", position: "LM", overall: 80, potential: 80, value: 15_000_000, wage: 85_000 },
  { id: "p31", name: "Dimitri Popescu", age: 23, nationality: "Romania", club: "Bosphorus United", position: "RM", overall: 79, potential: 85, value: 22_000_000, wage: 60_000 },

  // Wingers
  { id: "p32", name: "Caetano Duarte", age: 23, nationality: "Brazil", club: "Rio Estrela", position: "LW", overall: 89, potential: 93, value: 105_000_000, wage: 250_000 },
  { id: "p33", name: "Idris Coulibaly", age: 20, nationality: "Mali", club: "Atlas Casablanca", position: "LW", overall: 80, potential: 91, value: 42_000_000, wage: 62_000 },
  { id: "p34", name: "Rúben Cardoso", age: 26, nationality: "Portugal", club: "Lusitano SC", position: "RW", overall: 87, potential: 88, value: 68_000_000, wage: 195_000 },
  { id: "p35", name: "Marco Bellandi", age: 29, nationality: "Italy", club: "Alpine Torino", position: "RW", overall: 85, potential: 85, value: 38_000_000, wage: 150_000 },

  // Strikers
  { id: "p36", name: "Kai Ostergaard", age: 27, nationality: "Denmark", club: "Nordic United", position: "ST", overall: 91, potential: 92, value: 130_000_000, wage: 320_000 },
  { id: "p37", name: "Santiago Moya", age: 24, nationality: "Uruguay", club: "Pampas Athletic", position: "ST", overall: 88, potential: 92, value: 92_000_000, wage: 240_000 },
  { id: "p38", name: "Chidi Eze", age: 22, nationality: "Nigeria", club: "Thames City", position: "ST", overall: 84, potential: 90, value: 56_000_000, wage: 130_000 },
  { id: "p39", name: "Omar Faruk", age: 30, nationality: "Egypt", club: "Atlas Casablanca", position: "ST", overall: 86, potential: 86, value: 40_000_000, wage: 175_000 },
  { id: "p40", name: "Bastian Hoffmann", age: 34, nationality: "Germany", club: "Bavaria Munchen", position: "ST", overall: 82, potential: 82, value: 8_000_000, wage: 160_000 },
  { id: "p41", name: "Tyler Osei", age: 19, nationality: "Ghana", club: "Highland Rangers", position: "ST", overall: 73, potential: 90, value: 18_000_000, wage: 25_000 },
  { id: "p42", name: "Nico Aguirre", age: 26, nationality: "Argentina", club: "Vermelho SC", position: "ST", overall: 83, potential: 85, value: 34_000_000, wage: 115_000 },
  { id: "p43", name: "Josip Radic", age: 31, nationality: "Croatia", club: "Iberia CF", position: "ST", overall: 84, potential: 84, value: 20_000_000, wage: 145_000 },

  // A few extra midfield/defence squad options for depth
  { id: "p44", name: "Connor McAllister", age: 20, nationality: "Scotland", club: "Highland Rangers", position: "CM", overall: 72, potential: 84, value: 8_500_000, wage: 20_000 },
  { id: "p45", name: "Andres Peralta", age: 33, nationality: "Chile", club: "Vermelho SC", position: "CB", overall: 78, potential: 78, value: 3_000_000, wage: 80_000 },
];
