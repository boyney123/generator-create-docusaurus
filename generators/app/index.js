const Generator = require("yeoman-generator");
const kebabCase = require("lodash.kebabcase");

module.exports = class extends Generator {
  constructor(...args) {
    super(...args);

    this.option("project", {
      type: String,
      description: "Name of the project"
    });
  }
  init() {
    return this.prompt([
      {
        name: "author",
        message: "What is your GitHub username?",
        required: true
      },
      {
        name: "project",
        message: "What is the name of the project?",
        default: this.appname.replace(/\s/g, "-"),
        filter: x => kebabCase(x).toLowerCase()
      },
      {
        name: "githubProject",
        message: "What will be the GitHub project name?",
        default: answers => answers.project
      },
      {
        name: "url",
        message: "What will be the url of your documentation website?",
        default: answers => `https://${answers.project}.netlify.com`
      },
      {
        name: "pageTitle",
        message: "Project title (shown on the homepage)?",
        default: answers => answers.project
      },
      {
        name: "pageTagLine",
        message: "Project tag line (shown on the homepage)",
        default: "My awesome brand new tool to help developers"
      },
      {
        name: "twitter",
        message: "Would you like your twitter handle on the page? (Please provide your @ handle if you do)"
      }
    ]).then(props => {
      const or = (option, prop) => (this.options[option] === undefined ? props[prop || option] : this.options[option]);

      const mv = (from, to) => {
        this.fs.move(this.destinationPath(from), this.destinationPath(to));
      };

      this.fs.copyTpl([`${this.templatePath()}/**`], this.destinationPath(), props);
    });
  }
  install() {
    this.spawnCommand("git", ["init"]);
    this.spawnCommandSync("npm", ["install"], { cwd: "./website" });
    this.spawnCommandSync("npm", ["start"], { cwd: "./website" });
  }
};
