import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry text, kept as two clauses so the setup and the punch stay
// separately editable while the program always emits a single line.
const CLAUSES = [
  "The deadline was met in a parallel session.",
  "Unfortunately, this session is the one you are talking to.",
];

const GATE = { min: 1, max: 200 };

function entryText(): string {
  return CLAUSES.join(" ");
}

function writeEntry(outDir: string): string {
  const text = entryText();
  if (text.length < GATE.min || text.length > GATE.max) {
    throw new Error(
      `entry length ${text.length} is outside the 1-200 character gate`,
    );
  }
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, text, "utf8");
  // Byte-level verification: read the file back as raw bytes and refuse
  // to finish unless every byte matches the excuse exactly.
  const roundTrip = readFileSync(outPath);
  if (!Buffer.from(text, "utf8").equals(roundTrip)) {
    throw new Error(
      "entry.txt verification failed: written bytes do not match the excuse",
    );
  }
  return outPath;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = writeEntry(outDir);

console.log(`wrote ${outPath} (${entryText().length} characters)`);
