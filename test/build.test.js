import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexPath = path.join(__dirname, "..", "src", "index.html");

test("welcome copy exists in source HTML", () => {
  const html = fs.readFileSync(indexPath, "utf8");
  assert.ok(html.includes("Welcome to TPS Onsite 2026!!"));
});
