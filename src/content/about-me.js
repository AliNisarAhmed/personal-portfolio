export default [
  {
    input: 'Ali.currentLocation',
    return: '"Edmonton, AB, Canada"'
  },
  {
    input: 'Ali.contactInfo',
    return: `
    [
      "<a href="mailto:ali.ahmed@hey.com">ali.ahmed@hey.com</a>",
      "<a href="https://www.github.com/AliNisarAhmed" target="_blank">github</a>"
      "<a href="https://www.linkedin.com/in/ali-ahmed-390483b8/" target="_blank">LinkedIn</a>",
      "<a href="https://www.twitter.com/AliNisarAhmed" target="_blank">Twitter</a>",
      "<a href="https://www.facebook.com/Ali.AhmedNisar" target="_blank">Facebook</a>"
    ]`
  },
  {
    input: 'Ali.resume',
    return: '"<a rel="noopener" href="/AliAhmed_Resume.pdf" target="_blank">aliahmedResume.pdf</a>"'
  },
  {
    input: 'Ali.education',
    return: `
    [
      "BE Electrical Engineering, NED University of Engineering & Technology, Karachi, Pakistan"
      <br/>,
      "MBA Marketing & Finance, Institute of Business Administration, Karachi, Pakistan",
    ]`
  },
  {
    input: "Ali.skills",
    return: `["JavaScript", "TypeScript", "React", "React Native", "Redux", "C#", ".Net Core", "Haskell", "Elm", "Sass", "D3", "Jest", "React Testing Library", "Express JS", "MongoDB", "SQL Server", "PostgreSQL", "CSS Grid", "Flexbox"]`
  },
  {
    input: 'Ali.interests',
    return: `["Functional Programming", "Reading Books", "learning new tech", "Bridge", "Football"]`
  },
  {
    input: "Ali.currentlyLearning",
    return: `["UI/UX Design Fundamentals", "Elixir & Phoenix Framework"]`
  }
]