import { writeFileSync, existsSync, mkdirSync } from "fs";
import { id } from "./lib/data";

if (!existsSync("styles")) {
  mkdirSync("styles");
}

const output = `
$corPrimary: ${id.corPrimary};
$corSecondary: ${id.corSecondary}; 

:root {
  --cor-primary: #{$corPrimary};
  --cor-secondary: #{$corSecondary};
}`;

writeFileSync("styles/colors.scss", output.trim());
