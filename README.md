# Standard-Version Maven Updater

A Maven POM updater for [standard-version](https://github.com/conventional-changelog/standard-version).

## Usage

```js
module.exports = {
  bumpFiles: [
    {
      filename: 'pom.xml',
      updater:
        './node_modules/standard-version-maven/index.js'
    }
  ]
};

```

## Limitations

- Version must not be specified using interpolation
- The updater will not work for multi-module projects out-of-the box, you will need to apply this updater on each pom file in your bump/package Files.

Keep an eye on [this PR](https://github.com/conventional-changelog/standard-version/pull/591) for additional Maven support.