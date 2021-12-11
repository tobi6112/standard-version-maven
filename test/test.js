const assert = require("assert");
const fs = require("fs/promises");
const { readVersion, writeVersion } = require("../index.js");
const { XMLParser } = require("fast-xml-parser");

describe("Minimal POM", function() {
    describe("readVersion", function() {
        it("should return 1.2.3", async function() {
            const pomData = await fs.readFile("test/fixtures/pom-minimal.xml");
            assert.equal(readVersion(pomData), "1.2.3");
        });
    });
    describe("writeVersion", function() {
        it("should write 1.2.4", async function() {
            const pomData = await fs.readFile("test/fixtures/pom-minimal.xml");
            const newPom = writeVersion(pomData, "1.2.4");
            const parser = new XMLParser();
            const pom = parser.parse(newPom);
            assert.equal(pom.project.version, "1.2.4");
        });
    });
});