// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var badgeLink;
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      badgeLink = "https://img.shields.io/bower/l/bootstrap?style=for-the-badge";
      break;
    case "Apache":
      badgeLink = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
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

## How to Contribute

${data.contribution}

## Tests

${data.testing}

## Questions:
To contact me with additional questions, please reach out via GitHub:
${data.github}
or via email:
${data.email}


`;
}

module.exports = generateMarkdown;
