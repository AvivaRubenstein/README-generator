// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var badgeLink;
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      badgeLink = "https://img.shields.io/bower/l/bootstrap?style=for-the-badge";
      break;
    case "Apache":
      badgeLink = "https://img.shields.io/aur/license/bootstrap?style=for-the-badge";
      break;
    case "GPL":
      badgeLink = "https://img.shields.io/badge/License-GPL-blue.svg";
      break;
    case "none":
      badgeLink = "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
var licenseLink;
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      licenseLink = "https://spdx.org/licenses/MIT.html";
      break;
    case "Apache":
      licenseLink = "https://spdx.org/licenses/Apache-2.0.html";
      break;
    case "GPL":
      licenseLink = "https://spdx.org/licenses/GPL-3.0-or-later.html";
      break;
    case "none":
      licenseLink = "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
var licenseSection;
function renderLicenseSection(license) {
  if (license !== "none") {
     licenseSection = `This project uses the ${license} license, which can be referenced at ${licenseLink} .`
  } else licenseSection = "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  renderLicenseLink(data.license);
  renderLicenseSection(data.license);

  return `# ${data.title}
  
  ![LicenseBadge](${badgeLink})

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

${licenseSection}


---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

## Questions:
To contact me with additional questions, please reach out via GitHub:
${data.github}
or via email:
${data.email}


`;
}

module.exports = generateMarkdown;
