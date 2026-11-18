import assert from "node:assert/strict";
import test from "node:test";

import { experience } from "./personal-info.ts";

// The home page prints these numbers in its biggest type, so a bad edit to
// `experience` would show up as a wrong headline instead of a compile error.
const yearsOf = (date: string) => date.match(/\d{4}/g) ?? [];
const allYears = experience.flatMap((job) => yearsOf(job.date)).sort();

test("career span covers the oldest and newest year on record", () => {
  assert.equal(allYears[0], "2022"); // Casurid started June 2022
  assert.equal(allYears.at(-1), "2026"); // Veho, April 2026
});

test("every role has a parseable date and at least one bullet", () => {
  for (const job of experience) {
    assert.ok(yearsOf(job.date).length >= 1, `${job.company}: no year in "${job.date}"`);
    assert.ok(job.points.length > 0, `${job.company}: no bullets`);
  }
});
