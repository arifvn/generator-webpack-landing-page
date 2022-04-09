"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const path = require("path");

module.exports = class extends Generator {
  welcome() {
    this.log(`Welcome to ${chalk.green("webpack-landing-page")} generator!`);
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "webTitle",
        message: "Your web title: ",
        default: path.basename(process.cwd())
      }
    ]);
  }

  writing() {
    this.fs.copy(
      this.templatePath(".browserslistrc"),
      this.destinationPath(".browserslistrc")
    );
    this.fs.copy(
      this.templatePath(".eslintrc.js"),
      this.destinationPath(".eslintrc.js")
    );
    this.fs.copy(
      this.templatePath("_gitignore"),
      this.destinationPath(".gitignore")
    );
    this.fs.copy(
      this.templatePath("LICENSE.txt"),
      this.destinationPath("LICENSE.txt")
    );
    this.fs.copy(
      this.templatePath("package.json"),
      this.destinationPath("package.json")
    );
    this.fs.copy(
      this.templatePath("package-lock.json"),
      this.destinationPath("package-lock.json")
    );
    this.fs.copy(
      this.templatePath("postcss.config.js"),
      this.destinationPath("postcss.config.js")
    );
    this.fs.copy(
      this.templatePath("README.md"),
      this.destinationPath("README.md")
    );
    this.fs.copy(
      this.templatePath("web.config.js"),
      this.destinationPath("web.config.js")
    );
    this.fs.write(
      this.destinationPath("web.config.js"),
      `
      const title = '${this.answers.webTitle}';
      module.exports = title;
      `
    );
    this.fs.copy(
      this.templatePath("webpack.common.js"),
      this.destinationPath("webpack.common.js")
    );
    this.fs.copy(
      this.templatePath("webpack.dev.js"),
      this.destinationPath("webpack.dev.js")
    );
    this.fs.copy(
      this.templatePath("webpack.prod.js"),
      this.destinationPath("webpack.prod.js")
    );
    this.fs.copy(this.templatePath("src"), this.destinationPath("src"));
  }

  Install() {
    this.log(" ");
    this.log(`${chalk.blue.bold("Installing dependencies ...")}`);
    this.installDependencies();
    this.log(" ");
    this.log(`${chalk.green.bold("Installing dependencies finished!")}`);
  }

  end() {
    this.log(" ");
    this.log(`${chalk.blue.bold("Generating project has finished!")}`);
    this.log("Project was generated from 🔻 ");
    this.log("https://github.com/empun/webpack-starter-project");
    this.log(
      `run ${chalk.green.bold("npm run dev")} to start development server`
    );
    this.log(" ");
  }
};
