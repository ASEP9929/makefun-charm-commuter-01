// Charm the Commuter: Forecast a City That Isn't
// One line of weather for a city that does not exist.
// Final: cut "light" — drizzle already says it, so every word earns its place.
// 107 chars, one line, invented city named, forecast register, commuter punch last.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Brollyford today: drizzle until 9, then sunshine, with a 100% chance the 8:15 bus arrives on time for once.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
console.log(`wrote ${line.length} chars to /output/entry.txt`);
