// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ![GitHub License Badge](https://img.shields.io/github/license/${answers.username}/${answers.repo_name}?style=for-the-badge)
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${answers.username}/${answers.repo_name}?style=for-the-badge)
  ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${answers.username}/${answers.repo_name}?style=for-the-badge)

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ![Application Functionality](${answers.screenshot})

  ## Credits
  **Author:** ${answers.name}
  * GitHub: [${answers.username}](https://github.com/${answers.username})
  * Email: [${answers.email}](mailto:${answers.email})

  ## License
  This application is copyrighted under: ${answers.license}.

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}
`;
}

module.exports = generateMarkdown;