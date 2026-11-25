// One-Line Office Joke Laugh-Off entry (u-suzy-one-line-office-joke-laugh-off-f574ac73).
// The program writes exactly one line — a single office joke — to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 200 characters, a single line, no trailing
// newline, and not only whitespace. This line is 85 characters long.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE = "I told my boss I needed a mental health day, so he scheduled a meeting to discuss it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Validate the line against the gate before trusting the write.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line with no newline");
}
if (LINE.trim().length === 0) {
  throw new Error("Line must not be only whitespace");
}

// Read back and compare byte-for-byte.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("Read-back mismatch: /output/entry.txt does not match LINE");
}

console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
console.log(LINE);
