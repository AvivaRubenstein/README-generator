//function that returns a license badge based on which license is passed in
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

// function that returns the license link
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

//function that returns the license section of README
// If there is no license, return an empty string
var licenseSection;
function renderLicenseSection(license) {
  if (license !== "none") {
     licenseSection = `This project uses the ${license} license, which can be referenced at ${licenseLink} .`
  } else licenseSection = "";
}

// function to generate markdown for README
//we stored the data containing the user's answers in the "data" variable, which we are passing into the generateMarkdown function so that we can 
//insert the necessary information into the README file
function generateMarkdown(data) {
  
  renderLicenseBadge(data.license);
  renderLicenseLink(data.license);
  renderLicenseSection(data.license);

  //this function returns all of the text necessary for the README file, formatted in Markdown style
  return `# ${data.title}
  
  ![LicenseBadge](${badgeLink})

## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}


## License

${licenseSection}

## Contributing

${data.contribution}

## Tests

${data.testing}

## Questions:

To contact me with additional questions, please reach out via GitHub:
[${data.github}](https://github.com/${data.github})

or via email:
${data.email}


`;
}

//we are exporting the generateMarkdown function so that it can be called in the index.js file
module.exports = generateMarkdown;
