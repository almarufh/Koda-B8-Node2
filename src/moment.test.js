import withMoment from "./moment.js";
import {describe, it} from "node:test";
import assert from "node:assert/strict";

describe("Proses convert date manual", () => {
    it("Should return string", () => {
        assert.equal(typeof withMoment("22-06-2026"), "string")
    })
})