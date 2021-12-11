import { strict as assert } from "assert";
import { readFile } from "fs/promises";
import { readVersion, writeVersion } from "../index.js";
import { XMLParser } from "fast-xml-parser";

describe("Minimal POM", function() {
    describe("readVersion", function() {
        it("should return 1.2.3", async function() {
            const pomData = await readFile("test/fixtures/pom-minimal.xml");
            assert.equal(readVersion(pomData), "1.2.3");
        });
    });
    describe("writeVersion", function() {
        it("should write 1.2.4", async function() {
            const pomData = await readFile("test/fixtures/pom-minimal.xml");
            const newPom = writeVersion(pomData, "1.2.4");
            const parser = new XMLParser();
            const pom = parser.parse(newPom);
            assert.equal(pom.project.version, "1.2.4");
        });
    });
});