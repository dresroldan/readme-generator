// function to generate markdown for README
function generateMarkdown(data) {
    return `
  
  # ${data.title}

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
  ${data.test}
  ## Credits:
  ${data.credits}
  ## License:
      For more information about the License, click on the link below
  
  ## Questions: For more questions about the Generator you can go to my Github page at the following link:
  
  [Github Profile](http://github.com/${data.username})
  
  for additional questions please reach out to my email at: ${data.email}
      
  `;
}

module.exports = generateMarkdown;