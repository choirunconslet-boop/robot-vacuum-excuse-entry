import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Vacuum's Best Excuse — one line, <= 140 characters.
// First-person vacuum voice, rooted in its own world (lidar + map).
const excuse =
  "My lidar saw the crumbs, panicked, and filed them under 'furniture' — I never argue with my own map.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
