// function to generate markdown for README
function generateMarkdown(data) {

    return `# ${data.title}


  # Table of Contents 

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)
  
  ## Description:
  ${data.description}
 ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Test:
  ${data.tests}
 ## License:
    ${data.license}
  
  ## Questions
  For more questions about the Generator, please contact me at:
  
  * [Github Profile](http://github.com/${data.githubName})
  * ${data.email}
      
  `;
}

module.exports = generateMarkdown;