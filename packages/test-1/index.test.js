import { test, expect } from "vitest";

import { sum } from "./index.js";

test("It sums", () => {
	expect(sum(1, 2, 3)).toBe(6);
});
