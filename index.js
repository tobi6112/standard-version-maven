const { XMLParser, XMLBuilder } = require("fast-xml-parser");

function parseXML(contents) {
    const parser = new XMLParser();
    const pom = parser.parse(contents);
    return pom;
};

function verifyPom(pomObject) {
    if(!pomObject.project?.version) {
        throw new Error("Could not extract project version from the provided pom file. Is it correctly specified?");
    }
};

function buildXML(obj) {
    const builder = new XMLBuilder();
    return builder.build(obj);
};

function readVersion(contents) {
    const pom = parseXML(contents);
    verifyPom(pom);

    return pom.project.version;
};

function writeVersion(contents, version) {
    const pom = parseXML(contents);
    verifyPom(pom);

    pom.project.version = version;

    return buildXML(pom);
};

module.exports = {
    readVersion,
    writeVersion
}