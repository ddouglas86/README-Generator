// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === "MIT") {
    badge =  badge = `![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)`;
  } else if (license === 'APACHE2.0') {
    badge = `![License](https://img.shields.io/badge/license-Apache_2.0-blue.svg)`;
  } else if (license === 'Mozilla Public License 2.0') {
    badge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  } else {
    badge = ''
  }
  return badge;

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (license === 'APACHE2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'Mozilla Public License 2.0') {
    licenseLink = 'https://opensource.org/licenses/MPL-2.0'
  } else {
    licenseLink = 'None'
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license ==='None') {
    licenseSection = ''
  } else {
    `licenseSection = ${license}`
  }  
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ### ${renderLicenseBadge(data.license)}

  ## Table of Contents:
  - [License](#license)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Screenshot](#screenshot)
  - [Contributors](#contributors)
  - [Questions?](#questions)

  ## License
  ### ${renderLicenseLink(data.license)}


  ## Description
  ### ${data.description}

  ## Installation
  ### ${data.installation}

  ## Usage
  ### ${data.usage}

  ## Tests
  ### ${data.tests}

  ## Screenshot
  ### ${data.screenshot}

  ## Contributors
  ### ${data.contribution}

  ## Questions? Reach me here:
  ### https://github.com/${data.github}
  ### ${data.email}
`;
}

module.exports = generateMarkdown;
