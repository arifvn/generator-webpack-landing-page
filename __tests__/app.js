"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-webpack-landing-page:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ someAnswer: true });
  });

  it("creates files", () => {
    assert.file([".browserslistrc"]);
    assert.file([".gitignore"]);
    assert.file([".eslintrc.js"]);
    assert.file(["LICENSE.txt"]);
    assert.file(["package-lock.json"]);
    assert.file(["package.json"]);
    assert.file(["postcss.config.js"]);
    assert.file(["README.md"]);
    assert.file(["webpack.config.js"]);
  });
});
