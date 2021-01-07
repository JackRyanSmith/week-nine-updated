// function to generate markdown for README
function generateMarkdown(data) {
    let l = data.license.replace(" ", "%20");
    return `
# ${data.title} ![Github license](https://img.shields.io/badge/license-${l}-blue)
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`
## Usage
${data.usage}
## License
This project is licensed under the ${data.license}
## Contributing
${data.contribute}
## Tests
To run tests, run the following command:
\`\`\`
${data.tests}
\`\`\`
## Questions 
If you have any questions about the repo, open an issue or contact me directly at
${data.githubEmail}. You can find more of my work at [${data.githubUsername}](https://github.com/${data.githubUsername}).
    `;
}
module.exports = generateMarkdown;