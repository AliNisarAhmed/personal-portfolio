export default [
  {
    input: 'Ali.currentLocation',
    return: '"Edmonton, AB, Canada"'
  },
  {
    input: 'Ali.contactInfo',
    return: `
    [
      "<a href="mailto:ali.nisar87@gmail.com">ali.nisar87@gmail.com</a>",
      "<a href="https://www.github.com/AliNisarAhmed" target="_blank">github</a>"
      "<a href="https://www.linkedin.com/in/ali-ahmed-390483b8/" target="_blank">LinkedIn</a>",
      "<a href="https://www.twitter.com/AliNisarAhmed" target="_blank">Twitter</a>",
      "<a href="https://www.facebook.com/Ali.AhmedNisar" target="_blank">Facebook</a>"
    ]`
  },
  {
    input: 'Ali.resume',
    return: '"<a rel="noopener" href="/Ali_Ahmed_Resume.pdf" target="_blank">aliahmed.pdf</a>"'
  },
  {
    input: 'Ali.education',
    return: `
    [
      "BE Electrical Engineering, NED University, Karachi, Pakistan"
      <br/>,
      "MBA Marketing & Finance, IBA Karachi, Pakistan",
    ]`
  },
  {
    input: "Ali.skills",
    return: `["JavaScript", "React", "Vue", "Elm", "Sass", "Redux", "D3", "Jest", "Mocha & Chai", "Express", "Mongoose", "knexJS", "PostgreSQL", "CSS Grid", "Flexbox"]`
  },
  {
    input: 'Ali.interests',
    return: `["Functional programming", "logic problems", "learning new stuff", "bridge", "football"]`
  },
  {
    input: "Ali.currentlyLearning",
    return: `["Haskell", "GraphQL", "SVG", "TypeScript"]`
  }
]